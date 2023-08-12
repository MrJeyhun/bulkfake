import Sidebar from "@app/components/Sidebar";
import Main from "./Main";
import { createContext, useState } from "react";
import { Regions } from "@app/types/enums";
import { FakedData, AppContextShape } from "@app/types/types";

export const AppContext = createContext<AppContextShape | null>(null);

const App = () => {
  const [errorRange, setErrorRange] = useState(0);
  const [seed, setSeed] = useState(0);
  const [region, setRegion] = useState<Regions | string>(Regions.US);
  const [csvData, setCsvData] = useState<FakedData[]>([]);

  const contextValues: AppContextShape = {
    errorRange,
    setErrorRange,
    seed,
    setSeed,
    region,
    setRegion,
    csvData,
    setCsvData,
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
