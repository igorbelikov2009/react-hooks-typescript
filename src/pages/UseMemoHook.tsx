import React, { FC, useEffect, useMemo, useState } from "react";
import { IColored } from "../types/types";

function complexCompute(num: number): number {
  console.log("complexCompute");
  let i = 0;
  while (i < 1000000000) i++;
  return num * 2;
}

const UseMemoHook: FC = () => {
  const [number, setNumber] = useState<number>(42);

  const computed = useMemo<number>(() => {
    return complexCompute(number);
  }, [number]);

  const [colored, setColored] = useState<boolean>(false);

  const styles = useMemo<IColored>(() => {
    return { color: colored ? "darkred" : "red" };
  }, [colored]);

  useEffect(() => {
    console.log("styles changed");
  }, [styles]);

  const increase: React.MouseEventHandler<HTMLButtonElement> = () =>
    setNumber((prev) => prev + 1);

  const decrease: React.MouseEventHandler<HTMLButtonElement> = () =>
    setNumber((prev) => prev - 1);

  const change: React.MouseEventHandler<HTMLButtonElement> = () =>
    setColored((prev) => !prev);

  return (
    <div className="container">
      <h1 className="text-primary">useMemo</h1>

      <h2 style={styles}>Вычисляемое свойство {computed}</h2>

      <button className={"btn btn-success"} onClick={increase}>
        Добавить
      </button>

      <button className={"btn btn-danger"} onClick={decrease}>
        Уменьшить
      </button>

      <button className={"btn btn-warning"} onClick={change}>
        Изменить цвет заголовка
      </button>
    </div>
  );
};

export default UseMemoHook;
