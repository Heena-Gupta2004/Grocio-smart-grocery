import { useState } from "react";
import Header from '../Components/Header';

const Chocolate = () => {
  const products = [
    {
      id: 1,
      productName: "Amul Dark Chocolate",
      weight: "100 g",
      price: 150,
      image: "/images/amul dark chocolate.jpg",
    },
    {
      id: 2,
      productName: "Cadbuary Dark Chocolate",
      weight: "100 g",
      price: 133,
      image: "/images/cadbuary dark chocolate.jpg",
    },
    {
      id: 3,
      productName: "Ambriona Dark Chocolate",
      weight: "100 g",
      price: 560,
      image: "/images/Ambriona dark chocolate.webp",
    },
    {
      id: 4,
      productName: "Daarzel Dark Chocolate",
      weight: "150 ml",
      price: 260,
      image: "/images/daarzel dark chocolate.webp",
    },
    {
      id: 5,
      productName: "Barista Dark Chocolate",
      weight: "100 g",
      price: 340,
      image: "/images/barista.webp",
    },
    {
      id: 6,
      productName: "Ferrero Rocher",
      weight: "150 g",
      price: 1000,
      image: "/images/ferrero rocher.jpg",
    },
    {
      id: 7,
      productName: "kit kat",
      weight: "30 g",
      price: 50,
      image: "/images/kit kat.webp",
    },
    {
      id: 8,
      productName: "5 Star",
      weight: "20g",
      price: 20,
      image: "/images/5 star.jpg",
    },
    {
      id: 9,
      productName: "Munch",
      weight: "20 g",
      price: 16,
      image: "/images/munch.jpg",
    },
    {
      id: 10,
      productName: "Fuse Mini Treats",
      weight: "200 g",
      price: 150,
      image: "/images/fuse mini treats.webp",
    },
    {
      id: 11,
      productName: "Galaxy Minis",
      weight: "100 g",
      price: 170,
      image: "/images/galaxy minis.jpg",
    },
    {
      id: 12,
      productName: "Perk Bites",
      weight: "20 g",
      price: 18,
      image: "/images/perk bites.webp",
    },
    {
      id: 13,
      productName: "Amul Chocominis",
      weight: "250 ml",
      price: 126,
      image: "/images/amul chocominis.png",
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
        Buy Every type of Chocolates Online
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

export default Chocolate;
