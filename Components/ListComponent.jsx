import React, { useEffect, useState } from "react";

const ButtonCountComponent = ({ productData, cartitems, handleCartItems }) => {
  const [count, setcount] = useState(null);
  useEffect(() => {
    const size = productData ? productData?.length : 0;
    setcount(Array(size).fill(0));
  }, [productData]);
  console.log(`count>>>>`, count);
  const HandleCountDecrement = (index) => {
    console.log("count decrement is listned" + index);
    setcount((prevCount) => {
      const updated = [...prevCount];
      updated[index] = updated[index] > 0 ? updated[index] - 1 : 0;
      const sum = updated.reduce((acc, x) => acc + x, 0);
      handleCartItems(sum);
      return updated;
    });
  };
  const HandleCountIncrement = (index) => {
    console.log("count increment is listened" + index);
    setcount((prevCount) => {
      const updated = [...prevCount];
      updated[index] = updated[index] + 1;
      const sum = updated.reduce((acc, x) => acc + x, 0);
      handleCartItems(sum);
      return updated;
    });
  };
  return (
    <div className="bg-indigo-900">
      <div className="grid grid-cols-4 p-10 ">
        {productData ? (
          productData.map((x, index) => (
            <div className="bg-white size-82 mb-5 relative">
              <div className="flex justify-center items-center">
                <img
                  src={x.image}
                  alt="img"
                  className="object-contain w-full h-62"
                />
              </div>
              <button
                onClick={() => HandleCountDecrement(index)}
                className="absolute bottom-10 left-20 text-2xl font-semibold cursor-pointer"
              >
                -
              </button>
              <div className="bg-transparent border border-blue-500 rounded-2xl size-10 px-14 py-2 absolute bottom-8 left-28">
                {count[index]}
              </div>
              <button
                onClick={() => HandleCountIncrement(index)}
                className="absolute bottom-10 right-20 text-2xl font-semibold cursor-pointer"
              >
                +
              </button>
              {/* <button className="bg-green-500 px-5 py-2 cursor-pointer absolute bottom-5 left-25">
                 Add to Cart
               </button> */}
            </div>
          ))
        ) : (
          <div className="text-white">Loading products</div>
        )}
      </div>
    </div>
  );
};

export default ButtonCountComponent;