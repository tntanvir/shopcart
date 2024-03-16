import { Button } from "@material-tailwind/react";
import { CgShoppingCart } from "react-icons/cg";
import { TbCurrencyTaka } from "react-icons/tb";
import { FaPhone } from "react-icons/fa6";
import { useState } from "react";
import { useContext } from "react";
import { contextAPI } from "../App";
import { useEffect } from "react";
import {  useNavigate } from 'react-router-dom';
const Payment = () => {
    const { cartItem, setCartItem } = useContext(contextAPI);
    
   const [number, setNumber] = useState('')
   const [code, setCode] = useState('')
   const [pin, setPin] = useState('')
   
   const [cnt,setCnt]=useState(0);
   const navigate = useNavigate();
    const confr=()=>{
        
        if (cnt<2) {
            setCnt(cnt+1);
        } else {
            
            console.log(
                {
                    "number":  number,
                    "code": code,
                    "pin":pin
                }
            )
            setNumber('');
            setCode('');
            setPin('');
            setCnt(0);
            setCartItem([]);
            navigate('/');

        }
    }
    const [mysum, setMysum] = useState('');
    useEffect(() => {
        const totalsum = cartItem.reduce((sum, cruIndex) => sum + cruIndex.newprice, 0)
        setMysum(totalsum);
    }, [])

    return (
        <div className="h-screen">

            <div className="max-w-md mx-auto  bg-white shadow-lg rounded-lg">
                <div className="flex flex-col gap-4   pb-5">

                    <div className="p-5">
                        <img src="/bkash_payment_logo.png" alt=""  />
                    </div>
                    <div className="bg-pink-500 h-2">
                    </div>
                    <div className="flex justify-between items-center px-7">
                        <div className="flex gap-2 ">

                            <div >
                                <CgShoppingCart className="text-2xl  w-10 h-10 rounded-full p-1.5 border" />
                            </div>
                            <div>
                                <h3 className="font-semibold">Edukon Shop</h3>
                                <p className="text-gray-600">Invoice:1312</p>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-3xl flex justify-center items-center"><TbCurrencyTaka />{mysum}</h1>
                        </div>

                    </div>
                </div>
                <div className="h-40 bg-pink-500 text-white flex flex-col gap-3 items-center justify-center py-28">
                    <h1>Your bKash Account number</h1>
                    
                    {cnt===0 && <input type="text" value={number} placeholder="e.g 01XXXXXXXXX" className="text-black w-2/3 py-1.5 placeholder:text-center text-center outline-none" onChange={(e)=>setNumber(e.target.value)} />}
                    {cnt===1 && <input type="text" value={code} placeholder="code" className="text-black w-2/3 py-1.5 placeholder:text-center text-center outline-none" onChange={(e)=>setCode(e.target.value)}/>}
                    {cnt===2 && <input type="text" value={pin} placeholder="PIN" className="text-black w-2/3 py-1.5 placeholder:text-center text-center outline-none" onChange={(e)=>setPin(e.target.value)}/>}

                    <p className="text-sm justify-center">By clicking on <span className="font-semibold">Confirm,</span> you are agreeing to the <a href="" className="underline font-semibold">terms & conditions</a></p>
                </div>
                <div className="">
                    <Button className="rounded-none w-1/2 border-r border-black bg-blue-gray-200 hover:shadow-none shadow-none">CLOSE</Button>
                    <Button className="rounded-none w-1/2 bg-blue-gray-200 text-black hover:shadow-none shadow-none" onClick={()=>confr()}>CONFIRM</Button>
                </div>
                <div className="h-12  flex gap-2 justify-center items-center">
                    <h1 className="bg-pink-500 h-10 w-10 rounded-full flex text-white justify-center items-center" >
                        <FaPhone />
                    </h1>
                    <h1 className="text-pink-500 text-2xl">16247</h1>
                </div>

            </div>
        </div>

    );
};

export default Payment;
