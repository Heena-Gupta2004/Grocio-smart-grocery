import { useState } from "react";
import Header from '../Components/Header';


const Dryfruits = () => {
  const products = [
    {
      id: 1,
      productName: "Almonds",
      weight: "150 g",
      price: 250,
      image: "https://m.media-amazon.com/images/I/61-HeXX496L._UF1000,1000_QL80_.jpg",
    },
    {
      id: 2,
      productName: "Walnuts",
      weight: "100 g",
      price: 133,
      image: "https://m.media-amazon.com/images/I/81kf8+slKlL.jpg",
    },
    {
      id: 3,
      productName: "Cashews",
      weight: "100 g",
      price: 24,
      image: "https://m.media-amazon.com/images/I/61jc7ybMbNL.jpg",
    },
    {
      id: 4,
      productName: "Pistachios",
      weight: "150 g",
      price: 243,
      image: "https://www.saofoods.com/cdn/shop/products/WhatsAppImage2022-04-19at12.31.32PM.jpg?v=1737703467",
    },
    {
      id: 5,
      productName: "Raisins",
      weight: "120 g",
      price: 340,
      image: "https://rukminim2.flixcart.com/image/704/844/xif0q/nut-dry-fruit/a/4/p/250-dried-golden-small-raisins-250-grams-dried-kishmish-pack-of-original-imagm7uteyvhyznm.jpeg?q=90&crop=false",
    },
    {
      id: 6,
      productName: "Dates",
      weight: "150 g",
      price: 234,
      image: "https://haribansha.com/wp-content/uploads/2025/06/DATE-CROWN-FARD-KHEJUR-500gm.webp",
    },
    {
      id: 7,
      productName: "Apricots",
      weight: "80 g",
      price: 120,
      image: "https://m.media-amazon.com/images/I/71pU-c+M6JL.jpg",
    },
    {
      id: 8,
      productName: "Figs",
      weight: "120g",
      price: 89,
      image: "https://m.media-amazon.com/images/I/61qnU39DhvL._UF1000,1000_QL80_.jpg",
    },
    {
      id: 9,
      productName: "Prunes",
      weight: "110 g",
      price: 99,
      image: "https://m.media-amazon.com/images/I/91tgWLhifgL._UF1000,1000_QL80_.jpg",
    },
    {
      id: 10,
      productName: "Sesame",
      weight: "130 g",
      price: 150,
      image: "https://5.imimg.com/data5/SELLER/Default/2023/2/MG/ZK/HK/84494398/white-sesame-seed-500x500.jpeg",
    },
    {
      id: 11,
      productName: "Fox Nut",
      weight: "100 g",
      price: 170,
      image: "https://pushtinuts.com/cdn/shop/products/ScrollGroup7_1200x1200.png?v=1605862933",
    },
    {
      id: 12,
      productName: "Chestnut",
      weight: "100 g",
      price: 45,
      image: "https://img.lovepik.com/desgin_photo/40157/9017_detail.jpg!list336",
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
        Buy Dry Fruits Online
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

export default Dryfruits;
