import React from 'react';


function BountyCard({ logo, companyName, description, price }) {
    return (
        <>
            <div className='w-full p-2 mb-2 flex items-center justify-between bg-darkbg border-0 rounded-md'>
                <img
                    src={logo}
                    alt="company logo"
                    className='w-12 h-12 bg-slate-600 border-0 rounded-full '
                />


                <div className='w-[62%] '>
                    <h1 className='text-sm' >{companyName} </h1>
                    <p className='text-[12px] text-slate-400 '>{description} </p>
                </div>


                <div className='w-[16%] px-1 py-0.5 text-xs flex items-center bg-lightbg border-0 rounded-sm'>
                    <p> $ {price} ETH </p>
                </div>
            </div>
        </>
    )
}

export default BountyCard;