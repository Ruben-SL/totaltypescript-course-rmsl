import { expect, it } from "vitest";

function validateUsername(username: string | null): boolean {
  // Why isn't this working?
  const isUsernameOK = Boolean(username);
  const isUsernameOKdoublebang = !!username;

  if (isUsernameOKdoublebang) {
    return username.length > 5;
  }

  if (isUsernameOK) {
    return username.length > 5;
  }

  return false;
}

it("should return true for valid usernames", () => {
  expect(validateUsername("Matt1234")).toBe(true);

  expect(validateUsername("Alice")).toBe(false);
  expect(validateUsername("Bob")).toBe(false);
});

it("Should return false for null", () => {
  expect(validateUsername(null)).toBe(false);
});
