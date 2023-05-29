import React from 'react';
import { FaUserFriends } from 'react-icons/fa';


function DaoCard({ logo, companyName, description, members }) {
    return (
        <>
            <div className='w-[700px] p-2 mb-2 flex items-center justify-between bg-darkbg border-0 rounded-md'>
                <img
                    src={logo}
                    alt="company logo"
                    className='w-12 h-12 bg-slate-600 border-0 rounded-full '
                />


                <div className='w-[470px] '>
                    <h1 className='text-sm' >{companyName} </h1>
                    <p className='text-[12px] text-slate-400 '>{description} </p>
                </div>


                <div className='px-1 py-0.5 text-xs flex items-center bg-lightbg border-0 rounded-sm'>
                    <FaUserFriends className='text-inherit mr-1' />
                    <p className='mr-1'>{members} </p>
                    <p> members</p>
                </div>
            </div>
        </>
    )
}

export default DaoCard;