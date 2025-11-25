interface UserPart {
  id: string;
  name: string;
  age: number;
};

interface UserPart {
  id: number;
  phone: string;
};

type User = UserPart;

const user: User = {
  id: "1",
  name: "John",
  age: 20,
  phone: "123456789",
};
