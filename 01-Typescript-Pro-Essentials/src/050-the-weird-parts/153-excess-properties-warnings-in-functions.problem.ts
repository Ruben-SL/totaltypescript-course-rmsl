interface User {
  id: number;
  name: string;
}

const users = [
  {
    name: 'Waqas',
  },
  {
    name: 'Zain',
  },
];

const usersWithIds: User[] = users.map(
  (user, index) =>
    ({
      ...user,
      id: index,
      age: 30,
    } satisfies User),
);
