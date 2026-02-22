import React, { useState } from "react";

const ButtonComponent = () => {
  const [count, setCount] = useState(100);

  const handleDecrement = () => {
    setCount((prev) => Math.max(prev - 1, 0));
  };

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="bg-slate-900 h-screen">
      <div className="grid grid-cols-4 gap-6 p-10">
        {[1, 2, 3, 4].map((_, index) => (
          <div key={index} className="bg-white size-82 relative">
            {/* Decrement */}
            <button
              onClick={handleDecrement}
              className="absolute bottom-10 left-20 text-2xl font-semibold cursor-pointer"
            >
              -
            </button>

            {/* Count */}
            <div className="border border-blue-500 rounded-2xl px-6 py-2 absolute bottom-8 left-28">
              {count}
            </div>

            {/* Increment */}
            <button
              onClick={handleIncrement}
              className="absolute bottom-10 right-20 text-2xl font-semibold cursor-pointer"
            >
              +
            </button>

            {/* Add to Cart */}
            <button className="bg-green-200 px-5 py-2 cursor-pointer absolute top-5 left-5 rounded">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ButtonComponent;
