const fs = require('fs');
const yaml = require('yaml');

const swaggerFile = 'swagger.yaml';

// The comment to add at the top of the file
const FILE_HEADER = `# THIS FILE IS AUTO-GENERATED
# DO NOT MODIFY IT MANUALLY
# CHANGES WILL BE OVERWRITTEN

`;

try {
  // Read the swagger.yaml file
  const swaggerData = fs.readFileSync(swaggerFile, 'utf8');
  const swaggerDoc = yaml.parse(swaggerData);

  // Get the BaseCommandRequest schema from the Swagger document
  const baseCommandRequest = swaggerDoc.components.schemas.BaseCommandRequest;

  // Iterate over the paths in the Swagger document
  for (const [path, pathItem] of Object.entries(swaggerDoc.paths)) {
    for (const [method, operation] of Object.entries(pathItem)) {
      if (operation?.requestBody?.content['application/json']?.schema) {
        const requestSchema =
          operation.requestBody.content['application/json'].schema;

        if (requestSchema && requestSchema.items && requestSchema.items.allOf) {
          const allOfItems = requestSchema.items.allOf;

          // Check if the schema references BaseCommandRequest
          const baseCommandRequestIndex = allOfItems.findIndex(
            (item) => item.$ref === '#/components/schemas/BaseCommandRequest',
          );

          if (baseCommandRequestIndex !== -1) {
            // Replace the $ref with the contents of BaseCommandRequest
            allOfItems[baseCommandRequestIndex] = {
              ...baseCommandRequest,
              properties: {
                ...baseCommandRequest.properties,
                cmd: {
                  ...baseCommandRequest.properties.cmd,
                  enum: [operation.operationId],
                },
              },
            };
          }
        }
      }
    }
  }

  // Write the modified Swagger document back to the file
  const updatedSwaggerData = yaml.stringify(swaggerDoc);
  const finalContent = FILE_HEADER + updatedSwaggerData;
  fs.writeFileSync(swaggerFile, finalContent, 'utf8');

  console.log('Swagger file updated successfully.');
} catch (error) {
  console.error('Error updating Swagger file:', error);
  process.exit(1);
}
