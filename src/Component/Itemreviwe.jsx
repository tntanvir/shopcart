import { Rating } from '@material-tailwind/react';
import { Button, Tab, Tabs, TabsHeader } from '@material-tailwind/react';
import React from 'react'
import { useState } from 'react';
import ShortBlog from './ShortBlog';

let ReviewList = [
    {
        imgUrl: "/src/assets/images/instructor/01.jpg",
        imgAlt: "Client thumb",
        name: "Ganelon Boileau",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
        imgUrl: "/src/assets/images/instructor/02.jpg",
        imgAlt: "Client thumb",
        name: "Morgana Cailot",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
        imgUrl: "/src/assets/images/instructor/03.jpg",
        imgAlt: "Client thumb",
        name: "Telford Bois",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
        imgUrl: "/src/assets/images/instructor/04.jpg",
        imgAlt: "Client thumb",
        name: "Cher Daviau",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
];

const Itemreviwe = ({ url }) => {
    const [bol, setBol] = useState(true);
    return (
        <div className='p-3 flex flex-col gap-10 '>
            <div className='w-96'>
                <Tabs value="Reviwe">
                    <TabsHeader>
                        <Tab value={"Reviwe"} onClick={() => setBol(true)} >
                            <h1>Reviwe</h1>
                        </Tab>
                        <Tab value={"Details"} onClick={() => setBol(false)}>
                            <h1>Details</h1>
                        </Tab>
                    </TabsHeader>
                </Tabs>
            </div>
            <div className='flex  gap-2'>
                <div className='w-3/4 '>
                    {
                        bol ?
                            <div className=' flex flex-col gap-1.5'>
                                {
                                    ReviewList?.map((e, i) => (
                                        <div key={i} className='flex justify-center gap-10 rounded-md border p-1'>
                                            <div className='flex justify-center items-center'>

                                                <img src={e.imgUrl} alt={e.imgAlt} className='bg-black rounded-full' width={50} />
                                            </div>
                                            <div className='w-10/12 flex justify-center flex-col gap-2'>

                                                <div className='flex justify-between'>
                                                    <div className='flex gap-9'>
                                                        <h1>{e.name}</h1>
                                                        <h1>{e.date}</h1>
                                                    </div>

                                                    <div>

                                                        <Rating value={5} readonly />
                                                    </div>
                                                </div>
                                                <div>
                                                    <p>{e.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            :
                            <div>
                                <div className='  p-8 shadow-xl rounded'>

                                    <p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum explicabo nostrum pariatur quasi dolorem illo, distinctio deserunt voluptas accusantium dicta doloremque quo debitis tenetur aliquam modi consectetur consequuntur sit laborum blanditiis, corrupti ratione eaque magnam! Eligendi accusantium aperiam ad vitae veritatis numquam? Distinctio voluptatum, asperiores doloremque eius debitis, quo quod fugiat dolore unde assumenda iusto quaerat consequatur pariatur ipsum! Laboriosam?</p>
                                    <div className='flex justify-between p-4 items-center'>

                                        <ul className='flex flex-col gap-3'>
                                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quo?</li>
                                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quo?</li>
                                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quo?</li>
                                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quo?</li>
                                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quo?</li>
                                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quo?</li>
                                        </ul>
                                        <div><img src={url} alt="" srcset="" width={300} className='rounded-md' /></div>
                                    </div>
                                    <p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente reprehenderit illum voluptate voluptatum facere provident accusamus maxime? Natus quaerat minus aut reiciendis.Sapiente reprehenderit illum voluptate voluptatum facere provident accusamus maxime? Natus quaerat minus aut reiciendisSapiente reprehenderit illum voluptate voluptatum facere provident accusamus maxime? Natus quaerat minus aut reiciendis</p>

                                </div>
                            </div>
                    }
                </div>
                <div className=' '>
                    <ShortBlog />
                </div>
            </div>
        </div>
    )
}

export default Itemreviwe