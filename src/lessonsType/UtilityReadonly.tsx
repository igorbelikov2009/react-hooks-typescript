import React from "react";

const UtilityReadonly = () => {
  // readonly
  // Добавляет свойству объекта модификатор readonly, делая их тем самым доступными только для чтения
  type Task = {
    id: number;
    text: string;
    readonly isCompleted: boolean; // опциональное значение
    completedDate?: Date | undefined; // опциональное значение
  };

  const task: Task = {
    id: 0,
    text: "Text",
    isCompleted: false,
    completedDate: new Date(0),
  };

  function completeTask(task: Task) {
    task.text = "txeT";
    // task.isCompleted = true; //мы не можем поменять это свойствоб так как в типе на нём стоит readonly
    task.completedDate = new Date(2);
  }
  completeTask(task);

  // Модификатор типа "readonly" допускается только для типов литерала массива и кортежа, то есть объект не можем заридонлить одним readonly
  type Task2 = readonly [string, number, boolean];
  const task2: Task2 = ["abc", 123, true];
  console.log(task2);
  //   task2.push(123); // readonly не позволяет изменить кортеж или массив
  return <div></div>;
};

export default UtilityReadonly;
