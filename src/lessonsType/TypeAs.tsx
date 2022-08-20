import React, { FC } from "react";
//  Type Assertion Typescript (утверждение типов: as (как) )
const TypeAs: FC = () => {
  let anyValue: unknown; //("анноу")
  anyValue = 2;
  const test = (anyValue as string).toUpperCase(); // утвердили тип для test как (as) string

  //   ======================
  interface IUserData {
    name: string;
    age: number;
  }
  const user: IUserData = {} as IUserData; // утвердили для пустого объекта тип IUserData

  user.name = "Max"; // и только потом назначили поля
  user.age = 27; // и только потом назначили поля
  //   ======================
  const person = {
    name: "Alex",
    surname: "Moren",
  };
  const keys = Object.keys(person) as Array<keyof typeof person>; // назначили переменной keys ключи, как ключи у объекта person. keys получил тип, как у объекта person
  //   ======================
  const element = document.querySelector("#name") as HTMLInputElement; // определили для element HTMLInputElement
  const { value } = element;
  //   ======================
  type ErrorMessage = string | string[] | Error;
  const apiError: ErrorMessage = JSON.parse(JSON.stringify("[]"));
  const formattedMessages = (apiError as string[]).map((e) => e.toUpperCase()); // утвердили для apiError тип as string[],
  //   ======================
  // const assertion
  const test2 = {
    name: "User",
    age: 20,
  };
  type MyUser = typeof test2; // через typeof получаем тип MyUser, (наведи мышку на MyUser)
  /*
  type MyUser = {
    name: string;
    age: number;
}
  */
  const test102: MyUser = {
    name: "Masha",
    age: 35,
    // можем переназначить значения, но поля изменить нельзя
  };

  const test3 = {
    login: "Masha",
    password: 123456,
  } as const; // добавляем as const, и получаем type User с неизменными полями и их значениями readonly

  type User = typeof test3; // через typeof получаем тип User, (наведи мышку на User)
  /*
   type User = {
    readonly login: "Masha";
    readonly password: 123456;
}
} */
  const test103: User = {
    login: "Masha",
    password: 123456,
    // поля и их значения переназначить нельзя
  };
  //   ======================
  // опять про const.
  // Имеем
  const months = ["January", "February", "Martch"];
  for (let month of months) {
    //  получаем
    //  months: string[]
    //  month: string
    console.log(typeof month);
  }
  // Имеем
  const days = ["Monday", "Tuesday", "Wednesday"] as const; // добавляем as const, и получаем type days с неизменными полями и их значениями readonly
  // расширять тип нельзя, и метод "push" для массива тут работать не будет
  for (let day of days) {
    //  получаем
    //  days: readonly ["Monday", "Tuesday", "Wednesday"]
    //  day: "Monday" | "Tuesday" | "Wednesday"
    console.log(typeof day);
  }
  //   ======================
  // const полностью преобразует объект или массив в неизменяемую структуру данных, только когда значения не вычисляются, а объявлены на месте.
  // Например
  const slills = ["HTML", "JS", "CSS"];

  const test22 = {
    name: "User",
    age: 20,
    slills,
  } as const;
  test22.slills.push("1"); // работает
  type U22 = typeof test22;

  // Другой пример не позоляет так делать
  const test33 = {
    name: "User",
    age: 20,
    slills2: ["HTML", "JS", "CSS"],
  } as const;
  //  test33.slills2.push("1")// не работает
  type U33 = typeof test33;

  //   ======================

  //   ======================

  //   ======================

  //   ======================
  /* */

  console.log(
    test,
    user,
    keys,
    value,
    apiError,
    formattedMessages,
    test102,
    test103
  );
  return <div></div>;
};

export default TypeAs;
