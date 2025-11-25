import { Equal, Expect } from "@total-typescript/helpers";

// const appElement = <HTMLElement>document.getElementById("app");
const appElement = document.getElementById("app");

if (!appElement) {
    throw new Error("narrowing, could not find app element");
}

type Test = Expect<Equal<typeof appElement, HTMLElement>>;
