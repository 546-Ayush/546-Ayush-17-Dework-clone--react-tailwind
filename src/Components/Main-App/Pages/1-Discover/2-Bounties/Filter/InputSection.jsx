import React from 'react';


function InputSection() {
    return (
        <>
            <div className='w-full'>
                <div>
                    <input
                        type="text"
                        placeholder='Search by name..'
                        className='w-full p-1 pl-3 mb-4 bg-transparent border-[1px] border-slate-500 rounded-sm outline-none '
                    />
                </div>


                <div>
                    <p className='text-[12px] '>SORTING</p>
                    <select
                        name="sorting bounty"
                        className='w-full p-1 pl-3 mb-4 bg-transparent border-[1px] border-slate-500 rounded-sm outline-none '
                    >
                        <option className='bg-transparent py-2' value="creation date">Creation date (newest first) </option>
                        <option className='bg-transparent py-2' value="Bounty size">Bounty size (highest) </option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default InputSection;