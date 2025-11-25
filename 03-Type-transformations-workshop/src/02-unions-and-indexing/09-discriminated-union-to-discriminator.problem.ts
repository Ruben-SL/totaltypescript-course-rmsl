import { Equal, Expect } from "../helpers/type-utils";

export type Eventa =
  | {
      type: "click";
      event: MouseEvent;
    }
  | {
      type: "focus";
      event: FocusEvent;
    }
  | {
      type: "keydown";
      event: KeyboardEvent;
    };

type EventType = Eventa["type"];

type tests = [Expect<Equal<EventType, "click" | "focus" | "keydown">>];
