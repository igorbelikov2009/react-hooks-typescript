import axios from "axios";
import React, { useState, useEffect, FC } from "react";
import { ICoords, IPosts, ITodos, IUsers } from "../types/types";

const UseEffectHook: FC = () => {
  const [type, setType] = useState<string>("users");
  const [data, setData] = useState<IUsers[] | ITodos[] | IPosts>([]);
  const [pos, setPos] = useState<ICoords>({ x: 0, y: 0 });

  const getData = async () => {
    const response = await axios(
      `https://jsonplaceholder.typicode.com/${type}`
    );

    setData(response.data);
  };

  useEffect(() => {
    getData();

    return () => {
      console.log("clean type");
    };
  }, [type]);

  const mouseMoveHandler = (event: MouseEvent) => {
    setPos({
      x: event.clientX,
      y: event.clientY,
    });
    // console.log(typeof event.clientX);
  };

  useEffect(() => {
    console.log("ComponentsDidMount");
    window.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return (
    <div>
      <h1> Ресурс:{type} </h1>
      <button onClick={() => setType("users")}>Пользователи</button>
      <button onClick={() => setType("todos")}>Todos</button>
      <button onClick={() => setType("posts")}>Посты</button>

      <pre>{JSON.stringify(data, null, 2)} </pre>
      <pre>{JSON.stringify(pos, null, 2)} </pre>
    </div>
  );
};

export default UseEffectHook;
