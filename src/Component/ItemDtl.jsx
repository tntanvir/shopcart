import { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom'
import products from "../products.json";
import { Select, Option, Rating, Input, Button } from "@material-tailwind/react";
import { TiPlus, TiMinus } from "react-icons/ti";
import CatagoryAllData from './CatagoryAllData';
import Itemreviwe from './Itemreviwe';
import { contextAPI } from '../App';

const ItemDtl = () => {
    const { id } = useParams();
    const [itm, setItm] = useState([]);
    const [tm, setTm] = useState('');
    const [cta, setCata] = useState('');

    const [selSize, setSize] = useState("M");
    const [selCol, setCol] = useState("Black");
    const [cont, setCont] = useState('');
    const [code, setCode] = useState('');

    const [cartItem, setCartItem] = useContext(contextAPI);







    useEffect(() => {
        const pro = products.find(pr => pr.id === id);
        setItm(pro);
        setTm(pro.ratings);
        setCata(pro.category);
        setCont(1);
        // console.log(pro)
    }, [id])

    const frmSubmit = () => {
        const alData = {
            ...itm, size: selSize, color: selCol, quantity: cont, discout: code, newprice: itm.price * cont
        }

        const existingItemIndex = cartItem.findIndex(item => item.id === id);

        if (existingItemIndex !== -1) {

            const updatedCartItem = [...cartItem];
            updatedCartItem[existingItemIndex].quantity += cont;
            setCartItem(updatedCartItem);
        } else {

            setCartItem([...cartItem, alData]);
        }
    }


    return (
        <div className='min-h-screen flex flex-col gap-10 p-5'>
            {
                itm && (
                    <div className='flex justify-evenly mb-10'>
                        <div className='w-1/3'>
                            <img src={itm.img} alt="" className='rounded-xl' />
                        </div>
                        <div className='w-3/5 flex flex-col gap-3'>
                            <h1 className='text-3xl'>{itm.name}</h1>
                            <div className='flex gap-3'>

                                {tm && <Rating value={tm} readonly />}
                                <p className='text-gray-600 font-bold'>({itm.ratingsCount} reviwe)</p>
                            </div>
                            <h1 className='text-2xl font-bold'>${itm.price}</h1>
                            <p>{itm.seller}</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo blanditiis error nihil perspiciatis exercitationem atque odio nam debitis facilis unde, optio magni est rem dolor officiis, eos minus dicta voluptatum!</p>

                            <div className='w-full flex gap-4'>

                                <Select
                                    label="Select Size"
                                    name='size'
                                    value={selSize}
                                    onChange={(e) => setSize(e)}
                                >
                                    <Option value="M">M</Option>
                                    <Option value="L">L</Option>
                                    <Option value="XL">XL</Option>
                                    <Option value="LG">LG</Option>
                                    <Option value="XXL">XXL</Option>
                                </Select>
                                <Select
                                    label="Select Color"
                                    value={selCol}
                                    onChange={(e) => setCol(e)}
                                >
                                    <Option value="Black">Black</Option>
                                    <Option value="Blue">Blue</Option>
                                    <Option value="Red">Red</Option>
                                    <Option value="Gray">Gray</Option>
                                    <Option value="White">White</Option>
                                </Select>
                            </div>
                            <div className='flex gap-5'>

                                <div className=' flex w-fit gap-4'>
                                    <div className='border p-3 font-bold cursor-pointer text-xl flex justify-center items-center hover:bg-primary duration-100' onClick={() => setCont(cont != 1 ? cont - 1 : cont)}>
                                        <TiMinus />
                                    </div>
                                    <div className='border w-12 p-3 font-bold cursor-pointer text-xl flex justify-center items-center' >{cont}</div>
                                    <div className='border p-3 font-bold cursor-pointer text-xl flex justify-center items-center hover:bg-primary' onClick={() => setCont(cont + 1)} >
                                        <TiPlus />
                                    </div>
                                </div>
                                <div>
                                    <Input value={code} onChange={(e) => setCode(e.target.value)} variant='standard' label="Discound Code" placeholder='Discound Code' />
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <Button onClick={() => frmSubmit()}>Add to Cart</Button>
                                <Link to={"/shop/cart"}>

                                    <Button>Check OUt</Button>
                                </Link>
                            </div>

                        </div>
                    </div>
                )
            }
            <div>
                {itm && <Itemreviwe url={itm.img} />}
            </div>
            {cta && <CatagoryAllData cta={cta} id={id} />}
        </div >
    )
}

export default ItemDtl