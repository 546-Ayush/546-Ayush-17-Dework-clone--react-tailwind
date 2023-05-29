import React from 'react';
import { MdOutlineAddCircleOutline } from 'react-icons/md';


function Features() {
    return (
        <>
            <div className='w-full p-4 text-xs bg-darkbg flex flex-col items-start border-0 rounded-md'>
                <h1 className='mb-2 text-xs font-semibold' >Featured Work</h1>

                <div className='w-40 h-44 px-5 flex flex-col items-center justify-center border-4 border-slate-400 border-dashed rounded-md cursor-pointer'>
                    <MdOutlineAddCircleOutline className='mb-2 text-4xl text-slate-400' />
                    <p className='text-center text-slate-400'>Feature work to show your experience</p>
                </div>
            </div>
        </>
    )
}

export default Features;