import { mkdirSync, writeFileSync } from 'fs';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import TestGenerator from '../scripts/test-generator';

vi.mock('fs');
vi.mock('yaml', () => ({
  default: {
    parse: vi.fn().mockReturnValue({
      openapi: '3.1.0',
      paths: {
        '/api.cgi?cmd=Login': {
          post: {
            tags: ['Security'],
            summary: 'Login to device',
            operationId: 'Login',
            requestBody: {
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      userName: { type: 'string' },
                      password: { type: 'string' },
                    },
                  },
                },
              },
            },
            responses: {
              '200': {
                description: 'Successful login',
              },
            },
          },
        },
      },
    }),
  },
}));

describe('TestGenerator', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should generate test files', () => {
    const mockSpecContent = 'mock OpenAPI spec';
    const mockOutputDir = 'test-output';

    const generator = new TestGenerator(mockSpecContent, mockOutputDir);
    generator.generateTests();

    // Verify directory was created
    expect(mkdirSync).toHaveBeenCalledWith(mockOutputDir, { recursive: true });

    // Verify test file was written
    expect(writeFileSync).toHaveBeenCalled();
    const writeCall = vi.mocked(writeFileSync).mock.calls[0];
    expect(writeCall[0]).toContain('security.test.ts');
    expect(writeCall[1]).toContain("describe('Security'");
    expect(writeCall[1]).toContain("describe('Login'");
  });

  it('should handle errors', () => {
    vi.mocked(mkdirSync).mockImplementationOnce(() => {
      throw new Error('Mock error');
    });

    expect(() => {
      const generator = new TestGenerator('mock spec', 'test-output');
      generator.generateTests();
    }).toThrow();
  });
});
