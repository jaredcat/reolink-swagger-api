// vitest.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Enable global test utilities
    globals: true,

    clearMocks: true,
    setupFiles: ['dotenv/config'], //this line,

    // Test environment configuration
    environment: 'node',

    // Timeout for tests (in ms)
    testTimeout: 10000,

    // Retry failed tests
    retry: 1,

    // Reporter configuration
    reporters: ['default', 'html'],

    // Coverage configuration
    coverage: {
      reporter: ['text', 'json', 'html'],
      exclude: ['node_modules/', 'test/'],
    },
  },
});
