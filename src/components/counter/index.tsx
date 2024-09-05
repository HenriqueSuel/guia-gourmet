import { useState } from "react";
import { useRestaurant } from "../../context/restaurant.context";

const Counter = () => {
/*   const [count, setCount] = useState(0); */

const { rating, setRating} = useRestaurant();

  const handleIncrement = () => {
    setRating((previous) => previous + 1);
  };

  const handleDecrement = () => {
    setRating((previous) => previous - 1);
  };

  return (
    <div className="flex items-center space-x-4 border border-gray-300 rounded-lg">
      <button
        disabled={rating === 0}
        className="px-4 py-2 bg-gray-200 text-gray-700 font-bold rounded disabled:cursor-not-allowed hover:bg-gray-300"
        onClick={() => handleDecrement()}
      >
        -
      </button>
      <span className="text-2xl font-semibold">{rating}</span>
      <button
        disabled={rating === 5}
        className="px-4 py-2 bg-gray-200 text-gray-700 font-bold rounded disabled:cursor-not-allowed hover:bg-gray-300"
        onClick={() => handleIncrement()}
      >
        +
      </button>
    </div>
  );
};

export { Counter };
