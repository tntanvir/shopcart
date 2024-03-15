import React from 'react'
import { contextAPI } from '../App'
import { useContext } from 'react'
import { FaPlus, FaMinus } from "react-icons/fa";
import { useEffect } from 'react';
import { useState } from 'react';
import { RiDeleteBin5Line } from "react-icons/ri";
import { Button } from '@material-tailwind/react';
import { useForm } from "react-hook-form";
import { LuShieldClose } from "react-icons/lu";

import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { Input } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
const ShopingCart = () => {
    const { cartItem, setCartItem } = useContext(contextAPI);

    const pluse = (id) => {
        const findIN = cartItem.findIndex(inx => inx.id === id);
        if (findIN !== -1) {
            const update = [...cartItem];
            update[findIN].quantity += 1;
            update[findIN].newprice = update[findIN].price * update[findIN].quantity
            setCartItem(update);
        }
    }
    const minus = (id) => {
        const findIN = cartItem.findIndex(inx => inx.id === id);
        if (findIN !== -1) {
            const update = [...cartItem];
            if (update[findIN].quantity <= 1) {
                update.splice(findIN, 1);
                setCartItem(update);
            } else {

                update[findIN].quantity -= 1;
                update[findIN].newprice = update[findIN].price * update[findIN].quantity
                setCartItem(update);
            }
        }

    }
    const [mysum, setMysum] = useState('');
    useEffect(() => {
        const totalsum = cartItem.reduce((sum, cruIndex) => sum + cruIndex.newprice, 0)
        setMysum(totalsum);
    }, [pluse, minus])

    const delet = (id) => {
        const findIN = cartItem.findIndex(inx => inx.id === id);
        const update = [...cartItem];
        update.splice(findIN, 1);
        setCartItem(update);


    }

    // -------------dilog
    const navigate = useNavigate();

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {

        setOpen(!open);
    }
    const handleO = () => {
        navigate('/payment')
        setOpen(!open);
    }
    // -----from hook---------
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        handleO();
    };
    return (
        <>
            <div className="min-h-screen p-10 space-y-6">
                {/* top part  */}
                {cartItem.length ?
                    <>
                        <div className="flex justify-between items-center">
                            <h4 className="text-xl font-medium text-slate-800 uppercase">order</h4>
                            <p className="text-sm font-medium text-gray-400 uppercase">edit cart</p>
                        </div>
                        <hr />
                        {/*  Cart  map */}
                        <div className=''>

                            {cartItem?.map((item) => (
                                <div key={item?.id} className="flex justify-between items-center border-b pb-6">
                                    <div className="flex flex-wrap items-center gap-4">
                                        <img className="w-[75px] h-[75px] rounded-lg bg-slate-500" src={item.img} alt="card navigate ui" />
                                        <div>
                                            <h5 className="text-lg font-medium">{item?.name}</h5>
                                            <p className="text-sm text-gray-400">price {item?.price}</p>
                                        </div>
                                    </div>
                                    {/* item increase decrees  */}
                                    <div className="flex flex-wrap items-center gap-4 md:gap-10">
                                        <div className="space-x-3 flex">
                                            <span className="py-1 px-2 hover:text-[#3EBFA4] text-xl duration-200 cursor-pointer" onClick={() => minus(item?.id)}>
                                                <FaMinus />
                                            </span>
                                            <span className="py-1 px-2.5 border hover:bg-[#3EBFA4] hover:text-white hover:border-[#3EBFA4] duration-300 ease-in-out rounded-sm">{item?.quantity}</span>
                                            <span className="py-1 px-2 hover:text-[#3EBFA4] text-xl duration-200 cursor-pointer" onClick={() => pluse(item?.id)}>
                                                <FaPlus />
                                            </span>
                                        </div>
                                        <h6 className="text-xl font-medium text-slate-800">{item?.newprice}</h6>
                                        <h6 className="text-xl font-medium text-slate-800 hover:cursor-pointer hover:text-primary duration-150" onClick={() => delet(item?.id)}>
                                            <RiDeleteBin5Line />
                                        </h6>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* calculation part  */}
                        <div className="space-y-10">
                            <div className="flex justify-between items-center py-6">
                                <h5 className="text-xl text-slate-800 capitalize">total Price :</h5>
                                <h4 className="text-xl font-medium text-slate-800">{mysum ? mysum : ''}</h4>
                            </div>
                            <div className='flex justify-center'>

                                <Button className="font-semibold bg-primary text-white py-2 px-3 duration-500  rounded-md" onClick={handleOpen}>proceed to checkout</Button>
                            </div>
                        </div>
                    </>
                    :
                    <div className='flex justify-center items-center'>
                        <img src="/public/empty.png" alt="" srcset="" width={500} />
                    </div>
                }

            </div>

            {/* ----------------- */}
            <Dialog open={open} size='xs'>
                <DialogHeader className='flex justify-between'>
                    <h1>

                        Enter Details Your Self
                    </h1>
                    <div onClick={handleOpen}>
                        <LuShieldClose />
                    </div>
                </DialogHeader>
                <DialogBody className=''>

                    {/* <Input variant="standard" label="Received Location" placeholder='' />
                    <Input variant="standard" label="Standard" placeholder='' />
                <Input variant="standard" label="Standard" placeholder='' /> */}
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5'>
                        <Input variant="standard" label="Phone Number" placeholder='' {...register("Number", { required: true, minLength: 11 })} />
                        {errors.Number && <span>This field is required</span>}

                        <Input variant="standard" label="Location" placeholder='' {...register("Location", { required: true })} />
                        {errors.Location && <span>This field is required</span>}



                        {/* <input defaultValue="test" {...register("example")} />


                        <input {...register("exampleRequired", { required: true })} />
                        {errors.exampleRequired && <span>This field is required</span>} */}

                        <Button variant='' type="submit" >submit</Button>
                    </form>

                </DialogBody>
                {/* <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={handleOpen}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button variant="gradient" color="green" onClick={handleO}>
                        <span>Confirm</span>
                    </Button>
                </DialogFooter> */}
            </Dialog>

        </>


    )
}

export default ShopingCart