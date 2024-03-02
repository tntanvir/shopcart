import React from 'react'
import Hero from './Hero'
import { Homecatagory } from './Homecatagory'
import Homeshowcase from './Homeshowcase'

const Home = () => {
    return (
        <div>
            <Hero />
            <Homecatagory />
            <Homeshowcase />
        </div>
    )
}

export default Home