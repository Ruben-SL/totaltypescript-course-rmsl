import { Extends, Expect } from "@total-typescript/helpers";

type base = {
  id: string;
  createdAt: Date;
}

type User = base & {
  name: string;
  email: string;
};

type Product = base & {
  name: string;
  price: number;
};

type tests = [
  Expect<
    Extends<
      {
        id: string;
        createdAt: Date;
        name: string;
        email: string;
      },
      User
    >
  >,
  Expect<
    Extends<
      {
        id: string;
        createdAt: Date;
        name: string;
        price: number;
      },
      Product
    >
  >,
];
