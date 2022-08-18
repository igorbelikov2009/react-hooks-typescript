import React, { FC, useState } from "react";
import UseStateItem from "../components/UseStateItem";

function computeInitialCounter() {
  //   console.log("Some calculations....");
  return Math.trunc(Math.random() * 20);
}

const UseState: FC = () => {
  const [counter, setCounter] = useState(() => {
    return computeInitialCounter();
  });
  //   const [counter, setCounter] = useState(1);

  const [state, setState] = useState({
    title: "Счётчик",
    date: Date.now(),
  });

  const increment = () => {
    setCounter((prev) => {
      return prev + 1;
    });
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const updateTitle = () => {
    setState((prev) => {
      return {
        ...prev,
        title: "Новая запись",
      };
    });
  };
  return (
    <div>
      <UseStateItem
        counter={counter}
        increment={increment}
        decrement={decrement}
        updateTitle={updateTitle}
        state={state}
      />
      {/* <div>
        <h1 className="text-primary">Домашняя страница: UseState</h1>

        <h2>Счётчик {counter} </h2>

        <button onClick={increment} className="btn btn-success">
          Добавить
        </button>
        <button onClick={decrement} className="btn btn-danger">
          Убрать
        </button>

        <button onClick={updateTitle} className="btn btn-light">
          Изменить
        </button>

        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div> */}
    </div>
  );
};

export default UseState;
