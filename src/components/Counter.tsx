import { CounterType } from "@app/types/enums";
import { CounterProps } from "@app/types/types";

const Counter = (props: CounterProps) => {
  const { count, setCount, counterType } = props;

  const handleIncrement = () => {
    switch (counterType) {
      case CounterType.ERRORCOUNTER:
        if (count < 1000) setCount(count + 0.5);
        break;
      case CounterType.SEEDCOUNTER:
        setCount(count + 1);
        break;
    }
  };

  const handleDecrement = () => {
    switch (counterType) {
      case CounterType.ERRORCOUNTER:
        if (count > 0) setCount(count - 0.5);
        break;
      case CounterType.SEEDCOUNTER:
        if (count > 0) setCount(count - 1);
        break;
    }
  };

  return (
    <div className="flex flex-row mt-2 h-9 w-[155px] rounded-lg relative bg-transparent mt-1 border border-[#16ad65] custom-number-input">
      <button
        data-action="decrement"
        onClick={handleDecrement}
        className="bg-white-300 px-3 text-gray-600 h-full w-20 rounded-l cursor-pointer outline-none"
      >
        <span className="m-auto text-2xl font-thin">−</span>
      </button>
      <input
        type="number"
        className="outline-none focus:outline-none border-0 focus:border-0 text-center w-full font-semibold text-xs hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700"
        name="custom-input-number"
        value={count}
        onChange={(e) => {
          setCount(+e.currentTarget.value);
        }}
      ></input>
      <button
        data-action="increment"
        onClick={handleIncrement}
        className="bg-white-300 px-3 text-gray-600 hover:text-gray-700 h-full w-20 rounded-r cursor-pointer"
      >
        <span className="m-auto text-2xl font-thin">+</span>
      </button>
    </div>
  );
};

export default Counter;
