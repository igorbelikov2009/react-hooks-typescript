type MyObj = {
  a: number;
  b: number;
  c: string;
  d: string;
  print?: () => number;
};

interface MyObject {
  readonly a: number;
  // readonly только для чтения, мы не можем перезаписать
  b: number;
  c?: string;
  //   ? - необязательный параметр

  [key: string]: string | number | undefined; // в дальнейшем мы можем добавлять ещё ключи с указанными типами
}

export const ObjectTsx = () => {
  const obj: MyObj = { a: 3, b: 4, c: "sts", d: "tst" };
  const object: MyObject = { a: 1, b: 2, c: "ccc" };
  const object2: MyObject = { a: 5, b: 22 };
  const obj1: object = { a: 1, c: "ccc" };

  console.log(obj, object, object2, obj1);
};

/* расширение интерфейсов */
interface IPersone {
  name: string;
  age: number;
}
interface IAccount {
  email: string;
  login: string;
  active: boolean;
}
// расширить интерфейс от двух других
interface IDeveloper extends IPersone, IAccount {
  skills: string[];
  level?: string;
}

const DeveloperInterface: IDeveloper = {
  name: "Igor",
  age: 56,
  email: "email",
  login: "igor",
  active: true,
  skills: ["HTML", "CSS", "Javascript"],
};
console.log(DeveloperInterface);

/* Расширениее типов */

type MyPersone = {
  name: string;
  age: number;
};
type MyAccount = {
  email: string;
  login: string;
  active: boolean;
};
type MyDeveloper = {
  skills: string[];
  level?: string;
};
// объеденить типы в один
type FrontendDeveloper = MyPersone & MyAccount & MyDeveloper;

// создать объект с типом FrontendDeveloper
const DeveloperType: FrontendDeveloper = {
  name: "Igor",
  age: 56,
  email: "email",
  login: "igor",
  active: true,
  skills: ["HTML", "CSS", "Javascript"],
  level: "101",
};

// создать массив объектов с типом FrontendDeveloper
const devArr: FrontendDeveloper[] = [];

console.log(DeveloperType, devArr);
