import { Equal, Expect } from '@total-typescript/helpers';

type ApiSettings = {
  apiBaseUrl: string;
  timeout: number;
};

type Configurations = {
  development: ApiSettings;
  production: ApiSettings;
  staging: ApiSettings;
};
const configurations: Configurations = {
  development: {
    apiBaseUrl: 'http://localhost:8080',
    timeout: 5000,
  },
  production: {
    apiBaseUrl: 'https://api.example.com',
    timeout: 10000,
  },
  staging: {
    apiBaseUrl: 'https://staging.example.com',
    timeout: 8000,
    // @ts-expect-error
    notAllowed: true,
  },
};

type Environment = keyof typeof configurations;

type test = Expect<Equal<Environment, 'development' | 'production' | 'staging'>>;
