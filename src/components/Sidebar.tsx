import { useState } from "react";
import Counter from "./Counter";

const Sidebar = () => {
  const [rangeValue, setRangeValue] = useState(50);

  const handleSliderChange = (event: any) => {
    setRangeValue(event.target.value);
  };

  return (
    <div className="h-full bg-white w-1/4 p-6 border-l border-gray-300">
      <div id="test" className="flex mb-4 text-2xl">
        BulkFake
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
            value=""
          >
            <option value="">Select a region</option>
            <option value="north">North</option>
            <option value="south">South</option>
            <option value="east">East</option>
            <option value="west">West</option>
          </select>
        </div>
        <div className="flex pt-10 justify-between">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="errorRange"
          >
            Select number of errors
          </label>
          <Counter />
        </div>
        <div className="mt-2">
          <input
            type="range"
            min="0"
            max="100"
            value={rangeValue}
            onChange={handleSliderChange}
            className="w-full border-[0px] h-[5px] accent-[seagreen]"
          />
        </div>
      </div>
      <div className="flex items-end h-1/4">
        <button className="w-full bg-[#16ad65] text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring focus:ring-blue-300 rounded-[5px]">
          Export CVS
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
