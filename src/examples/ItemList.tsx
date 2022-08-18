import React, { useEffect, useState } from "react";
import { ItemsListProps } from "../types/types";

const ItemsList = ({ getItems }: ItemsListProps) => {
  const [items, setItems] = useState<number[]>([]);

  useEffect(() => {
    const newItems = getItems(42);
    setItems(newItems);
    console.log("render");
  }, [getItems]);

  return (
    <ul>
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
};

export default ItemsList;
