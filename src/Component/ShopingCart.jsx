import React from 'react'
import { contextAPI } from '../App'
import { useContext } from 'react'
import { FaPlus, FaMinus } from "react-icons/fa";
import { useEffect } from 'react';
import { useState } from 'react';
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

    return (
        <div className="min-h-screen p-10 space-y-6">
            {/* top part  */}
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

                    <button className="font-semibold bg-[#3EBFA4] text-white py-2 px-3 duration-500 active:bg-[#278b76] rounded-md">proceed to checkout</button>
                </div>
            </div>
        </div>

    )
}

export default ShopingCart