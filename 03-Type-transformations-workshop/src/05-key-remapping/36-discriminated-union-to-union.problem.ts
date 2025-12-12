import { Equal, Expect } from '../helpers/type-utils';

type Fruit =
  | {
      name: 'apple';
      color: 'red';
    }
  | {
      name: 'banana';
      color: 'yellow';
    }
  | {
      name: 'orange';
      color: 'orange';
    };

type TransformedFruit = {
  [key in Fruit as key['name']]: `${key['name']}:${key['color']}`;
};

type tests = [Expect<Equal<TransformedFruit, 'apple:red' | 'banana:yellow' | 'orange:orange'>>];
