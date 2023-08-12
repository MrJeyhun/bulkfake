import { ChangeEvent, useContext } from "react";
import Counter from "./Counter";
import { CounterType, Regions } from "@app/types/enums";
import { AppContext } from "@app/pages/App";
import { faker } from "@faker-js/faker";
import { CSVLink } from "react-csv";
import { AppContextShape } from "@app/types/types";

const Sidebar = () => {
  const {
    errorRange,
    setErrorRange,
    seed,
    setSeed,
    region,
    setRegion,
    csvData,
  } = useContext(AppContext) as AppContextShape;

  const handleSliderChange = (event: ChangeEvent<HTMLInputElement>) => {
    setErrorRange(+event.target.value);
  };

  const getRandomSeed = () => {
    setSeed(faker.datatype.number({ max: 30000 }));
    if (seed > 30000) setSeed(30000);
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
            <option value={Regions.AZ}>{Regions.AZ}</option>
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
          <button
            onClick={getRandomSeed}
            className="w-full bg-trasparent border border-[#16ad65] text-[#16ad65] py-2 px-4 rounded hover:bg-[#E8F7F0] focus:outline-none focus:ring focus:ring-blue-300 rounded-[5px] transition ease-out delay-120"
          >
            Generate new seed
          </button>
        </div>
      </div>
      <div className="flex items-end h-1/4">
        <CSVLink
          data={csvData}
          filename={"BulkFake.csv"}
          className="w-full bg-[#16ad65] text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring focus:ring-blue-300 rounded-[5px] transition ease-out delay-120"
        >
          Export CVS
        </CSVLink>
      </div>
    </div>
  );
};

export default Sidebar;
