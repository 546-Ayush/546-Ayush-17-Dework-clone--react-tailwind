import React from 'react';
import { AiOutlineQuestionCircle } from 'react-icons/ai';


function ContributorCard({ logo, contributorName, description, reputation }) {
    return (
        <>
            <div className='px-5 py-3 text-xs flex flex-col bg-darkbg border-0 rounded-md'>

                <div className='mb-3 flex items-center'>
                    <img
                        src={logo}
                        alt="company logo"
                        className='w-20 h-9 mr-3 bg-slate-600 border-0 rounded-full '
                    />
                    <div className='w-[470px] '>
                        <h1 className='text-sm' >{contributorName} </h1>
                        <div className='flex items-center'>
                            <p className='text-slate-400 flex items-center'>Reputation: <span className='text-white mx-1.5 '>{reputation} </span> </p>
                            <AiOutlineQuestionCircle className='text-slate-400' />
                        </div>
                    </div>
                </div>

                <p className='text-[12px] text-slate-400 line-clamp-2'>{description} </p>
            </div>
        </>
    )
}

export default ContributorCard;