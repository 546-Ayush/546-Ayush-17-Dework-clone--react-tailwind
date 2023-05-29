import React from 'react';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { BiSpreadsheet } from 'react-icons/bi';
import { AiOutlineSetting } from 'react-icons/ai';
import { BsBell } from 'react-icons/bs';


function DashFooter() {
    return (
        <>
            <div>
                <div className='mb-2 py-1 text-xs flex flex-col border-y-[1px] border-white'>
                    <div className='w-full mb-1 pl-2 py-1 flex items-center border-0 rounded-md cursor-pointer hover:bg-lightbg '>
                        <AiOutlineQuestionCircle className='mr-1.5 text-inherit text-slate-400 ' />
                        <p>Ask a question</p>
                    </div>
                    <div className='w-full mb-1 pl-2 py-1 flex items-center border-0 rounded-md cursor-pointer hover:bg-lightbg '>
                        <AiOutlineMail className='mr-1.5 text-inherit text-slate-400 ' />
                        <p>Give us feedback</p>
                    </div>
                    <div className='w-full mb-1 pl-2 py-1 flex items-center border-0 rounded-md cursor-pointer hover:bg-lightbg '>
                        <BiSpreadsheet className='mr-1.5 text-inherit text-slate-400 ' />
                        <p>Read our docs</p>
                    </div>
                </div>


                <div className='text-xs flex items-center justify-between'>
                    <div className='flex items-center'>
                        <h1 className='px-2 py-1 mr-2 text-md font-semibold bg-lightbg border-0 rounded-full'>U</h1>
                        <div>
                            <p>User </p>
                            <p className='text-[10px] text-orange-500 '>Connect wallet</p>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <AiOutlineSetting className='p-1 text-xl border-0 rounded-md cursor-pointer hover:text-darkbg hover:bg-white ' />
                        <BsBell className='p-1 text-xl border-0 rounded-md cursor-pointer hover:text-darkbg hover:bg-white ' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashFooter;