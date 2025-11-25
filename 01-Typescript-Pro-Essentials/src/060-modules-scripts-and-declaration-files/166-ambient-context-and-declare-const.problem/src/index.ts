import { Equal, Expect } from '@total-typescript/helpers';

declare const DEBUG;

const state = DEBUG.getState();

type test = Expect<Equal<typeof state, { id: string }>>;
