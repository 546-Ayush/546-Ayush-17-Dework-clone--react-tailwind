import React from 'react'

function OrganizationCards({ logo, heading, paragraph }) {
    return (
        <>
            <div className='w-[300px] h-[136px] mr-8 p-4 flex bg-lightbg border-0 rounded-sm '>
                <p className='mr-4 text-2xl flex items-center'>{logo} </p>

                <div className='items-start'>
                    <h1 className='text-xs font-semibold '>{heading} </h1>
                    <p className='text-xs text-gray-400 ' >{paragraph} </p>
                </div>
            </div>
        </>
    )
}

export default OrganizationCards;