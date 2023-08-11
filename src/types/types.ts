import { CounterType } from "./enums";

export interface CounterProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  counterType: CounterType;
}

export interface TableProps {
  fakeDatas: [];
  handleScroll: any;
}
