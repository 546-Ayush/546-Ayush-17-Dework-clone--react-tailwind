import React from 'react';
import BountyFilter from './Filter/BountyFilter';
import BountyCard from './BountyCard';
import { BountyJsondata } from './BountyJsonData';


function BountiesTab() {
    return (
        <>
            <div className='w-full px-20 flex flex-col items-center justify-center'>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-xl' >Open Bounties</h1>
                    <p className='mb-4 text-xs text-slate-400 '>Find and explore tasks and bounties across hundreds of DAOs</p>
                </div>


                <div className='w-full flex items-start justify-between '>
                    <div className='w-[32%] '>
                        <BountyFilter />
                    </div>

                    <div className='w-[65%] '>
                        <h1 className='mb-2 text-sm font-medium'>ALL BOUNTIES</h1>
                        {
                            BountyJsondata.map((obj, id) => (
                                <div key={id} >
                                    <BountyCard logo={obj.logo} companyName={obj.companyName} description={obj.description} price={obj.price} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default BountiesTab;