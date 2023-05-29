import React from 'react';
import DaoCard from './DaoCard';
import { DaoJsondata } from './DaoJsonData';
import { HiOutlineSearch } from 'react-icons/hi';


function TopDaoTab() {
    return (
        <>
            <div className='flex flex-col items-center'>
                <h1 className='text-xl' >Top DAOs (682)</h1>
                <p className='mb-4 text-xs text-slate-400 '>Find hundreds of web3 DAOs, see their roadmap and explore open bounties and work</p>

                <div className='w-full mb-3 px-2 py-0.5 flex items-center border-2 border-white rounded-sm '>
                    <HiOutlineSearch className='mr-2 text-md text-white ' />
                    <input
                        type="text"
                        placeholder='Search DAOs...'
                        className='w-full text-white text-sm bg-transparent outline-none'
                    />
                </div>

                {
                    DaoJsondata.map((obj, id) => (
                        <div key={id}>
                            <DaoCard logo={obj.logo} companyName={obj.companyName} description={obj.description} members={obj.members} />
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default TopDaoTab;