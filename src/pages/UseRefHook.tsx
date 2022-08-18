import React, { useEffect, useRef, useState } from "react";

const UseRefHook = () => {
  const [value, setValue] = useState<string>("initial");
  const renderCount = useRef<number>(1);
  const inputRef = useRef<HTMLInputElement>(null);
  const prevValue = useRef<string>("");

  useEffect(() => {
    renderCount.current++;
    if (inputRef.current) {
      console.log(inputRef.current.value);
    }
  });

  const focus: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (inputRef.current) inputRef.current.focus();
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  return (
    <div>
      <h1>Количество рендеров: {renderCount.current}</h1>

      <h5>Текущее состояние: </h5>
      <h3>{value}</h3>

      <h5>Предыдущее состояние: </h5>
      <h3>{prevValue.current}</h3>

      <input ref={inputRef} type="text" value={value} onChange={handleChange} />

      <button className="btn btn-success" onClick={focus}>
        Focuc
      </button>
    </div>
  );
};

export default UseRefHook;
// ключевое понимание useRef - он не вызывает рендер
