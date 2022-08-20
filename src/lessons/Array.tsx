/* ARRAY.TS  списки */
// равноценная запись
const ArrayTsx = () => {
  const arr: string[] = ["a", "b", "c"];
  const arr1: Array<number> = [1, 4];

  // вложенные списки
  const arr2: string[][] = [];
  arr2.push(["a", "b"]);

  // использование псевдонимов
  type MyType = string | number;
  const arr3: MyType[] = [];

  console.log(arr, arr1, arr2, arr3);

  /* array.ts  кортежи (tuple) */
  const tuple1: [string, boolean, number] = ["z", false, 13];

  const tuple2: [string, string, number, number] = ["abc", "ghj", 13, 12];

  // использование псевдонимов
  type SimpleCsv = [string, string, number];
  const tuple3: SimpleCsv[] = [["str", "st", 32]];

  console.log(tuple1, tuple2, tuple3);
};
export default ArrayTsx;
