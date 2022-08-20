export interface INotFoundPage {
  text: string;
  toLink: string;
  titleLink: string;
}

export interface ICounter {
  counter: number;
}

export interface IStateCounter {
  state: {
    title: string;
    date: number;
  };
}

export interface ICoords {
  x: number;
  y: number;
}

export interface IUsers {
  id: number;
  name: string;
  username: string;
  address: {
    street: string;
    city: string;
  };
}

export interface ITodos {
  id: number;
  title: string;
  completed: boolean;
}

export interface IPosts {
  id: number;
  title: string;
  body: string;
}

export interface IColored {
  color: string;
}

export interface ItemsListProps {
  getItems: any;
}

export interface ICountDate {
  title: string;
  date: number;
}
