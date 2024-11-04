const fs = require('fs');
const path = require('path');
const yaml = require('yaml');

// The comment to add at the top of the file
const FILE_HEADER = `# THIS FILE IS AUTO-GENERATED
# DO NOT MODIFY IT MANUALLY
# CHANGES WILL BE OVERWRITTEN

`;

function generateSchemaIndex(
  schemasDir,
  commonDir = '',
  indexFile = 'index.yaml',
) {
  const COMMON_DIR = path.join(schemasDir, commonDir);
  const INDEX_FILE = path.join(schemasDir, indexFile);
  try {
    // Ensure directories exist
    if (!fs.existsSync(COMMON_DIR)) {
      console.error(`Directory ${COMMON_DIR} does not exist`);
      process.exit(1);
    }

    // Get all YAML files from common directory
    const files = fs
      .readdirSync(COMMON_DIR)
      .filter(
        (file) =>
          !file.startsWith('index.y') &&
          (file.endsWith('.yaml') || file.endsWith('.yml')),
      );

    // Create index object to store all references
    const index = {};

    // Process each YAML file
    files.forEach((file) => {
      const filePath = path.join(COMMON_DIR, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');

      try {
        const schema = yaml.parse(fileContent);

        // Add each top-level property to the index
        Object.keys(schema).forEach((property) => {
          index[property] = {
            $ref: `./${path.join(commonDir, file)}#/${property}`,
          };
        });
      } catch (yamlError) {
        console.error(`Error parsing YAML in ${file}:`, yamlError);
        process.exit(1);
      }
    });

    // Write the index file
    const indexContent = yaml.stringify(index, {
      lineWidth: 0, // Prevent line wrapping
    });

    const finalContent = FILE_HEADER + indexContent;

    fs.writeFileSync(INDEX_FILE, finalContent);
    console.log(`Successfully generated ${INDEX_FILE}`);
  } catch (error) {
    console.error('Error generating schema index:', error);
    process.exit(1);
  }
}

generateSchemaIndex('components/schemas', 'common', 'index.yaml');
generateSchemaIndex('components/parameters');
generateSchemaIndex('components/responses');
process.exit(0);
