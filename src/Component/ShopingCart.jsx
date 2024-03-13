import React from 'react'
import { contextAPI } from '../App'
import { useContext } from 'react'
const ShopingCart = () => {
    const [cartItem, setCartItem] = useContext(contextAPI);
    return (
        <div className='min-h-screen'>
            {
                cartItem && cartItem.map((e) => (
                    <div key={e.id}>
                        <div>
                            <img src={e.img} alt="" width={100} />
                        </div>
                        <div>
                            <p>{e.quantity}</p>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default ShopingCart