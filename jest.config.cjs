const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.cjs'],
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/pages/(.*)$': '<rootDir>/pages/$1',
  },
  testEnvironment: 'node',
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  collectCoverage: true,
  coverageReporters: ['json', 'html'],
  collectCoverageFrom: [
    'app/**/*.{ts,tsx,js,jsx}',
    'components/**/*.{ts,tsx,js,jsx}',
    '!src/**/*.d.ts',
  ],
  coverageThreshold: {
    global: {
      lines: 100,
      statements: 100,
    },
  },
  globals: {
    fetch: global.fetch,
  },
};

module.exports = createJestConfig(customJestConfig);
