import { useState } from "react";
import Header from '../Components/Header';

const Beverage = () => {
  const products = [
    {
      id: 1,
      productName: "Apple Juice",
      weight: "100 ml",
      price: 80,
      image: "/images/apple juice.jpg",
    },
    {
      id: 2,
      productName: "Guava Juice",
      weight: "100 ml",
      price: 33,
      image: "/images/guava juice.jpg",
    },
    {
      id: 3,
      productName: "Mango Juice",
      weight: "200 g",
      price: 60,
      image: "/images/Mango juice.webp",
    },
    {
      id: 4,
      productName: "Mosambi Juice",
      weight: "150 ml",
      price: 60,
      image: "/images/mosambi juice.jpeg",
    },
    {
      id: 5,
      productName: "Orange Juice",
      weight: "100 g",
      price: 62,
      image: "/images/orange juice.jpeg",
    },
    {
      id: 6,
      productName: "Mixed Fruit Juice",
      weight: "150 g",
      price: 200,
      image: "/images/mixed fruit.jpg",
    },
    {
      id: 7,
      productName: "Cold Brew",
      weight: "120 ml",
      price: 350,
      image: "/images/cold brew.jpg",
    },
    {
      id: 8,
      productName: "Iced Latte",
      weight: "500 ml",
      price: 33,
      image: "/images/iced latte.webp",
    },
    {
      id: 9,
      productName: "Nescafe Intenso",
      weight: "200 g",
      price: 16,
      image: "/images/whole bean.jpg",
    },
    {
      id: 10,
      productName: "Sprite",
      weight: "500 ml",
      price: 27,
      image: "/images/sprite.avif",
    },
    {
      id: 11,
      productName: "Coca Cola",
      weight: "100 g",
      price: 62,
      image: "/images/coca cola.jpeg",
    },
    {
      id: 12,
      productName: "Mountain Dew",
      weight: "400 g",
      price: 55,
      image: "/images/mountain dew.jpeg",
    },
    {
      id: 13,
      productName: "Maaza",
      weight: "500 ml",
      price: 26,
      image: "/images/maaza.jpg",
    },
    {
      id: 14,
      productName: "Litchi",
      weight: "500 ml",
      price: 33,
      image: "/images/litchi.webp",
    },
    {
      id: 15,
      productName: "Mocktail",
      weight: "200 g",
      price: 16,
      image: "/images/frozen bottle.webp",
    },
    {
      id: 16,
      productName: "Lipton Tea",
      weight: "500 ml",
      price: 27,
      image: "/images/lipton tea.jpg",
    },
    {
      id: 17,
      productName: "Lipton Green Tea",
      weight: "100 g",
      price: 62,
      image: "/images/Lipton green tea.webp",
    },
    {
      id: 18,
      productName: "Nestea Iced Lemon Tea",
      weight: "400 g",
      price: 55,
      image: "/images/nestea lemon.jpg",
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
        Buy Beverages Online
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

export default Beverage;
