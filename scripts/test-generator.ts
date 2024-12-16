import { mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';
import yaml from 'yaml';

interface Parameter {
  name: string;
  in: string;
  required: boolean;
  schema: any;
  description?: string;
}

interface PathItem {
  post: {
    tags: string[];
    summary: string;
    description: string;
    operationId: string;
    requestBody?: any;
    responses: any;
    parameters?: Parameter[];
  };
}

interface OpenAPISpec {
  openapi: string;
  info: any;
  paths: Record<string, PathItem>;
  components: any;
}

class TestGenerator {
  private spec: OpenAPISpec;
  private outputDir: string;

  constructor(specYaml: string, outputDir: string) {
    this.spec = yaml.parse(specYaml, { maxAliasCount: -1 });
    this.outputDir = outputDir;
    mkdirSync(outputDir, { recursive: true });
  }

  private generateMockValue(schema: any): any {
    if (!schema) return undefined;

    switch (schema.type) {
      case 'string':
        if (schema.enum) return schema.enum[0];
        if (schema.format === 'ipv4') return '192.168.1.100';
        if (schema.format === 'binary') return Buffer.from('mock-data');
        return 'mock-string';
      case 'integer':
        if (schema.enum) return schema.enum[0];
        if (schema.minimum !== undefined) return schema.minimum;
        return 0;
      case 'number':
        if (schema.format === 'float') return 1.0;
        return 0;
      case 'boolean':
        return true;
      case 'array':
        return [this.generateMockValue(schema.items)];
      case 'object':
        if (!schema.properties) return {};
        const obj: Record<string, any> = {};
        for (const [key, prop] of Object.entries(schema.properties)) {
          if (schema.required?.includes(key) || Math.random() > 0.5) {
            obj[key] = this.generateMockValue(prop);
          }
        }
        return obj;
      default:
        return undefined;
    }
  }

  private generateRequestBody(operation: any): string {
    if (!operation.requestBody?.content) return '';

    const content = operation.requestBody.content;
    const mediaType = Object.keys(content)[0];
    const schema = content[mediaType].schema;

    if (mediaType === 'multipart/form-data') {
      return `
        const formData = new FormData();
        formData.append('mock-file', new Blob(['mock-data']));
      `;
    }

    const mockData = this.generateMockValue(schema);
    return `const requestBody = ${JSON.stringify(mockData, null, 2)};`;
  }

  private generatePathTest(path: string, pathItem: PathItem): string {
    const operation = pathItem.post;
    const { summary, operationId } = operation;

    const params = operation.parameters || [];
    const queryParams = params.filter((p) => p.in === 'query');
    const queryString = queryParams
      .map((p) => `${p.name}=${this.generateMockValue(p.schema)}`)
      .join('&');

    const requestBody = this.generateRequestBody(operation);

    return `
    describe('${operationId}', () => {
      it('should ${summary.toLowerCase()}', async () => {
        ${requestBody}

        const response = await fetch(\`\${baseUrl}${path}${
      queryString ? '?' + queryString : ''
    }\`, {
          method: 'POST',
          ${requestBody ? 'body: requestBody,' : ''}
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer mock-token'
          }
        });

        expect(response.status).toBe(200);
        const data = await response.json();
        expect(data).toBeDefined();
      });

      it('should handle errors appropriately', async () => {
        const response = await fetch(\`\${baseUrl}${path}\`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        expect(response.status).toBe(401);
      });
    });`;
  }

  private generateSetupCode(): string {
    return `
    import { describe, it, expect, beforeAll, afterAll } from 'vitest';
    import fetch from 'node-fetch';

    const baseUrl = process.env.API_BASE_URL || 'https://mock-camera-ip';

    beforeAll(() => {
      // Setup - e.g., login to get token
    });

    afterAll(() => {
      // Cleanup
    });
    `;
  }

  public generateTests(): void {
    // Group paths by tags
    const testsByTag: Record<string, string[]> = {};

    for (const [path, pathItem] of Object.entries(this.spec.paths)) {
      const tags = pathItem.post.tags;
      const test = this.generatePathTest(path, pathItem);

      for (const tag of tags) {
        if (!testsByTag[tag]) {
          testsByTag[tag] = [];
        }
        testsByTag[tag].push(test);
      }
    }

    // Generate test files for each tag
    for (const [tag, tests] of Object.entries(testsByTag)) {
      const fileName = `${tag.toLowerCase().replace(/\s+/g, '-')}.test.ts`;
      const content = `${this.generateSetupCode()}

      describe('${tag}', () => {
        ${tests.join('\n\n')}
      });
      `;

      writeFileSync(join(this.outputDir, fileName), content);
    }
  }
}

export default TestGenerator;
