import { Equal, Expect } from '../helpers/type-utils';

interface Example {
  name: string;
  age: number;
  id: string;
  organisationId: string;
  groupId: string;
}

type typeWhichMustContainId = `${string}${'id' | 'Id'}${string}`;

type OnlyIdKeys<T> = {
  // [property in keyof T as property extends typeWhichMustContainId ? property : never]: T[property];
  [property in keyof T as Extract<property, typeWhichMustContainId>]: T[property];
};

type tests = [
  Expect<
    Equal<
      OnlyIdKeys<Example>,
      {
        id: string;
        organisationId: string;
        groupId: string;
      }
    >
  >,
  Expect<Equal<OnlyIdKeys<{}>, {}>>,
];
