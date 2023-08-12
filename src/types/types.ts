import { CounterType, Regions } from "./enums";

export interface CounterProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  counterType: CounterType;
}

export interface TableProps {
  fakeDatas: FakedData[];
  handleScroll: React.UIEventHandler<HTMLDivElement>;
}

export interface FakedData {
  id: string;
  fullName: string;
  address: string;
  phone: string;
}

export interface AppContextShape {
  errorRange: number;
  seed: number;
  region: Regions | string;
  csvData: FakedData[];
  setErrorRange: React.Dispatch<React.SetStateAction<number>>;
  setSeed: React.Dispatch<React.SetStateAction<number>>;
  setRegion: React.Dispatch<React.SetStateAction<string>>;
  setCsvData: React.Dispatch<React.SetStateAction<FakedData[]>>;
}
