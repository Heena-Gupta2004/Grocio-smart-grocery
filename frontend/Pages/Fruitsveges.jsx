import { useState } from "react";
import Header from '../Components/Header';



const Fruitsveges = () => {
    const products = [
        {
            id: 1,
            productName: "Tomatoes",
            weight: "500g ",
            price: 20,
            image: "https://media.istockphoto.com/id/847335116/photo/tomatoes-on-the-vine.jpg?s=612x612&w=0&k=20&c=XspM2ySvUfqjnt7HL5qKyn0tyRb5qLsf1GAP6-3xQsw="
        },
        {
            id: 2,
            productName: "Potato",
            weight: "1000 g",
            price: 20,
            image: "https://m.media-amazon.com/images/I/31WtrNh0M8L._AC_SY350_QL15_.jpg"
        },
        {
            id: 3,
            productName: "Onion",
            weight: "500 g",
            price: 20,
            image: "https://www.jiomart.com/images/product/original/590011678/onion-1-kg-pack-product-images-o590011678-p611163418-1-202503161707.jpg?im=Resize=(420,420)"
        },
        {
            id: 4,
            productName: "Capsicum",
            weight: "500 g",
            price: 30,
            image: "https://m.media-amazon.com/images/I/71UbN9-gk8L.jpg"
        },
        {
            id: 5,
            productName: "Ladyfinger",
            weight: " 500 g",
            price: 40 ,
            image: "https://thevegetablebazaar.in/wp-content/uploads/2022/04/Ladyfinger-2-1.png"
        },
        {
            id: 6,
            productName: "Bitter Gourd",
            weight: "250 g",
            price: 40,
            image: "https://www.chandigarhayurvedcentre.com/wp-content/uploads/2016/02/Bitter-Gourd-750x750-1.jpg"
        },
        {
            id: 7,
            productName: "Green Bean",
            weight: "250 g",
            price: 25,
            image: "https://media.istockphoto.com/id/140236373/photo/portion-of-uncooked-green-french-beans.jpg?s=612x612&w=0&k=20&c=tGhxoV_eu72htyKDZk1ECFHi1eZJVi33hZ_qDjKnywA="
        },
        {
            id: 8,
            productName: "Carrot",
            weight: "250 g",
            price: 38,
            image: "https://media.istockphoto.com/id/545454816/photo/fresh-carrots-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=Ildkp76TfQOntsgiIMDu2cAsBt2ebHx2870MHy-4zBs="
        },
        {
            id: 9,
            productName: "Cabbage",
            weight: " 1pcs",
            price: 50,
            image: "https://media.istockphoto.com/id/114419377/photo/cabbage.jpg?s=612x612&w=0&k=20&c=bukwc3dM15E9k_5JIQBeOeh3xWHOGcgJuEgCkJMl6Jw="
        },
        {
            id: 10,
            productName: "Mango",
            weight: "1000 g",
            price: 100,
            image: "https://sahajaaharam.com/files/Mango%20-%20Alphonzo.jpg"
        },
        {
            id: 11,
            productName: "Litchi",
            weight: "100 g",
            price: 52,
            image: "https://www.aishcart.in/5828/litchi-fruit-box-10kg.jpg"
        },
        {
            id: 12,
            productName: "Pear",
            weight: "250 g",
            price: 40,
            image: "https://5.imimg.com/data5/SELLER/Default/2021/7/IU/SO/OP/50089309/round-golden-pear-500x500.jpg"
        },
        {
            id: 13,
            productName: "Strawberry",
            weight: "180 g",
            price: 200,
            image: "https://www.jiomart.com/images/product/original/590001814/strawberry-small-pack-180-g-product-images-o590001814-p590116964-1-202412161658.jpg?im=Resize=(1000,1000)",
        },
        {
            id: 14,
            productName: "Banana",
            weight: "500 g",
            price: 30,
            image: "https://organicmandya.com/cdn/shop/files/BananaPachabale.jpg?v=1721369894&width=1000",
        },
        {
            id: 15,
            productName: "Dragon Fruit",
            weight: "2 pcs",
            price: 200,
            image: "https://peppyflora.com/wp-content/uploads/2020/12/White-Dragon-Fruit-Plant-Pitaya-3x4-Product-Peppyflora-01-a-Moz.jpg",
        },
        {
            id: 16,
            productName: "Avacado",
            weight: "1 pcs",
            price: 60,
            image: "https://cdn.britannica.com/72/170772-050-D52BF8C2/Avocado-fruits.jpg",
        },
        {
            id: 17,
            productName: "Mosambi",
            weight: "1000 g",
            price: 40,
            image: "https://www.jiomart.com/images/product/original/590001673/mosambi-1-kg-product-images-o590001673-p590001673-0-202409171903.jpg?im=Resize=(1000,1000)",
        },
        {
            id: 18,
            productName: "Grapes",
            weight: "500 g",
            price: 100,
            image: "https://fruitboxco.com/cdn/shop/products/asset_22_1_800x.jpg?v=1643137805",
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
                Buy Fruits & Vegetables Online 
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

export default Fruitsveges;
