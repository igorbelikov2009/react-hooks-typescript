import React, { useState } from "react";

function computeInitialCounter() {
  console.log("Some calculations....");
  return Math.trunc(Math.random() * 20);
}

const HomeUseState: React.FC = () => {
  const [counter, setCounter] = useState(() => {
    return computeInitialCounter();
  });

  const [state, setState] = useState({
    title: "Счётчик",
    date: Date.now(),
  });

  function increment() {
    setCounter((prev) => {
      return prev + 1;
    });
  }

  function decrement() {
    setCounter(counter - 1);
  }

  function updateTitle() {
    setState((prev) => {
      return {
        ...prev,
        title: "Новая запись",
      };
    });
  }
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
        Изменить
      </button>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};

export default HomeUseState;
