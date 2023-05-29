import React from 'react';
import { MdKeyboardDoubleArrowLeft } from 'react-icons/md';


function DashNavbar() {
    return (
        <>
            <div className='mb-4 text-xs flex items-center justify-between'>

                <div className='flex items-center'>
                    <h1 className='px-2 py-1 mr-2 text-md font-semibold bg-lightbg border-0 rounded-full'>U</h1>
                    <p>Home</p>
                </div>

                <MdKeyboardDoubleArrowLeft className='p-0.5 text-xl border-0 rounded-md cursor-pointer hover:text-darkbg hover:bg-white ' />

            </div>
        </>
    )
}

export default DashNavbar;