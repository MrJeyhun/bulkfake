import Sidebar from "@app/components/Sidebar";
import Main from "./Main";
import { createContext, useRef, useState } from "react";
import { Regions } from "@app/types/enums";

export const AppContext = createContext("");

const App = () => {
  const [errorRange, setErrorRange] = useState(0);
  const [seed, setSeed] = useState(0);
  const [region, setRegion] = useState<Regions | string>(Regions.US);
  const csvData = useRef();

  const contextValues: any = {
    errorRange,
    setErrorRange,
    seed,
    setSeed,
    region,
    setRegion,
    csvData,
  };

  return (
    <AppContext.Provider value={contextValues}>
      <div className="flex h-full">
        <Sidebar />
        <div className="flex-1 w-[80%] p-8">
          <Main />
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default App;
