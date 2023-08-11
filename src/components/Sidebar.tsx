import { useContext, useEffect, useState } from "react";
import Counter from "./Counter";
import { CounterType, Regions } from "@app/types/enums";
import { AppContext } from "@app/pages/App";

const Sidebar = () => {
  const { errorRange, setErrorRange, seed, setSeed, region, setRegion } =
    useContext<any>(AppContext);

  // const [errorRange, setErrorRange] = useState(0);
  // const [seed, setSeed] = useState(0);
  // const [region, setRegion] = useState<Regions | string>();

  const handleSliderChange = (event: any) => {
    setErrorRange(+event.target.value);
  };

  return (
    <div className="h-full bg-white w-[20%] p-6 border-l border-gray-300">
      <div id="test" className="flex mb-4 text-2xl font-semibold">
        BULKFAKE
      </div>
      <div className="mb-4 pt-10 h-2/3">
        <div className="flex pl-[3px]">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="region"
          >
            Choose a region
          </label>
        </div>
        <div className="mt-1">
          <select
            id="region"
            name="region"
            className="mt-1 block w-full py-2 px-3 border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={region}
            onChange={(e) => {
              setRegion(e.target.value);
            }}
          >
            <option value="">Select a region</option>
            <option value={Regions.US}>{Regions.US}</option>
            <option value={Regions.GE}>{Regions.GE}</option>
            <option value={Regions.PL}>{Regions.PL}</option>
          </select>
        </div>
        <div className="flex pt-10 justify-between flex-col">
          <label
            className="block text-sm font-medium text-gray-700 self-start"
            htmlFor="errorRange"
          >
            Select number of errors
          </label>
          <Counter
            count={errorRange}
            setCount={setErrorRange}
            counterType={CounterType.ERRORCOUNTER}
          />
        </div>
        <div className="mt-2">
          <input
            type="range"
            step="0.5"
            min="0"
            max="1000"
            value={errorRange}
            onChange={handleSliderChange}
            className="w-full border-[0px] h-[5px] accent-[seagreen]"
          />
        </div>

        <div className="flex pt-10 justify-between flex-col">
          <label
            className="block text-sm font-medium text-gray-700 self-start"
            htmlFor="seedGenerator"
          >
            Current seed
          </label>
          <Counter
            count={seed}
            setCount={setSeed}
            counterType={CounterType.SEEDCOUNTER}
          />
        </div>
        <div className="mt-3">
          <button className="w-full bg-trasparent border border-[#16ad65] text-[#16ad65] py-2 px-4 rounded hover:shadow-lg focus:outline-none focus:ring focus:ring-blue-300 rounded-[5px] transition ease-out delay-120">
            Generate new seed
          </button>
        </div>
      </div>
      <div className="flex items-end h-1/4">
        <button className="w-full bg-[#16ad65] text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring focus:ring-blue-300 rounded-[5px] transition ease-out delay-120">
          Export CVS
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
