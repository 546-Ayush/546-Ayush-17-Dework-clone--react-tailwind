import React from 'react';
import { ImHome2 } from 'react-icons/im';
import { MdAdd } from 'react-icons/md';


function Sidebar() {
    return (
        <>
            <div className='py-2 px-1.5 flex flex-col items-center'>

                <div className='mb-2 pb-2 border-b-2 border-white'>
                    <ImHome2 className='p-2 text-4xl bg-darkbg border-0 rounded-full' />
                </div>

                <div>
                    <MdAdd className='p-2 text-black text-3xl bg-white border-0 rounded-full' />
                </div>
            </div>
        </>
    )
}

export default Sidebar;