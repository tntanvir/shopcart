import TopBanner from './TopBanner';
import data from '../products.json';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { FaShoppingCart, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Rating } from '@material-tailwind/react';
import { Typography } from '@material-tailwind/react';
import Pagination from './Pagination';
import { Input } from '@material-tailwind/react';
const Shop = () => {
    const [itm, setItm] = useState(data);
    const [sData, setSdata] = useState(data);
    const [inp, setInp] = useState('');
    const [cpro, setCpro] = useState();
    //--------------------
    const [dataa, setDataa] = useState(data);
    const [bool, setBool] = useState(true);
    const fillterItm = (cata) => {
        if (cata !== "All") {
            const itmm = data.filter(pro => pro.category === cata);
            setDataa(itmm);
            setBool(false);
            console.log(bool)
        }
        else {
            setDataa(data);
            setBool(true);
            console.log(bool)
        }
    }
    //-------------------
    const type = (e) => {
        const txt = e.target.value;
        setInp(txt);
        const itms = data.filter((pro) => pro.name.toLocaleLowerCase().includes(txt.toLocaleLowerCase()))
        setSdata(itms);

    }
    //pagination
    const [crunnt, setCrunnt] = useState(1);
    const parPage = 12;
    const LastParpage = crunnt * parPage;
    const firstParpage = LastParpage - parPage;
    const crunntProduct = itm.slice(firstParpage, LastParpage);
    const pagination = (num) => {
        setCrunnt(num);
    }
    return (
        <div className='min-h-screen'>
            <TopBanner title={"Shop "} />
            <div className='flex justify-around p-3'>
                <div className='w-full flex flex-col justify-start items-center'>
                    <div className="w-11/12 bg-white p-3 shadow-lg rounded-md flex justify-between px-10 items-center">
                        <Typography >showing {firstParpage}-{LastParpage} of {data.length} result </Typography>

                    </div>
                    <div className='flex flex-wrap justify-around gap-2 py-3'>
                        {
                            bool ? crunntProduct.map((e) => (
                                <div key={e.id} className="shadow-md   w-72 rounded-md overflow-hidden flex flex-col justify-start cursor-pointer  ">

                                    <div className="h-64 overflow-hidden relative">
                                        <img src={e.img} alt="" className="hover:scale-110 duration-500 absolute" loading='lazy' />
                                        <div className='absolute flex justify-center items-center w-full h-full backdrop-blur-sm opacity-0 transition-opacity hover:opacity-100 gap-3'>
                                            <span className="text-gray-900 bg-primary p-3 rounded-full text-2xl">
                                                <FaShoppingCart />
                                            </span>
                                            <span className="text-gray-900 bg-primary p-3 rounded-full text-2xl">
                                                <Link to={`/shop/${e.id}`}>

                                                    <FaExternalLinkAlt />
                                                </Link>
                                            </span>

                                        </div>
                                    </div>
                                    <div className="p-5 ">

                                        <div className="flex justify-between">
                                            <h1>{e.category}</h1>
                                            <Rating value={e.ratings} readonly />
                                        </div>
                                        <div>
                                            <h1>{e.name}</h1>
                                        </div>
                                        <div className="flex justify-between">
                                            <h1>{e.seller}</h1>
                                            <h1 className="font-bold"> {e.price}</h1>
                                        </div>
                                    </div>

                                </div>
                            ))
                                :
                                dataa.map((e) => (
                                    <div key={e.id} className="shadow-md   w-72 rounded-md overflow-hidden flex flex-col justify-start cursor-pointer  ">

                                        <div className="h-64 overflow-hidden relative">
                                            <img src={e.img} alt="" className="hover:scale-110 duration-500 absolute" loading='lazy' />
                                            <div className='absolute flex justify-center items-center w-full h-full backdrop-blur-sm opacity-0 transition-opacity hover:opacity-100 gap-3'>
                                                <span className="text-gray-900 bg-primary p-3 rounded-full text-2xl">
                                                    <FaShoppingCart />
                                                </span>
                                                <span className="text-gray-900 bg-primary p-3 rounded-full text-2xl">
                                                    <Link to={`/shop/${e.id}`}>

                                                        <FaExternalLinkAlt />
                                                    </Link>
                                                </span>

                                            </div>
                                        </div>
                                        <div className="p-5 ">

                                            <div className="flex justify-between">
                                                <h1>{e.category}</h1>
                                                <Rating value={e.ratings} readonly />
                                            </div>
                                            <div>
                                                <h1>{e.name}</h1>
                                            </div>
                                            <div className="flex justify-between">
                                                <h1>{e.seller}</h1>
                                                <h1 className="font-bold"> {e.price}</h1>
                                            </div>
                                        </div>

                                    </div>
                                ))

                        }
                    </div>
                    <Pagination
                        parPage={parPage}
                        total={itm.length}
                        pagination={pagination}
                        crunnt={crunnt}
                    />
                </div>
                <div className='border w-1/3 p-1 overflow-y-auto h-[260vh]'>
                    <div className='pb-4'>
                        <div>
                            <Input size="md" label="Search" value={inp} onChange={(e) => type(e)} />
                        </div>
                        <div className=' flex flex-col gap-2 '>
                            {
                                inp && sData.map((e) => (
                                    <Link to={e.id} key={e.id}>
                                        <div className='flex border'>

                                            <img src={e.img} alt="" loading='lazy' width={80} />
                                            <div>
                                                <h3>{e.name}</h3>

                                                <p>${e.price}</p>
                                            </div>
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <h1 className='text-center text-xl'>Category</h1>
                        <div>
                            <ul className="flex flex-wrap gap-1 justify-center items-center">
                                <li onClick={() => fillterItm("All")} className="hover:bg-primary px-5 rounded-md py-1 bg-gray-200 cursor-pointer">All</li>
                                <li onClick={() => fillterItm("Earphones")} className="hover:bg-primary px-5 rounded-md py-1 bg-gray-200 cursor-pointer">Earphones</li>
                                <li onClick={() => fillterItm("Bag")} className="hover:bg-primary px-5 rounded-md py-1 bg-gray-200 cursor-pointer">Bags</li>
                                <li onClick={() => fillterItm("Cap")} className="hover:bg-primary px-5 rounded-md py-1 bg-gray-200 cursor-pointer">Cap</li>
                                <li onClick={() => fillterItm("Men's Sneaker")} className="hover:bg-primary px-5 rounded-md py-1 bg-gray-200 cursor-pointer">Men's Sneaker</li>
                                <li onClick={() => fillterItm("Bottle")} className="hover:bg-primary px-5 rounded-md py-1 bg-gray-200 cursor-pointer">Bottle</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop