import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: './src/__test__/unit',
  coverageDirectory: './src/__test__/unit',
  coveragePathIgnorePatterns: [
    './node_modules',
    './src/__test__/e2e',
    './src/__test__/unit-components',
  ]
};

export default config;
