import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import products from "../products.json";


const ItemDtl = () => {
    const { id } = useParams();
    const [itm, setItm] = useState();
    useEffect(() => {
        const pro = products.find(pr => pr.id === id);
        setItm(pro);
    }, [])
    return (
        <>
            <div className='text-xl '>ItemDtl {id}</div>
            {
                console.log(itm)
            }
        </>
    )
}

export default ItemDtl