const Sidebar = () => {
  return (
    <div className="h-full bg-white w-1/4 p-5 border-l border-gray-300">
      <div className="flex mb-4 text-2xl">BulkFake</div>
      <div className="mb-4">
        <label
          htmlFor="dropdown"
          className="block mb-1 font-medium text-gray-600"
        >
          Dropdown
        </label>
        <select
          id="dropdown"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        >
          {/* Add dropdown options here */}
        </select>
      </div>
      <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
        Button
      </button>
    </div>
  );
};

export default Sidebar;
