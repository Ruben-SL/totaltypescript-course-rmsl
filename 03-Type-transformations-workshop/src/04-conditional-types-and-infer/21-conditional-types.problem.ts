import { Equal, Expect } from '../helpers/type-utils';

type YouSayGoodbyeAndISayHello<T> = T extends 'hello' ? 'goodbye' : 'hello';

const x: YouSayGoodbyeAndISayHello<'hello'>;

type tests = [Expect<Equal<YouSayGoodbyeAndISayHello<'hello'>, 'goodbye'>>, Expect<Equal<YouSayGoodbyeAndISayHello<'goodbye'>, 'hello'>>];
