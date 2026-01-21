import { useState } from "react";
import Header from '../Components/Header';


const Snacks = () => {
  const products = [
    {
      id: 1,
      productName: "Kurkure",
      weight: "150 g",
      price: 250,
      image: "https://m.media-amazon.com/images/I/71uGU7evScL.jpg",
    },
    {
      id: 2,
      productName: "American Style Cream & Onion & Flavoured Potato Chips",
      weight: "100 g",
      price: 133,
      image: "https://m.media-amazon.com/images/I/711vAJ8fWlL._UF1000,1000_QL80_.jpg",
    },
    {
      id: 3,
      productName: "Magic Masala Potato Chips",
      weight: "100 g",
      price: 24,
      image: "https://www.jiomart.com/images/product/original/490000331/lay-s-india-s-magic-masala-potato-chips-40-g-product-images-o490000331-p490000331-0-202410251815.jpg?im=Resize=(420,420)",
    },
    {
      id: 4,
      productName: "Cookie Man",
      weight: "150 g",
      price: 243,
      image: "https://rukminim2.flixcart.com/image/704/844/xif0q/cookie-biscuit/7/k/j/200-choco-chip-cookies-red-canister-cookies-with-chocolate-chips-original-imagn6zxvjz5ag25.jpeg?q=90&crop=false",
    },
    {
      id: 5,
      productName: "Choco Chip Cookies",
      weight: "120 g",
      price: 340,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQG6wpgtHVJXN6XA310L3CYpM6ne4UIVDq0g&s",
    },
    {
      id: 6,
      productName: "Bourbon",
      weight: "150 g",
      price: 234,
      image: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/NI_CATALOG/IMAGES/CIW/2024/10/30/80ceb38f-0c1b-4619-8064-8c596e249974_6666_1.png",
    },
    {
      id: 7,
      productName: "Monaco",
      weight: "80 g",
      price: 120,
      image: "https://cdn.zeptonow.com/production/tr:w-640,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/6d2d815e-1902-4fdb-a742-1edd8da89f3d.jpeg",
    },
    {
      id: 8,
      productName: "Marie Gold",
      weight: "120g",
      price: 89,
      image: "https://bazaar5.com/image/cache/catalog/pro/product/10015/britannia-marie-gold-biscuits-250-g-product-images-o490353645-p490353645-0-202203170207-600x315w.jpg",
    },
    {
      id: 9,
      productName: "Good Day",
      weight: "110 g",
      price: 99,
      image: "https://rukminim2.flixcart.com/image/704/844/xif0q/cookie-biscuit/k/q/o/-original-imah7kyf8prycxws.jpeg?q=90&crop=false",
    },
    {
      id: 10,
      productName: "Hide & Seek",
      weight: "130 g",
      price: 150,
      image: "https://fetchnbuy.in/cdn/shop/files/100566753-2_12-parle-hide-seek-strawberry-creme_grande.jpg?v=1688121610",
    },
    {
      id: 11,
      productName: "Haldiram's Bhujia",
      weight: "100 g",
      price: 170,
      image: "https://www.pankaj-boutique.com/31504-large_default/namkeens-indian-bhujia.jpg",
    },
    {
      id: 12,
      productName: "Nimbu Masala",
      weight: "100 g",
      price: 45,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUsps5JtSToY5Pakl3HawxVenTqsFgVALFdw&s",
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
        Buy Snacks Online
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

export default Snacks;
