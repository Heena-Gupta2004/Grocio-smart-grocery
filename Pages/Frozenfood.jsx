import { useState } from "react";
import Header from '../Components/Header';


const Frozenfood = () => {
  const products = [
    {
      id: 1,
      productName: "Mccain Veggie Burger",
      weight: "100 g",
      price: 130,
      image: "https://m.media-amazon.com/images/I/81q6FAqIfvL.jpg",
    },
    {
      id: 2,
      productName: "Majestic Kesar Pista",
      weight: "100 g",
      price: 133,
      image: "https://m.media-amazon.com/images/I/619gvlt0brL.jpg",
    },
    {
      id: 3,
      productName: "Muccain Veggie Nuggets",
      weight: "200 g",
      price: 340 ,
      image: "https://m.media-amazon.com/images/I/817+VoycEFL.jpg",
    },
    {
      id: 4,
      productName: "Muccain French Fries",
      weight: "150 g",
      price: 129,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU-iPhnFgtTW5BdEl9kfdduyuRr_1kx_dgcA&s",
    },
    {
      id: 5,
      productName: "Frozen Sweet Corn",
      weight: "100 g",
      price: 89,
      image: "https://m.media-amazon.com/images/I/61312xsdW7L._UF894,1000_QL80_.jpg",
    },
    {
      id: 6,
      productName: "Mixed Frozen Vegetable",
      weight: "150 g",
      price: 100,
      image: "https://m.media-amazon.com/images/I/8104jRqaSKL._UF894,1000_QL80_.jpg",
    },
    {
      id: 7,
      productName: "Amul Frozen Pizza",
      weight: "130 g",
      price: 200,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8jtwppUQ_2M2cTO6IQcXbr1Cosa7fK_XoFw&s",
    },
    {
      id: 8,
      productName: "Frozen Momos",
      weight: "120g",
      price: 150,
      image: "https://m.media-amazon.com/images/I/61JgpqCUj6L._UF1000,1000_QL80_.jpg",
    },
    {
      id: 9,
      productName: "Maggie",
      weight: "20 g",
      price: 16,
      image: "https://cdn.grofers.com/da/cms-assets/cms/product/c2e110fb-6204-4620-8f21-ae044d92f66e.jpg?ts=1734069170",
    },
    {
      id: 10,
      productName: "Dal Makhani",
      weight: "200 g",
      price: 150,
      image: "https://5.imimg.com/data5/RE/HZ/LB/SELLER-39285457/dal-makhani-front.jpg",
    },
    {
      id: 11,
      productName: "Phulka Roti",
      weight: "100 g",
      price: 170,
      image: "https://dookan.com/cdn/shop/files/1oEeTF6UMYy-hMlhy4PPdybo2SfsX2XMo.png?v=1729264743",
    },
    {
      id: 12,
      productName: "Mutter Paneer",
      weight: "20 g",
      price: 18,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjmGLjBleLzGxj_i5H-B1Q3X795fDFUD-T_A&s",
    },
    {
      id: 13,
      productName: "Tomato Soup",
      weight: "250 ml",
      price: 126,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd-T85S6Kyoh6K6gHhkmMt-aELXqehe7iOUw&s",
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
        Buy Every type of Frozen Food Online
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

export default Frozenfood;
