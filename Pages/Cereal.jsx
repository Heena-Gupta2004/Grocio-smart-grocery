import { useState } from "react";
import Header from '../Components/Header';


const Cereal = () => {
  const products = [
    {
      id: 1,
      productName: "Brioche",
      weight: "150 g",
      price: 250,
      image: "https://images.rawpixel.com/image_400/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlMTJfZGlnaXRhbF9wYWludF9wYXN0ZWxfY29sb3JlZF9wZW5jaWxfdGV4dHVyZV9pbF9hZGFlNzYwYy1kNWQwLTRlNWQtODNlYS0yZTBkMmE5ZTNmNWJfMS5qcGc.jpg",
    },
    {
      id: 2,
      productName: "Baguette",
      weight: "100 g",
      price: 133,
      image: "https://img.freepik.com/premium-photo/french-baguette-white-background_147493-1388.jpg",
    },
    {
      id: 3,
      productName: "White bread",
      weight: "100 g",
      price: 24,
      image: "https://img.freepik.com/premium-photo/slices-bread-white-background_1339-81363.jpg",
    },
    {
      id: 4,
      productName: "Ciabatta",
      weight: "150 g",
      price: 243,
      image: "https://www.shutterstock.com/image-photo/wheat-ciabatta-isolated-on-white-600nw-2087925202.jpg",
    },
    {
      id: 5,
      productName: "Focaccia",
      weight: "120 g",
      price: 340,
      image: "https://static.vecteezy.com/system/resources/previews/041/044/333/non_2x/of-a-italian-focaccia-isolated-on-white-background-photo.jpg",
    },
    {
      id: 6,
      productName: "Challah",
      weight: "150 g",
      price: 234,
      image: "https://www.shutterstock.com/image-photo/homemade-braided-bread-sesame-seeds-600nw-2147765961.jpg",
    },
    {
      id: 7,
      productName: "Bagel",
      weight: "80 g",
      price: 120,
      image: "https://as2.ftcdn.net/jpg/01/86/59/55/1000_F_186595526_31hXwsHUx71r7HIsy5uFCevimv27P3vJ.jpg",
    },
    {
      id: 8,
      productName: "Banana bread",
      weight: "120g",
      price: 89,
      image: "https://www.shutterstock.com/image-photo/banana-soft-cake-on-white-600nw-1057029371.jpg",
    },
    {
      id: 9,
      productName: "Hot cross bun",
      weight: "110 g",
      price: 99,
      image: "https://media.istockphoto.com/id/174810276/photo/hot-cross-bun.jpg?s=612x612&w=0&k=20&c=CfKKx4-pB5sj7KxiLhAiDT0vKnuotzrsQ90BSdFpTxU=",
    },
    {
      id: 10,
      productName: "Sourdough",
      weight: "130 g",
      price: 150,
      image: "https://www.shutterstock.com/image-photo/sliced-sourdough-bread-isolated-on-600nw-2239107165.jpg",
    },
    {
      id: 11,
      productName: "Apple bread",
      weight: "100 g",
      price: 170,
      image: "https://beyondfrosting.com/wp-content/uploads/2020/09/Cinnamon-Apple-Bread-062-1.jpg",
    },
    {
      id: 12,
      productName: "Multigrain bread",
      weight: "100 g",
      price: 45,
      image: "https://media.istockphoto.com/id/528318087/photo/sliced-multi-grain-bread.jpg?s=612x612&w=0&k=20&c=5dcgA3oeKPoZJ02ppX7EanqugWL09dMnQDkkdhZWlF0=",
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
        Buy Every type of Cereals Online
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

export default Cereal;
