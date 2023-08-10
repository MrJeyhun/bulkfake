const Counter = () => {
  return (
    <div className="flex flex-row h-9 w-20 rounded-lg relative bg-transparent mt-1 border border-[#16ad65] custom-number-input">
      <button
        data-action="decrement"
        className=" bg-white-300 text-gray-600 h-full w-20 rounded-l cursor-pointer outline-none"
      >
        <span className="m-auto text-2xl font-thin">−</span>
      </button>
      <input
        type="number"
        className="outline-none focus:outline-none border-0 focus:border-0 text-center w-full font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700"
        name="custom-input-number"
        value="0"
      ></input>
      <button
        data-action="increment"
        className="bg-white-300 text-gray-600 hover:text-gray-700 h-full w-20 rounded-r cursor-pointer"
      >
        <span className="m-auto text-2xl font-thin">+</span>
      </button>
    </div>
  );
};

export default Counter;
