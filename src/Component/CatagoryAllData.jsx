import products from "../products.json";
import { useEffect } from 'react';
import { useState } from 'react';
import { FaChevronRight, FaChevronLeft, FaShoppingCart, FaExternalLinkAlt } from "react-icons/fa";
// ----------
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { Rating } from "@material-tailwind/react";
import { useContext } from "react";
import { contextAPI } from "../App";
var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 990,
            settings: {
                className: "center",
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                centerMode: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                className: "center",
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2,
                centerMode: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                className: "center",
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false
            }
        }
    ]
};
// ----------------
const CatagoryAllData = ({ cta, id }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const pro = products.filter(pr => pr.category === cta);
        setData(pro);
        // console.log(pro)
    }, [])
    const arrowRef = useRef(null);

    const { cartItem, setCartItem, userLogin, setUserLogin } = useContext(contextAPI);

    const frmSubmit = (id) => {

        const fin = products.find(pd => pd.id === id);
        // const finlter = itm.filter(pd => pd.id === id);

        const alData = {
            ...fin, size: 'M', color: 'Black', quantity: 1, discout: '', newprice: fin.price * 1
        }

        const existingItemIndex = cartItem.findIndex(item => item.id === id);

        if (existingItemIndex !== -1) {

            const updatedCartItem = [...cartItem];
            updatedCartItem[existingItemIndex].quantity += 1;
            updatedCartItem[existingItemIndex].newprice += updatedCartItem[existingItemIndex].price;
            setCartItem(updatedCartItem);
            // console.log('find && add');
        } else {

            // console.log('NOT_find ');
            setCartItem([...cartItem, alData]);
        }

    }

    return (

        <section className='min-h-screen  flex flex-col justify-center items-center  px-2 project'>

            <div className=' w-full relative'>
                <div className='w-full absolute top-[40%]  flex justify-between'>
                    <button className='text-xl md:text-2xl z-20 bg-gray-800/50 hover:text-dkText text-white rounded-full p-2' onClick={() => arrowRef.current.slickPrev()}><FaChevronLeft /></button>
                    <button className='text-xl md:text-2xl z-20 bg-gray-800/50 hover:text-dkText text-white rounded-full p-2' onClick={() => arrowRef.current.slickNext()}><FaChevronRight /> </button>
                </div>
                <Slider ref={arrowRef} {...settings}>

                    {
                        data?.map((e) => (
                            <div key={e.id} className='md:w-96 md:p-2 '>
                                <div className="relative w-full  md:mx-0 px-2.5 py-2.5 flex flex-col gap-2.5 border  rounded-xl hover:shadow-sm group min-h-96 ">
                                    <img src={e.img} alt="Image not found" className="rounded-md" />
                                    <div className="absolute top-0 left-0 w-full h-full p-10 flex justify-center items-end gap-2.5 backdrop-blur-sm text-white rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <span className="text-gray-900 bg-primary p-3 rounded-full text-2xl cursor-pointer" onClick={() => frmSubmit(e.id)}>
                                            <FaShoppingCart />
                                        </span>

                                        <span className="text-gray-900 bg-primary p-3 rounded-full text-2xl">
                                            <Link to={`/shop/${e.id}`}>

                                                <FaExternalLinkAlt />
                                            </Link>
                                        </span>
                                    </div>
                                    <div>
                                        <div className="flex justify-between">

                                            <p className="">{e.category}</p>
                                            <Rating value={e.ratings} readonly />
                                        </div>
                                        <h1>{e.name}</h1>
                                        <div className="flex justify-between">
                                            <h1>{e.seller}</h1>
                                            <h1>{e.price}</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>

            </div>

        </section>

    )
}

export default CatagoryAllData