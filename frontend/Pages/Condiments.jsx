import { useState } from "react";
import Header from '../Components/Header';



const Condiments = () => {
    const products = [
        {
            id: 1,
            productName: "Chilli Powder",
            weight: "250g ",
            price: 100,
            image: "https://www.shutterstock.com/image-photo/chilli-powder-white-bowl-isolated-600nw-2414027701.jpg"
        },
        {
            id: 2,
            productName: "Turmeric Powder",
            weight: "250g g",
            price: 96,
            image: "https://organicmandya.com/cdn/shop/files/TurmericPowder_f9f422c6-db75-489f-8e59-e871a8873da1.jpg?v=1738136234&width=1000"
        },
        {
            id: 3,
            productName: "Corainder Powder",
            weight: "250 g",
            price: 69,
            image: "https://rexzeeimpex.com/wp-content/uploads/2024/03/coriander-powder-bowl-500x500-1-.webp"
        },
        {
            id: 4,
            productName: "Cinnamon Sticks",
            weight: "100 g",
            price: 70,
            image: "https://images-cdn.ubuy.co.in/654af88ba5bcde118435e911-cinnamon-sticks.jpg"
        },
        {
            id: 5,
            productName: "Star Anise",
            weight: " 50 g",
            price: 89 ,
            image: "https://hearthy.in/cdn/shop/files/Star_Anise_2_c3698607-2077-40d0-92e7-329df49160d6.jpg?v=1722950837&width=1445"
        },
        {
            id: 6,
            productName: "Kesar",
            weight: "5 g",
            price: 200,
            image: "https://www.nutrixia.in/cdn/shop/files/Keshar-_Certified-Grade-A_-for-Biryani_-Beauty-and-Health-_Pack-of-1-_1gram_-Nutrixia-Food-78830248.jpg?v=1744977255"
        },
        {
            id: 7,
            productName: "Cloves",
            weight: "25 g",
            price: 65,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzPcniuMduq5H4a2VGg7kWYoodHI7cxqkOXg&s"
        },
        {
            id: 8,
            productName: "Fenugreek",
            weight: "100 g",
            price: 58,
            image: "https://www.consciousfood.com/cdn/shop/files/methidana4.jpg?v=1696331144&width=1445"
        },
        {
            id: 9,
            productName: "Salt",
            weight: " 1pcs",
            price: 30,
            image: "https://m.media-amazon.com/images/I/614mm2hYHyL.jpg"
        },
        {
            id: 10,
            productName: "Black Salt",
            weight: "25 g",
            price: 30,
            image: "https://www.quickpantry.in/cdn/shop/products/black-saltkala-namak-powder-100-g-quick-pantry.jpg?v=1710538103"
        },
        {
            id: 11,
            productName: "Ketchup",
            weight: "100 g",
            price: 45,
            image: "https://m.media-amazon.com/images/I/714EBeI5hyL.jpg"
        },
        {
            id: 12,
            productName: "Jam",
            weight: "100 g",
            price: 67,
            image: "https://minchys.com/wp-content/uploads/2021/12/Minchys-Strawberry-Jam-Minchys.jpg"
        },
        {
            id: 13,
            productName: "Honey",
            weight: "50 g",
            price: 34,
            image: "https://m.media-amazon.com/images/I/71O4OnjaHVL._UF1000,1000_QL80_.jpg",
        },
        {
            id: 14,
            productName: "Mustard",
            weight: "100 g",
            price: 30,
            image: "https://www.kushaspices.com/wp-content/uploads/2021/01/Mustard-e1616057582117.png",
        },
        {
            id: 15,
            productName: "Soya Sauce",
            weight: "50 ml",
            price: 89,
            image: "https://www.tatanutrikorner.com/cdn/shop/files/darksoysauce_b923f28b-341d-41fc-951f-234b2e6cfc63.webp?v=1732763964&width=1946",
        },
        {
            id: 16,
            productName: "Vinegar",
            weight: "50 ml",
            price: 56,
            image: "https://www.tastynibbles.in/cdn/shop/products/vinegar500ml2_800x.jpg?v=1716581495",
        },
        {
            id: 17,
            productName: "Sugar",
            weight: "1000 g",
            price: 40,
            image: "https://www.bbassets.com/media/uploads/p/l/244096_6-madhur-sugar-refined.jpg",
        },
        {
            id: 18,
            productName: "Oregano",
            weight: "50 g",
            price: 106,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5qeUe1oRXOftxqMZqhbtGBTyn1Xi6byG_dw&s",
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
                Buy Condiments Online 
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

export default Condiments;
