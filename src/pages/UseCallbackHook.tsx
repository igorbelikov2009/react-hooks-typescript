import React, { FC, useCallback, useState } from "react";
import ItemsList from "../examples/ItemList";
import { IColored } from "../types/types";

const UseCallbackHook: FC = () => {
  const [colored, setColored] = useState<boolean>(false);
  const [count, setCount] = useState<number>(1);

  const styles: IColored = {
    color: colored ? "red" : "blue",
  };

  const generateItemsFromAPI = useCallback(
    (indexNumber: number) => {
      return new Array(count)
        .fill("")
        .map((_, i) => `Элемент ${i + indexNumber}`);
    },
    [count]
  );

  const increase: React.MouseEventHandler<HTMLButtonElement> = () =>
    setCount((prev) => prev + 1);

  const change: React.MouseEventHandler<HTMLButtonElement> = () =>
    setColored((prev) => !prev);

  return (
    <div className="container">
      <h1 className="text-primary">UseCallback</h1>
      <h2 style={styles}>Количество элементов {count} </h2>

      <button className="btn btn-success" onClick={increase}>
        Добавить
      </button>

      <button className="btn btn-warning" onClick={change}>
        Изменить цвет заголовка
      </button>

      <ItemsList getItems={generateItemsFromAPI} />
    </div>
  );
};

export default UseCallbackHook;
// UseCallback нужен для того, чтобы функция не изменялась при новом рендере.
// Функция как бы кэшировалась, что бы у нас не было рекурсивных вызовов и,
// дополнительных сторонних проблем
//
