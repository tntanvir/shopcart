import { Button } from '@material-tailwind/react'
import React from 'react'

const MapLocation = () => {
    return (
        <div className='mLocation h-screen flex justify-center items-center flex-col gap-10'>
            <div className='text-center text-wrap flex justify-center items-center flex-col gap-10'>
                <Button className='border-primary px-24 text-xl bg-transparent text-black border'>Shop Now</Button>
                <h1 className='text-3xl font-semibold'>Shop Anytime,Anywhere</h1>
                <p className='w-2/3 '>Take courses on your any device with out app & learn all time what you want.Just download & install & start to learn</p>
                <div className='flex justify-between gap-4'>
                    <img src="/src/assets/images/app/01.jpg" alt="" className='
                    cursor-pointer'/>
                    <img src="/src/assets/images/app/02.jpg" alt="" className='
                    cursor-pointer'/>
                </div>
            </div>
        </div>
    )
}

export default MapLocation