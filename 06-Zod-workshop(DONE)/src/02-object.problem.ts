
import { expect, it } from "vitest";
import { z } from "zod";

const parameterOne = z.object({
  initials: z.string().regex(/^[A-Z.À-Ö]+$/).min(2).max(10),
  lastname: z.string().max(100),
  email: z.string().email(),
  telephone: z.string().refine(phoneNumber => {
    const regex = (phoneNumber.startsWith("0031") || phoneNumber.startsWith("+31") ||
      phoneNumber.startsWith("+031") || phoneNumber.startsWith("+0031")) ? /^\+?(0031|031|31)\d{9}$/ : /^\+?\d{8,19}$/;
    return (!regex.test(phoneNumber)) ? false : true;
  }),
  birthdate: z.string().date()
});

const parameterTwo = z.object({
  inputTwo: z.number()
    .min(0, { message: "number too low" })
    .max(5, { message: "number too high" }),
});

const parameters = parameterOne.merge(parameterTwo);

export const AddNumbers = (data: {}) => {
  const parsedData = parameters.parse(data);
  return parsedData.inputOne + parsedData.inputTwo;
};

// TESTS
it("Should throw Error", async () => expect(() => { AddNumbers({ inputOne: -1, inputTwo: 0 }) }).toThrow())
it("Should return 0", async () => expect(AddNumbers({ inputOne: -1, inputTwo: 0 })).toEqual(0));
it("Should return 0", async () => expect(AddNumbers({ inputOne: 0, inputTwo: 0 })).toEqual(0));
it("Should return 2", async () => expect(AddNumbers({ inputOne: 1, inputTwo: 1 })).toEqual(2));
it("Should return 4", async () => expect(AddNumbers({ inputOne: 2, inputTwo: 2 })).toEqual(4));
it("Should return 6", async () => expect(AddNumbers({ inputOne: 3, inputTwo: 3 })).toEqual(6));
it("Should return 8", async () => expect(AddNumbers({ inputOne: 4, inputTwo: 4 })).toEqual(8));
it("Should return 10", async () => expect(AddNumbers({ inputOne: 5, inputTwo: 5 })).toEqual(10));
it("Should throw Error", async () => expect(() => { AddNumbers({ inputOne: 6, inputTwo: 6 }) }).toThrow())
