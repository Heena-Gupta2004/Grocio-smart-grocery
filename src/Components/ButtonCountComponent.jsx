import React, { useEffect, useState } from "react";

const ButtonCountComponent = ({ productData, handleCartItems }) => {
  const [count, setCount] = useState([]);

  useEffect(() => {
    if (productData?.length) {
      setCount(Array(productData.length).fill(0));
    }
  }, [productData]);

  const handleCountDecrement = (index) => {
    setCount((prev) => {
      const updated = [...prev];
      updated[index] = updated[index] > 0 ? updated[index] - 1 : 0;

      const sum = updated.reduce((acc, val) => acc + val, 0);
      handleCartItems(sum);

      return updated;
    });
  };

  const handleCountIncrement = (index) => {
    setCount((prev) => {
      const updated = [...prev];
      updated[index] += 1;

      const sum = updated.reduce((acc, val) => acc + val, 0);
      handleCartItems(sum);

      return updated;
    });
  };

  return (
    <div>
      <div className="grid grid-cols-4 p-10">
        {productData?.length ? (
          productData.map((x, index) => (
            <div key={index} className="bg-white size-82 mb-5 relative">
              <div className="flex justify-center items-center">
                <img
                  src={x.image}
                  alt="product"
                  className="object-contain w-full h-62"
                />
              </div>

              <button
                onClick={() => handleCountDecrement(index)}
                className="absolute bottom-10 left-20 text-2xl font-semibold cursor-pointer"
              >
                -
              </button>

              <div className="border border-blue-500 rounded-2xl px-6 py-2 absolute bottom-8 left-28">
                {count[index] ?? 0}
              </div>

              <button
                onClick={() => handleCountIncrement(index)}
                className="absolute bottom-10 right-20 text-2xl font-semibold cursor-pointer"
              >
                +
              </button>
            </div>
          ))
        ) : (
          <div className="text-white">Loading products...</div>
        )}
      </div>
    </div>
  );
};

export default ButtonCountComponent;
