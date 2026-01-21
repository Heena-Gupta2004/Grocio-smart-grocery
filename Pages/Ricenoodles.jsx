import { useState } from "react";
import Header from '../Components/Header';

const Ricenoodles = () => {
  const products = [
    {
      id: 1,
      productName: "Vermicelli",
      weight: "100 g",
      price: 150,
      image: "https://www.ceepeespices.in/wp-content/uploads/2021/02/plain-vermicelli-200gm-front.jpg",
    },
    {
      id: 2,
      productName: "Pho Noodles",
      weight: "100 g",
      price: 133,
      image: "https://m.media-amazon.com/images/I/71zkfkIYhaL.jpg",
    },
    {
      id: 3,
      productName: "Flat Rice Noodles",
      weight: "100 g",
      price: 560,
      image: "https://www.bbassets.com/media/uploads/p/l/40030221_5-leong-noodles-plain-chinese-flat.jpg",
    },
    {
      id: 4,
      productName: "Rice Sticks",
      weight: "150 ml",
      price: 260,
      image: "https://m.media-amazon.com/images/I/71zkfkIYhaL.jpg",
    },
    {
      id: 5,
      productName: "Rice Vermicelli",
      weight: "100 g",
      price: 340,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtv9ns2K-8sq8Hlj6QXiQPDb-ADhz0mNI3Dg&s",
    },
    {
      id: 6,
      productName: "Brown Rice Noodles",
      weight: "150 g",
      price: 1000,
      image: "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/tkt/tkt01074/l/8.jpg",
    },
    {
      id: 7,
      productName: "Glass Noodles",
      weight: "30 g",
      price: 50,
      image: "https://m.media-amazon.com/images/I/71GbMRNTG7L.jpg",
    },
    {
      id: 8,
      productName: "Instant ramen",
      weight: "20g",
      price: 20,
      image: "https://imgmedia.lbb.in/media/2022/08/62e7ca4162578311a0676cef_1659357761147.jpg",
    },
    {
      id: 9,
      productName: "Rice Noodle Roll",
      weight: "20 g",
      price: 16,
      image: "https://img08.weeecdn.net/product/image/170/319/74119885926DCD37.png!c750x0_q80_t1.auto",
    },
    
      
      
    
    

  ];

  const [cart, setCart] = useState({});

  const increment = (id) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const decrement = (id) => {
    setCart((prev) => {
      if (!prev[id]) return prev;
      const updated = { ...prev, [id]: prev[id] - 1 };
      if (updated[id] <= 0) delete updated[id];
      return updated;
    });
  };

  return (
    
    <div className="p-6 bg-gray-100 min-h-screen">
      
      <h2 className="text-2xl font-bold mb-6 text-center">
        Buy Rice Noodles Online
      </h2>

     
      <div className="h-[80vh] overflow-y-scroll pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-md p-4 flex flex-col justify-between"
            >
              <img
                src={product.image}
                alt={product.productName}
                className="h-36 w-full object-contain mb-4"
              />
              <div className="flex flex-col justify-between flex-1">
                <p className="text-gray-700 font-semibold text-sm mb-1">
                  {product.productName}
                </p>
                <p className="text-gray-500 text-sm mb-2">{product.weight}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-black font-bold">₹{product.price}</span>

                  
                  {cart[product.id] ? (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => decrement(product.id)}
                        className="bg-green-500 text-white px-2 py-1 rounded "
                      >
                        -
                      </button>
                      <span className="text-sm font-medium">
                        {cart[product.id]}
                      </span>
                      <button
                        onClick={() => increment(product.id)}
                        className="bg-green-500 text-white px-2 py-1 rounded "
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => increment(product.id)}
                      className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-400 text-sm"
                    >
                      ADD
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ricenoodles;
