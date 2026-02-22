import React from "react";

// ✅ Proper icon imports
import viewIcon from "../../public/icons/show.png";
import editIcon from "../../public/icons/editing.png";
import deleteIcon from "../../public/icons/delete.png";

const DesignComp = () => {
  const products = [
    {
      productName: "Apple MacBook Pro 17",
      color: "Silver",
      category: "Laptop",
      price: "$2999",
      image: "/images/apple-macbook-silver.jpg",
    },
    {
      productName: "iPhone 14",
      color: "White",
      category: "Laptop PC",
      price: "$1999",
      image: "/images/iphone14-white.webp",
    },
    {
      productName: "Microsoft Surface Pro",
      color: "Black",
      category: "Accessories",
      price: "$99",
      image: "/images/surface-pro-black.jpg",
    },
    {
      productName: "Magic Mouse 2",
      color: "Gray",
      category: "Phone",
      price: "$799",
      image: "/images/magic-mouse-gray.jpg",
    },
    {
      productName: "Apple MacBook Pro 17”",
      color: "Red",
      category: "Wearables",
      price: "$999",
      image: "/images/apple-macbook-silver.jpg",
    },
  ];

  return (
    <div className="bg-white min-h-screen p-8">
      <h2 className="text-black text-xl font-bold text-center mb-6">
        Colorful Product Data Table
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-white border-collapse">
          <thead>
            <tr className="bg-pink-300">
              <th className="text-left px-6 py-3">Product</th>
              <th className="text-left px-6 py-3">Color</th>
              <th className="text-left px-6 py-3">Category</th>
              <th className="text-left px-6 py-3">Price</th>
              <th className="text-left px-6 py-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-pink-400" : "bg-pink-500"}
              >
                {/* ✅ Product */}
                <td className="flex items-center gap-4 px-6 py-4">
                  <img
                    src={product.image}
                    alt={product.productName}
                    className="w-10 h-10 rounded-full object-cover bg-white"
                  />
                  <span className="font-bold text-purple-700">
                    {product.productName}
                  </span>
                </td>

                {/* ✅ Color */}
                <td className="px-6 py-4">{product.color}</td>

                {/* ✅ Category */}
                <td className="px-6 py-4">{product.category}</td>

                {/* ✅ Price */}
                <td className="px-6 py-4">{product.price}</td>

                {/* ✅ Actions (FIXED) */}
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={viewIcon}
                      alt="view"
                      className="h-6 w-6 cursor-pointer hover:scale-110 transition-transform"
                    />
                    <img
                      src={editIcon}
                      alt="edit"
                      className="h-6 w-6 cursor-pointer hover:scale-110 transition-transform"
                    />
                    <img
                      src={deleteIcon}
                      alt="delete"
                      className="h-6 w-6 cursor-pointer hover:scale-110 transition-transform"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DesignComp;
