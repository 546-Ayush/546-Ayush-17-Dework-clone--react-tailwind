import React from 'react';
import { BsDiscord, BsTwitter } from 'react-icons/bs'


function Footer() {
    return (
        <>
            <div className='pt-10 pb-4 flex flex-col items-center'>
                <h1 className='mb-1 text-xl font-medium'>See how Dework can help your DAO </h1>

                <div className='mb-16 flex items-center'>
                    <button className='mr-4 px-10 py-1 text-sm font-medium bg-cyan5 border-0 rounded-sm hover:bg-cyan6'>Schedule a Demo</button>
                    <div className='w-fit px-10 py-1 text-sm flex items-center bg-slate-700 border-0 rounded-sm hover:bg-slate5'>
                        <BsDiscord className='mr-2 text-inherit' />
                        <button className=' font-medium '>Join our Discord</button>
                    </div>
                </div>


                <div className=''>
                    <p className='mb-2 text-xs ' >Have questions or feedback? Reach out on Twitter or Discord</p>
                    <div className='flex items-center justify-center'>
                        <BsTwitter className='p-1.5 mr-2 text-2xl bg-slate-800 border-0 rounded-full cursor-pointer' />
                        <BsDiscord className='p-1.5 text-2xl bg-slate-800 border-0 rounded-full cursor-pointer' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;