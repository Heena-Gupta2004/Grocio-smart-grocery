import React from "react";
import deleteimg from "./../../public/icons/delete.png"


const DesignComp = () => {
    const products = [
        {
            productName: "Apple MacBook Pro 17”",
            color: "Silver",
            category: "Laptop",
            price: "$2999",
            image: "/images/apple-macbook-silver.jpg",
            actions: {
                view: "/src/icons/show.png",
                edit: "/src/icons/editing.png",
                delete: deleteimg
            }
        },
        {
            productName: "iPhone 14",
            color: "White",
            category: "Laptop PC",
            price: "$1999",
            image: "/images/iphone14-white.webp",
            actions: {
                view: "/src/icons/show.png",
                edit: "/src/icons/editing.png",
                delete: deleteimg
            }

        },
        {
            productName: "Microsoft Surface Pro",
            color: "Black",
            category: "Accessories",
            price: "$99",
            image: "/images/surface-pro-black.jpg",
            actions: {
                view: "/src/icons/show.png",
                edit: "/src/icons/editing.png",
                delete: deleteimg
            }

        },
        {
            productName: "Magic Mouse 2",
            color: "Gray",
            category: "Phone",
            price: "$799",
            image: "/images/magic-mouse-gray.jpg",
            actions: {
                view: "/src/icons/show.png",
                edit: "/src/icons/editing.png",
                delete: deleteimg
            }
        },
        {
            productName: "Apple MacBook Pro 17”",
            color: "Red",
            category: "Wearables",
            price: "$999",
            image: "/images/apple-macbook-silver.jpg",
            actions: {
                view: "/src/icons/show.png",
                edit: "/src/icons/editing.png",
                delete: deleteimg
            }

        }
    ];

    return (
        <div className="bg-white h-screen  p-8">
            <div className="justify-center  ">
                <h2 className=" text-black text-xl font-bold text-center items-center ">
                    Colorful Product Data Table
                </h2>
            </div>
            <div className="bg-pink-600 h-100 w-300 items-center mt-33 ml-32 ">
                <table className="w-full text-white">
                    <thead>
                        <tr className="bg-pink-300">
                            <th className="text-left px-6 py-3">Product Name</th>
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
                                <td className="flex items-center gap-4 px-6 py-4">
                                    <img src={product.image} alt={product.productName} className="w-10 h-10 rounded-full object-cover bg-white" />
                                    <span className="font-bold text-purple-600">{product.productName}</span>
                                </td>
                                <td className="px-6 py-4">{product.color}</td>
                                <td className="px-6 py-4">{product.category}</td>
                                <td className="px-6 py-4">{product.price}</td>
                                <td className="px-6 py-4 flex items-center space-x-4 text-white">
                                    <td className="px-6 py-4 flex items-center space-x-4 text-white">
                                        <img src={product.actions.view} alt="view" className="h-6 w-6 cursor-pointer hover:scale-110 transition-transform" />
                                        <img src={product.actions.edit} alt="edit" className="h-6 w-6 cursor-pointer hover:scale-110 transition-transform" />
                                        <img src={product.actions.delete} alt="delete" className="h-6 w-6 cursor-pointer hover:scale-110 transition-transform" />
                                    </td>

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
