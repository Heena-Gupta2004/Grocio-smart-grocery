import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ cartItems = [] }) => {
  const navigate = useNavigate();
  const [showCart, setShowCart] = useState(false);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const categoryRoutes = {
    Drinks: "/beverage",
    Chocolates: "/chocolate",
    Fruits: "/fruitsveges",
    Vegetables: "/fruitsveges",
    Condiments: "/condiments",
    Groceries: "/groceries",
    Spices: "/spices",
    "Frozen Food": "/frozenfood",
    "Rice Noodles": "/ricenoodles",
    Cereal: "/cereal",
    Snacks: "/snacks",
    "Cleaning Household": "/cleaninghousehold",
    "Dairy Products": "/dairyproducts",
    "Dry Fruits": "/dryfruits",
  };

  const handleCategoryChange = (e) => {
    const route = categoryRoutes[e.target.value];
    if (route) navigate(route);
  };

  return (
    <header className="border-b shadow-sm bg-white relative z-50">
      {/* 🔶 Top Row */}
      <div className="flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl font-bold">
          <img
            src="/images/Atlanta Community Food Bank.jpeg"
            alt="Image"
            className="h-9"
          />
          <span className="text-black">
            Grocio<span className="text-yellow-500">MART</span>
          </span>
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Search for more than 20,000 products"
          className="w-1/2 border px-3 py-1 rounded text-sm"
        />

        {/* Icons */}
        <div className="flex gap-4 items-center relative">
          {/* Account */}
          <svg
            onClick={() => navigate("/Signinpage")}
            className="h-5 cursor-pointer"
            viewBox="0 0 50 50"
          >
            <path d="M25 0C11.193 0 0 11.193 0 25s11.193 25 25 25 25-11.193 25-25S38.807 0 25 0zm0 12c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9zm0 34c-6.627 0-12.49-3.227-16-8.133C9.063 33.5 17.36 31 25 31s15.937 2.5 16 6.867C37.49 42.773 31.627 46 25 46z" />
          </svg>

          {/* Favourite */}
          <svg
            className="h-5 cursor-pointer"
            viewBox="0 0 24 24"
            aria-label="favourite"
          >
            <path d="M12 21s-7.5-4.35-10-8.5C-1 7.5 3 2 8 5c2 1.5 4 4 4 4s2-2.5 4-4c5-3 9 2.5 6 7.5C19.5 16.65 12 21 12 21z" />
          </svg>

          {/* Cart */}
          <div
            className="relative cursor-pointer"
            onClick={() => setShowCart(!showCart)}
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24">
              <path d="M7 4h-2l-1 2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2h-11.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1h-16.31l-.94-2z" />
            </svg>

            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
                {cartItems.length}
              </span>
            )}
          </div>

          {/* Cart Dropdown */}
          {showCart && (
            <div className="absolute right-0 top-10 w-64 bg-white border shadow-md p-3 text-sm">
              <h3 className="font-bold mb-2">Your Cart</h3>

              {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
              ) : (
                <>
                  <ul className="max-h-40 overflow-y-auto">
                    {cartItems.map((item) => (
                      <li
                        key={item.id}
                        className="flex justify-between py-1"
                      >
                        <span>
                          {item.name} × {item.quantity}
                        </span>
                        <span>₹{item.price * item.quantity}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-2 font-semibold text-right">
                    Total: ₹{totalPrice}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* 🔷 Navigation */}
      <nav className="flex gap-6 px-6 py-2 bg-gray-50 border-t text-sm">
        <select
          className="border rounded px-2 py-1"
          onChange={handleCategoryChange}
        >
          <option value="">Shop by Department</option>
          {Object.keys(categoryRoutes).map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <span className="cursor-pointer">Brand</span>
        <span className="cursor-pointer">Sale</span>
      </nav>
    </header>
  );
};

export default Header;
