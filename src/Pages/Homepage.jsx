import React from 'react'
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Productlist from './Productlist';
import Signinpage from './Signinpage';


const Homepage = () => {
    const navigate = useNavigate();
    const categoryRoutes = {
    "Drinks": "/Beverage",
    "Chocolates": "/Chocolate",
    "Fruitsveges": "/Fruitsveges",
    "Condiments": "/Condiments",
    "Breads": "/Breads",
    "Frozenfood": "/Frozenfood",
    "Ricenoodles": "/Ricenoodles",
    "Cereal": "/Cereal",
    "Snacks": "/Snacks",
    "Cleaninghousehold": "/Cleaninghousehold",
    "Dairyproducts": "/Dairyproducts",
    "Dryfruits": "/Dryfruits"
    
    
 
  };

  const handleCategoryClick = (category) => {
    const route = categoryRoutes[category];
    if (route) navigate(route);
  };

  const products = [
    { id: 1, name: "Apple", price: 20 },
    { id: 2, name: "Banana", price: 10 },
    // add more products...
  ];

    return (

        <div className="bg-white text-gray-800">
            
            {/* Banner */}
            <section className="justify-between px-6 py-6 space-y-6">
        <div className="flex gap-7">
          {/* Smoothie/Juice */}
          <div className="bg-[url('/images/4ff7ad78-8d31-4b85-b731-39fb27bfbf0e.jpeg')] p-6 rounded w-1/2 flex items-center rounded-xl min-h-[350px] bg-cover bg-center">
            <div>
              <p className="text-yellow-600 font-semibold text-lg drop-shadow-lg">100% Natural</p>
              <h1 className="text-4xl font-bold leading-tight mt-2 text-white">Fresh Smoothie & Summer Juice</h1>
              <p className="mt-4 text-white">Get fresh and healthy juice and smoothies within minutes at your doors </p>
              <button
                className="mt-6 px-4 py-2 border rounded hover:bg-white text-yellow-500"
                onClick={() => navigate("/beverage")}
              >
                SHOP NOW
              </button>
            </div>
          </div>

          {/* Fruits & Vegetables */}
          <div className="bg-[url('/images/fruits.jpg')] p-6 rounded flex w-1/2 items-center rounded-xl min-h-[350px] bg-no-repeat bg-cover bg-center">
            <div>
              <p className="text-lg text-black font-semibold drop-shadow-lg">20% Off</p>
              <h2 className="text-4xl font-bold leading-tight mt-2 text-white drop-shadow-lg">Fruits & Vegetables</h2>
              <button
                className="mt-6 px-4 py-2 border rounded hover:bg-orange-700 text-white"
                onClick={() => navigate("/fruitsveges")}
              >
                SHOP NOW
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-7">
          {/* Baked Products */}
          <div className="bg-[url('/images/bakery.avif')] p-6 rounded flex w-1/2 items-center rounded-xl min-h-[350px] bg-cover bg-center">
            <div>
              <p className="text-lg text-black font-semibold drop-shadow-lg">15% Off</p>
              <h2 className="text-4xl font-bold leading-tight mt-2 text-white drop-shadow-lg">Baked Products</h2>
              <button
                className="mt-6 px-4 py-2 border rounded hover:bg-white text-black border-black"
                onClick={() => navigate("/breads")}
              >
                SHOP NOW
              </button>
            </div>
          </div>

          {/* Spices */}
          <div className="bg-[url('/images/spicess.avif')] p-6 rounded flex w-1/2 items-center rounded-xl min-h-[350px] bg-no-repeat bg-cover bg-center">
            <div>
              <p className="text-lg text-indigo-900 ml-12 font-semibold drop-shadow-lg">15% Off</p>
              <h2 className="text-4xl font-bold leading-tight mt-2 text-white drop-shadow-lg">Spices</h2>
              <button
                className="mt-6 px-4 py-2 border rounded hover:bg-white text-white border-white drop-shadow-lg"
                onClick={() => navigate("/Condiments")}
              >
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </section>
            {/* Category */}
            <section className="px-6 py-6 space-y-4">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Category</h2>
                </div>
                {/* Scrollable Container */}
                <div id="categoryScroll" className="flex overflow-x-auto gap-4 scroll-smooth py-2">
                    <div
                        onClick={() => handleCategoryClick("Fruitsveges")}
                        className="cursor-pointer min-w-[140px] bg-white p-4 shadow rounded text-center hover:shadow-lg transition"
                    >
                        <img src="/images/healthy-food.png" alt="" className="h-10 mx-auto mb-2" />
                        <p className="text-sm font-semibold">Fruitsveges</p>
                    </div>
                    
                    <div 
                        onClick={() => handleCategoryClick("Breads")}
                        className="cursor-pointer min-w-[140px] bg-white p-4 shadow rounded text-center hover:shadow-lg transition">
                        <img src="/images/bread.png" alt="" className="h-10 mx-auto mb-2" />
                        <p className="text-sm font-semibold">Breads</p>
                    </div>
                    <div
                        onClick={() => handleCategoryClick("Drinks")}
                        className="cursor-pointer min-w-[140px] bg-white p-4 shadow rounded text-center hover:shadow-lg transition"
                    >
                        <img src="/images/cheers.png" alt="" className="h-10 mx-auto mb-2" />
                        <p className="text-sm font-semibold">Drinks</p>
                    </div>

                    <div
                        onClick={() => handleCategoryClick("Chocolates")}
                        className="cursor-pointer min-w-[140px] bg-white p-4 shadow rounded text-center hover:shadow-lg transition"
                    >
                        <img src="/images/inclined-chocolate-bar.png" alt="" className="h-10 mx-auto mb-2" />
                        <p className="text-sm font-semibold">Chocolates</p>
                    </div>

                    <div 
                        onClick={() => handleCategoryClick("Frozenfood")}
                        className="cursor-pointer min-w-[140px] bg-white p-4 shadow rounded text-center hover:shadow-lg transition">
                        <img src="/images/bag.png" alt="" className="h-10 mx-auto mb-2" />
                        <p className="text-sm font-semibold">Frozen Food</p>
                    </div>

                    <div 
                        onClick={() => handleCategoryClick("Ricenoodles")}
                        className= "cursor-pointer min-w-[140px] bg-white p-4 shadow rounded text-center hover:shadow-lg transition">
                        <img src="/images/wonton-noodles.png" alt="" className="h-10 mx-auto mb-2" />
                        <p className="text-sm font-semibold">Rice Noodles</p>
                    </div>
                    <div 
                        onClick={() => handleCategoryClick("Cereal")}
                        className="cursor-pointer min-w-[140px] bg-white p-4 shadow rounded text-center hover:shadow-lg transition">
                        <img src="/images/cereals.png" alt="" className="h-10 mx-auto mb-2" />
                        <p className="text-sm font-semibold">Cereal</p>
                    </div>

                    <div 
                        onClick={() => handleCategoryClick("Snacks")}
                        className="cursor-pointer min-w-[140px] bg-white p-4 shadow rounded text-center hover:shadow-lg transition">
                        <img src="/images/snack.png" alt="" className="h-10 mx-auto mb-2" />
                        <p className="text-sm font-semibold">Snacks</p>
                    </div>

                    <div 
                        onClick={() => handleCategoryClick("Cleaninghousehold")}
                        className="cursor-pointer min-w-[140px] bg-white p-4 shadow rounded text-center hover:shadow-lg transition">
                        <img src="/images/cleaning.png" alt="" className="h-10 mx-auto mb-2" />
                        <p className="text-sm font-semibold">Cleaning Household</p>
                    </div>

                    <div 
                        onClick={() => handleCategoryClick("Dairyproducts")}
                        className="cursor-pointer min-w-[140px] bg-white p-4 shadow rounded text-center  hover:shadow-lg transition">
                        <img src="/images/milk.png" alt="" className="h-10 mx-auto mb-2" />
                        <p className="text-sm font-semibold">Dairy Products</p>
                    </div>

                    <div 
                        onClick={() => handleCategoryClick("Dryfruits")}
                        className="cursor-pointer min-w-[140px] bg-white p-4 shadow rounded text-center hover:shadow-lg transition">
                        <img src="/images/dried-fruits.png" alt="" className="h-10 mx-auto mb-2" />
                        <p className="text-sm font-semibold">Dry Fruits</p>
                    </div>
                     
                    <div
                        onClick={() => handleCategoryClick("Condiments")}
                         className="cursor-pointer min-w-[140px] bg-white p-4 shadow rounded text-center hover:shadow-lg transition">
                        <img src="/images/condiments copy.png" alt="" className="h-10 mx-auto mb-2" />
                        <p className="text-sm font-semibold">Condiments</p>
                    </div>

                    
                </div>
            </section>
            {/* Offer Cards */}
           <section className="px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* left: Creamy Muffins */}
      <div className="relative bg-[url('/images/cupcakes.jpg')] bg-cover bg-center bg-no-repeat rounded-lg min-h-[320px] flex items-center justify-start p-6 text-white">
        <div className="bg-black/50 p-4 rounded">
          <p className="text-yellow-400 text-lg">Upto 25% Off</p>
          <h2 className="text-2xl font-bold">Creamy Muffins</h2>
          <p className="text-gray-200">Very tasty creamy vanilla flavour creamy muffins.</p>
          <button
            className="text-yellow-400 underline hover:text-indigo-900 text-sm mt-2"
            onClick={() => navigate('/breads')}
          >
            SHOP NOW
          </button>
        </div>
      </div>

      {/* right: Dark Chocolates */}
      <div className="relative bg-[url('/images/ss.webp')] bg-cover bg-center bg-no-repeat rounded-lg min-h-[320px] flex items-center justify-start p-6 text-white">
        <div className="bg-black/50 p-4 rounded">
          <p className="text-yellow-400 text-lg">Upto 12% Off</p>
          <h2 className="text-2xl font-bold">Dark Chocolates</h2>
          <p className="text-gray-200">Very tasty Chocolates.</p>
          <button
            className="text-yellow-400 underline hover:text-indigo-900 text-sm mt-2"
            onClick={() => navigate('/Chocolate')}
          >
            SHOP NOW
          </button>
        </div>
      </div>
    </section>
            {/* Discount Form */}
            <section className="px-6 py-10 bg-blue-100 rounded m-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h2 className="text-4xl font-bold">Get <span className="text-yellow-400">25% Discount</span> on your first purchase</h2>
                        <p className="mt-4 text-gray-600 max-w-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst amet,
                            metus, sit massa posuere maecenas.</p>
                    </div>
                    <div className="flex flex-col gap-4 w-full md:w-1/3">
                        <input type="text" placeholder="Name" className="border px-4 py-2 rounded" />
                        <input type="email" placeholder="abc@mail.com" className="border px-4 py-2 rounded" />
                        <label className="text-sm"><input type="checkbox" className="mr-2" />Subscribe to the newsletter</label>
                        <button className="bg-black text-white px-4 py-2 rounded">Submit</button>
                    </div>
                </div>
            </section>
        </div>
    );
    
};

export default Homepage

