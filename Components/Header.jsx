import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ cartItems = [] }) => {
    const navigate = useNavigate();
    const [showCart, setShowCart] = useState(false);

    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const categoryRoutes = {
        "Drinks": "/beverage",
        "Chocolates": "/chocolate",
        "Fruits": "/fruitsveges",
        "Vegetables": "/fruitsveges",
        "Condiments": "/condiments",
        "Groceries": "/groceries",
        "Spices": "/spices",
        "Frozen Food": "/frozenfood",
        "Rice Noodles": "/ricenoodles",
        "Cereal": "/cereal",
        "Snacks": "/snacks",
        "Cleaning Household": "/cleaninghousehold",
        "Dairy Products": "/dairyproducts",
        "Dry Fruits": "/dryfruits",
    };

    const handleCategoryChange = (e) => {
        const selectedCategory = e.target.value;
        const route = categoryRoutes[selectedCategory];
        if (route) navigate(route);
    };

    const handleAccountClick = () => {
        navigate('/Signinpage');
    };

    return (
        <header className="border-b shadow-sm relative bg-white z-50">
            {/* 🔶 Top Row */}
            <div className="flex justify-between items-center px-6 py-3">
                {/* Logo */}
                <div className="text-2xl font-bold text-yellow-500 flex items-center gap-2">
                    <img className="h-9" src="/images/Atlanta Community Food Bank.jpeg" alt="Logo" />
                    <span className="text-black">Grocio</span>MART
                </div>

                {/* Search Bar */}
                <div className="flex gap-2 items-center w-1/2">
                    <input
                        type="text"
                        placeholder="Search for more than 20,000 products"
                        className="w-full border px-3 py-1 rounded text-sm"
                    />
                </div>

                {/* Icons */}
                <div className="flex gap-4 text-lg relative">
                    {/* Account Icon */}
                    <svg onClick={handleAccountClick}
                        className="h-5  cursor-pointer " data-bbox="0 0 50 50" data-type="shape" xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 50 50">
                        <g>
                            <path d="M25 48.077c-5.924 0-11.31-2.252-15.396-5.921 2.254-5.362 7.492-8.267 15.373-8.267 7.889 0 13.139 3.044 15.408 8.418-4.084 3.659-9.471 5.77-15.385 5.77m.278-35.3c4.927 0 8.611 3.812 8.611 8.878 0 5.21-3.875 9.456-8.611 9.456s-8.611-4.246-8.611-9.456c0-5.066 3.684-8.878 8.611-8.878M25 0C11.193 0 0 11.193 0 25c0 .915.056 1.816.152 2.705.032.295.091.581.133.873.085.589.173 1.176.298 1.751.073.338.169.665.256.997.135.515.273 1.027.439 1.529.114.342.243.675.37 1.01.18.476.369.945.577 1.406.149.331.308.657.472.98.225.446.463.883.714 1.313.182.312.365.619.56.922.272.423.56.832.856 1.237.207.284.41.568.629.841.325.408.671.796 1.02 1.182.22.244.432.494.662.728.405.415.833.801 1.265 1.186.173.154.329.325.507.475l.004-.011A24.886 24.886 0 0 0 25 50a24.881 24.881 0 0 0 16.069-5.861.126.126 0 0 1 .003.01c.172-.144.324-.309.49-.458.442-.392.88-.787 1.293-1.209.228-.232.437-.479.655-.72.352-.389.701-.78 1.028-1.191.218-.272.421-.556.627-.838.297-.405.587-.816.859-1.24a26.104 26.104 0 0 0 1.748-3.216c.208-.461.398-.93.579-1.406.127-.336.256-.669.369-1.012.167-.502.305-1.014.44-1.53.087-.332.183-.659.256-.996.126-.576.214-1.164.299-1.754.042-.292.101-.577.133-.872.095-.89.152-1.791.152-2.707C50 11.193 38.807 0 25 0">
                            </path>
                        </g>
                    </svg>


                    {/*image of favourite*/}
                    <svg className="h-5 cursor-pointer" preserveAspectRatio="xMidYMid meet" data-bbox="18.5 27.376 162.998 145.25" viewBox="18.5 27.376 162.998 145.25" height={200} width={200} xmlns="http://www.w3.org/2000/svg" data-type="shape" role="presentation" aria-hidden="true" aria-label>
                        <g>
                            <path d="m168.132 41.038-.278-.278c-17.846-17.844-46.885-17.844-64.73 0l-.278.278a44.959 44.959 0 0 0-2.826 3.104 44.909 44.909 0 0 0-2.826-3.104l-.278-.278c-17.846-17.845-46.883-17.845-64.728-.003l-.281.28C23.261 49.682 18.5 61.177 18.5 73.403c0 12.227 4.761 23.722 13.406 32.365l65.992 65.971a3.048 3.048 0 0 0 2.139.887 3 3 0 0 0 2.139-.887l66.097-66.119c17.688-17.844 17.626-46.816-.141-64.582zm-4.146 60.314-63.948 63.972-63.854-63.833c-7.503-7.503-11.635-17.479-11.635-28.088s4.132-20.585 11.635-28.088l.278-.278c7.49-7.489 17.465-11.614 28.088-11.614 10.622 0 20.597 4.125 28.087 11.614l.279.279a39.965 39.965 0 0 1 4.61 5.544c.476.684 1.233 1.144 2.115 1.266.46.052.927.004 1.353-.139a3.027 3.027 0 0 0 1.533-1.149c1.384-2 2.93-3.857 4.595-5.522l.278-.278c15.489-15.486 40.69-15.484 56.176 0l.278.278c15.419 15.417 15.475 40.558.132 56.036z">
                            </path>
                        </g>
                    </svg>

                    {/* Cart Icon */}
                    <div className=" cursor-pointer" onClick={() => setShowCart(!showCart)}>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 164.9 196.4">
                            <path d="M81.9 11.5c-18.8 0-34.1..." />
                            <path d="M156.9 70.5v118H8v-118h148.9m8-8H0v134h164.9v-134z" />
                        </svg>
                        {cartItems.length > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
                                {cartItems.length}
                            </span>
                        )}
                    </div>

                    {/* Cart Dropdown */}
                    {showCart && (
                        <div className="absolute top-10 right-0 bg-white shadow-md border rounded-md w-64 z-50 p-3 text-sm">
                            <h3 className="font-bold mb-2">Your Cart</h3>
                            {cartItems.length === 0 ? (
                                <p>Your cart is empty.</p>
                            ) : (
                                <>
                                    <ul className="max-h-40 overflow-y-auto">
                                        {cartItems.map((item) => (
                                            <li key={item.id} className="flex justify-between py-1">
                                                <span>{item.name} x {item.quantity}</span>
                                                <span>₹{item.price * item.quantity}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-3 text-right font-semibold">
                                        Total: ₹{totalPrice}
                                    </div>
                                </>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* 🔷 Navigation Row */}
            <nav className="flex gap-6 px-6 py-2 text-sm font-medium bg-gray-50 border-t">
                {/* 🔹 Shop by Department */}
                <div>
                    <select
                        className="border rounded px-2 py-1 text-sm"
                        onChange={handleCategoryChange}
                    >
                        <option value="">Shop by Department</option>
                        {Object.keys(categoryRoutes).map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>

                {/* 🔹 Other Pages */}
                <div>
                    <select className="border rounded px-2 py-1 text-sm">
                        <option value="">Pages</option>
                        <option>About us</option>
                        <option>Shop</option>
                        <option>Single Product</option>
                        <option>Cart</option>
                        <option>Check out</option>
                        <option>My Account</option>
                        <option>Contact</option>
                        <option>Thank you</option>
                    </select>
                </div>

                <span className="cursor-pointer">Brand</span>
                <span className="cursor-pointer">Sale</span>
            </nav>
        </header>
    );
};

export default Header;
