import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import products from "../products.json";
import { Rating } from '@material-tailwind/react';
import { Select, Option } from "@material-tailwind/react";
import { Input } from '@material-tailwind/react';
import { TiPlus, TiMinus } from "react-icons/ti";
import { Button } from '@material-tailwind/react';
import CatagoryAllData from './CatagoryAllData';
const ItemDtl = () => {
    const { id } = useParams();
    const [itm, setItm] = useState([]);
    const [tm, setTm] = useState('');
    const [cta, setCata] = useState('');

    const [selSize, setSize] = useState("M");
    const [selCol, setCol] = useState("Black");
    const [cont, setCont] = useState('');
    useEffect(() => {
        const pro = products.find(pr => pr.id === id);
        setItm(pro);
        setTm(pro.ratings);
        setCata(pro.category);
        setCont(1);
        // console.log(pro)
    }, [id])

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
                                    value={selSize}
                                    onChange={(val) => setSize(val)}
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
                                    <Input variant='standard' label="Discound Code" placeholder='Discound Code' />
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <Button>Add to Cart</Button>
                                <Button>Check OUt</Button>
                            </div>

                        </div>
                    </div>
                )
            }
            {cta && <CatagoryAllData cta={cta} id={id} />}
        </div >
    )
}

export default ItemDtl