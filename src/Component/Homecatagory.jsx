import React from 'react'
import { Link } from 'react-router-dom';
const subTitle = "Choose Any Products";
const title = "Buy Everything with Us";
const btnText = "Get Started Now";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";

const categoryList = [
    {
        imgUrl: 'src/assets/images/category/01.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'DSLR Camera',
    },
    {
        imgUrl: 'src/assets/images/category/02.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Shoes',
    },
    {
        imgUrl: 'src/assets/images/category/03.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Photography',
    },
    {
        imgUrl: 'src/assets/images/category/04.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Formal Dress',
    },
    {
        imgUrl: 'src/assets/images/category/05.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Colorful Bags',
    },
    {
        imgUrl: 'src/assets/images/category/06.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Home Decor',
    },
]
import { GiShoppingCart } from "react-icons/gi";
import { Button } from '@material-tailwind/react';
export const Homecatagory = () => {
    return (
        <div className='flex flex-col gap-10 justify-center items-center py-5'>
            <div className='pt-14 text-center'>
                <p className='text-2xl text-primary'>{subTitle}</p>
                <h1 className='text-4xl font-bold'>{title}</h1>
            </div>
            <div className='py-4 flex flex-wrap gap-6 justify-evenly items-center'>
                {
                    categoryList.map((e) => (
                        <Card key={e.title}
                            shadow={false}
                            className="relative grid max-h-[16rem] w-full max-w-[24rem] items-end justify-center overflow-hidden text-center hover:cursor-pointer hover:-translate-y-2 duration-300 "
                        >
                            <Link to={"/shop"} >
                                <CardHeader
                                    floated={false}
                                    shadow={false}
                                    color="transparent"
                                    className={`absolute inset-0 m-0 h-full w-full rounded-none  bg-cover bg-center`}
                                    style={{ backgroundImage: `url(${e.imgUrl})` }}
                                >
                                    <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-blue-500 from-5%" />
                                </CardHeader>
                                <CardBody className="relative text-center py-14 px-6 md:px-12  flex flex-col justify-center items-center">
                                    <Typography variant="h5" className="text-3xl text-primary">
                                        {e.title}
                                    </Typography>
                                    <Typography variant="h1" className="text-center text-primary ">
                                        <GiShoppingCart className='text-3xl font-bold text-black text-center bg-primary  rounded-full w-10 h-10' />
                                    </Typography>

                                </CardBody>
                            </Link>
                        </Card>

                    ))
                }
            </div>
            <Button variant='text' className='hover:bg-primary hover:-translate-y-2  border-primary border-2 duration-500 hover:text-white'>{btnText}</Button>
        </div>
    )
}
