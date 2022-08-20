import { useState } from "react";

const useCounter = (initialValue: number) => {
  const [value, setValue] = useState<number>(initialValue);

  const incrementClobal: () => void = () => {
    setValue((prev: number) => {
      return prev + 1;
    });
  };

  const decrementClobal: () => void = () => {
    setValue(value - 1);
  };

  return {
    bind: { value, incrementClobal, decrementClobal },
  };
};
export { useCounter };
