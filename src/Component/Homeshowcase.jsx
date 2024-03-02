import { Typography } from "@material-tailwind/react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const title = "Our Products";

const ProductData = [
    {
        imgUrl: 'src/assets/images/categoryTab/01.jpg',
        cate: 'Shoes',
        title: 'Nike Premier X',
        author: 'assets/images/course/author/01.jpg',
        brand: 'Nike',
        price: '$199.00',
        id: 1,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/02.jpg',
        cate: 'Bags',
        title: 'Asthetic Bags',
        author: 'assets/images/course/author/02.jpg',
        brand: 'D&J Bags',
        price: '$199.00',
        id: 2,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/03.jpg',
        cate: 'Phones',
        title: 'iPhone 12',
        author: 'src/assets/images/categoryTab/brand/apple.png',
        brand: 'Apple',
        price: '$199.00',
        id: 3,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/04.jpg',
        cate: 'Bags',
        title: 'Hiking Bag 15 Nh100',
        author: 'assets/images/course/author/04.jpg',
        brand: 'Gucci',
        price: '$199.00',
        id: 4,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/05.jpg',
        cate: 'Shoes',
        title: 'Outdoor Sports Shoes',
        author: 'assets/images/course/author/05.jpg',
        brand: 'Nike',
        price: '$199.00',
        id: 5,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/06.jpg',
        cate: 'Beauty',
        title: 'COSRX Snail Mucin',
        author: 'assets/images/course/author/06.jpg',
        brand: 'Zaara',
        price: '$199.00',
        id: 6,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/07.jpg',
        cate: 'Bags',
        title: 'Look Less Chanel Bag ',
        author: 'assets/images/course/author/01.jpg',
        brand: 'Gucci',
        price: '$199.00',
        id: 7,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/08.jpg',
        cate: 'Shoes',
        title: 'Casual Sneakers',
        author: 'assets/images/course/author/02.jpg',
        brand: 'Bata',
        price: '$199.00',
        id: 8,
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
                    <li onClick={() => fillterItm("Phones")} className="hover:bg-primary px-5 rounded-md py-1 cursor-pointer">Phone</li>
                    <li onClick={() => fillterItm("Beauty")} className="hover:bg-primary px-5 rounded-md py-1 cursor-pointer">Beauty</li>
                </ul>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-5 pt-10">
                {
                    data && data.map((e, i) => (
                        <div key={i} className="shadow-md  w-80 rounded-md overflow-hidden flex flex-col justify-center cursor-pointer">
                            <Link to={`/shop/${e.id}`}>
                                <div className="h-fit bg-red-700 overflow-hidden ">

                                    <img src={e.imgUrl} alt="" className="hover:scale-110 duration-500" />
                                </div>
                                <div className="p-5 ">

                                    <div className="flex justify-between">
                                        <h1>{e.cate}</h1>
                                        <div className="flex">
                                            <FaStar className="text-primary" />
                                            <FaStar className="text-primary" />
                                            <FaStar className="text-primary" />
                                            <FaStar className="text-primary" />
                                        </div>
                                    </div>
                                    <div>
                                        <h1>{e.title}</h1>
                                    </div>
                                    <div className="flex justify-between">
                                        <h1>{e.brand}</h1>
                                        <h1 className="font-bold"> {e.price}</h1>
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