import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const RendomImg = () => {
    const [randomImageUrl, setRandomImageUrl] = useState('');

    useEffect(() => {
        // Function to fetch a random image URL
        const fetchRandomImage = async () => {
            try {
                const response = await fetch('https://source.unsplash.com/random');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const imageUrl = response.url;
                setRandomImageUrl(imageUrl);
            } catch (error) {
                console.error('Error fetching random image:', error);
            }
        };

        // Call the function to fetch a random image URL when the component mounts
        fetchRandomImage();
    }, []);

    return (
        <div>
            {
                randomImageUrl && <img src={randomImageUrl} alt="" width={70} loading='lazy' />
            }
        </div>
    )
}

export default RendomImg