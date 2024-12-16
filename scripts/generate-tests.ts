#!/usr/bin/env node
import { readFileSync } from 'fs';
import TestGenerator from './test-generator';

const main = () => {
  try {
    // Get spec file path from command line args or use default
    const specPath = process.argv[2] || 'openapi.yaml';
    const outputDir = process.argv[3] || 'tests';

    // Read and parse the OpenAPI spec
    const specContent = readFileSync(specPath, 'utf-8');

    // Generate tests
    const generator = new TestGenerator(specContent, outputDir);
    generator.generateTests();

    console.log(`✅ Generated test files in ${outputDir}`);
  } catch (error) {
    console.error('❌ Error generating tests:', error);
    process.exit(1);
  }
};

main();
