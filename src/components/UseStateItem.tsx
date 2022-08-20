import React, { FC } from "react";
import { ICounter, IStateCounter } from "../types/types";

export interface UseStateItemProps extends ICounter, IStateCounter {
  increment: () => void;
  decrement: () => void;
  updateTitle: () => void;
}

const UseStateItem: FC<UseStateItemProps> = (props) => {
  const { counter, increment, decrement, updateTitle, state } = props;
  return (
    <div>
      <h1 className="text-primary">Домашняя страница: UseState</h1>

      <h2>Счётчик {counter} </h2>

      <button onClick={increment} className="btn btn-success">
        Добавить
      </button>
      <button onClick={decrement} className="btn btn-danger">
        Убрать
      </button>

      <button onClick={updateTitle} className="btn btn-light">
        Изменить title
      </button>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};

export default UseStateItem;
