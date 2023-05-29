import React from 'react';
// icons --
import {HiPencil} from 'react-icons/hi';
import {AiOutlineQuestionCircle} from 'react-icons/ai';


function UserEarnings() {
    return (
        <>
            <div className='p-4 text-xs bg-darkbg flex flex-col items-start border-0 rounded-md'>

                <div className='mb-2'>
                    <h1 className='text-[12px] text-slate-400 flex items-center '>REPUTATION SCORE <AiOutlineQuestionCircle className='ml-2 text-sm'/> </h1>
                    <p>0</p>
                </div>
                <div className='mb-2'>
                    <h1 className='text-[12px] text-slate-400 '>EARNINGS</h1>
                    <p>$0.00</p>
                </div>
                <div className='mb-2'>
                    <h1 className='text-[12px] text-slate-400 flex items-center'>REVENUE SHARE <AiOutlineQuestionCircle className='ml-2 text-sm'/></h1>
                    <p className='flex items-center'>0.00% <HiPencil className='ml-2 text-lg text-white cursor-pointer hover:text-lightbg' /> </p>
                </div>
            </div>
        </>
    )
}

export default UserEarnings;