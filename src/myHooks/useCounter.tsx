import { useState } from "react";

const useCounter = (initialValue: number) => {
  const [value, setValue] = useState(initialValue);

  const incrementClobal = () => {
    setValue((prev) => {
      return prev + 1;
    });
  };

  const decrementClobal = () => {
    setValue(value - 1);
  };

  return {
    bind: { value, incrementClobal, decrementClobal },
  };
};
export { useCounter };
