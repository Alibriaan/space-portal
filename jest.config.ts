import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: './src/test/jest',
  coverageDirectory: './src/test/jest',
  testPathIgnorePatterns: [
    './node_modules',
  ],
  coveragePathIgnorePatterns: [
    './node_modules',
  ]
};

export default config;
