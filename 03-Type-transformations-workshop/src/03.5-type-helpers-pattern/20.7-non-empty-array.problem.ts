type NonEmptyArray<T> = [T, ...T[]];

export const makeEnum = (values: NonEmptyArray<string>) => {};

makeEnum(['a']);
makeEnum(['a', 'b', 'c']);

makeEnum([]);
