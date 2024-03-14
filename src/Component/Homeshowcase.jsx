import { Rating } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const title = "Our Products";

const ProductData = [
    {
        id: "124e13b9-2d54-4b2f-a74d-a77b362d6ead",
        cate: "Shoes",
        title: "ULTRABOOST 22 SHOES",
        brand: "Addidas",
        price: 420,
        stock: 20,
        ratings: 4,
        ratingsCount: 3725,
        img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg",
        shipping: 1,
        quantity: 0
    },
    {
        id: "4a0090e7-b65d-4f6e-a42b-5603a3f51883",
        cate: "Bags",
        title: "3-Stripes Backpack 2.0",
        brand: "Addidas",
        price: 74,
        stock: 7,
        ratings: 5,
        ratingsCount: 365,
        img: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/ba79ccb861fd4fd49e3aac9f006a6407_9366/3-Stripes_Backpack_2.0_Grey_EX6735_01_standard.jpg",
        shipping: 23,
        quantity: 0
    },
    {
        id: "b1872b25-ba91-48ed-9468-1822df0637b9",
        cate: "Cap",
        title: "Relaxed Strap-Back Hat",
        brand: "Addidas",
        price: 30,
        stock: 6,
        ratings: 4,
        ratingsCount: 4,
        img: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/4feb20f4d990407cb4f1a88a0040b212_9366/Relaxed_Strap-Back_Hat_Black_BH7137_01_standard.jpg",
        shipping: 1,
        quantity: 0
    },
    {
        id: "1770549a-571b-4baf-bc58-7bae7a228dcb",
        cate: "Bags",
        title: "Santiago Lunch Bag",
        brand: "Addidas",
        price: 63,
        stock: 10,
        ratings: 3,
        ratingsCount: 346,
        img: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/c2aaf5e8a7924f1d9277ac9f005b5f37_9366/Santiago_Lunch_Bag_Black_EX6532_01_standard.jpg",
        shipping: 42,
        quantity: 0
    },
    {
        id: "9496d72b-04ec-41f8-9bc3-0a7c9697be8e",
        cate: "Shoes",
        title: "4DFWD SHOES",
        brand: "Addidas",
        price: 287,
        stock: 11,
        ratings: 4,
        ratingsCount: 799,
        img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8c5d1994dfd343e28567ad4400dd351d_9366/4DFWD_Shoes_Black_Q46447_01_standard.jpg",
        shipping: 49,
        quantity: 0
    },
    {
        id: "eaff8921-f7eb-446f-b072-d96559685de0",
        cate: "Bottle",
        title: "Steel Metal Bottle 1L",
        brand: "Addidas",
        price: 40,
        stock: 14,
        ratings: 5,
        ratingsCount: 58,
        img: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/c45df020e3ae4e9199a4ac7d0001cfb7_9366/Steel_Metal_Bottle_1L_White_EX7301_01_standard.jpg",
        shipping: 17,
        quantity: 0
    },
    {
        id: "d0803f97-966f-4296-ad31-a7f70fc86fab",
        cate: "Men's Pants",
        title: "TIRO TRACK PANTS",
        brand: "Addidas",
        price: 146,
        stock: 15,
        ratings: 5,
        ratingsCount: 3702,
        img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9c7058d8677742ac8519ac3f009cdcf4_9366/Tiro_21_Track_Pants_Black_GH7305_21_model.jpg",
        shipping: 29,
        quantity: 0
    },
    {
        id: "4bf9798f-63bc-4a83-b0c6-6a3b816fe922",
        cate: "Shoes",
        title: "LITE RACER ADAPT 3.0 SHOES",
        brand: "Addidas",
        price: 229,
        stock: 10,
        ratings: 5,
        ratingsCount: 1764,
        img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/96a5f085fedf4e678095abad01056711_9366/Lite_Racer_Adapt_3.0_Shoes_Black_FX8802_01_standard.jpg",
        shipping: 32,
        quantity: 0
    },






]
const Homeshowcase = () => {
    const [data, setData] = useState(ProductData);
    const fillterItm = (cata) => {
        if (cata !== "All") {

            const itm = ProductData.filter(pro => pro.cate === cata);
            setData(itm);
        }
        else {
            setData(ProductData);

        }

    }
    return (
        <div className="min-h-screen bim flex flex-col items-center pb-5 pt-10" >
            <div className="w-11/12 bg-white p-3 shadow-lg rounded-md flex justify-between px-10 items-center">
                <Typography variant="h3">{title}</Typography>
                <ul className="flex gap-1 justify-center items-center">
                    <li onClick={() => fillterItm("All")} className="hover:bg-primary px-5 rounded-md py-1 cursor-pointer">All</li>
                    <li onClick={() => fillterItm("Shoes")} className="hover:bg-primary px-5 rounded-md py-1 cursor-pointer">Shoes</li>
                    <li onClick={() => fillterItm("Bags")} className="hover:bg-primary px-5 rounded-md py-1 cursor-pointer">Bags</li>
                    <li onClick={() => fillterItm("Cap")} className="hover:bg-primary px-5 rounded-md py-1 cursor-pointer">Cap</li>
                    <li onClick={() => fillterItm("Bottle")} className="hover:bg-primary px-5 rounded-md py-1 cursor-pointer">Bottle</li>
                </ul>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-5 pt-10">
                {
                    data && data.map((e, i) => (
                        <div key={i} className="shadow-md  w-72 rounded-md overflow-hidden flex flex-col justify-center cursor-pointer">
                            <Link to={`/shop/${e.id}`}>
                                <div className="h-fit bg-red-700 overflow-hidden ">

                                    <img src={e.img} alt="" className="hover:scale-110 duration-500" />
                                </div>
                                <div className="p-5 ">

                                    <div className="flex justify-between">
                                        <h1>{e.cate}</h1>
                                        {/* <div className="flex">
                                            <FaStar className="text-primary" />
                                            <FaStar className="text-primary" />
                                            <FaStar className="text-primary" />
                                            <FaStar className="text-primary" />
                                            <FaStar className="text-primary" />
                                        </div> */}
                                        <Rating value={e.ratings} readonly />
                                    </div>
                                    <div>
                                        <h1>{e.title}</h1>
                                    </div>
                                    <div className="flex justify-between">
                                        <h1>{e.brand}</h1>
                                        <h1 className="font-bold"> ${e.price}</h1>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Homeshowcase