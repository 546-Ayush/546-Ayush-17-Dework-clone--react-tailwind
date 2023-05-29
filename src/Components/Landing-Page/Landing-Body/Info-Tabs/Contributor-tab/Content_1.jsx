import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AllContext } from '../../../../../App';
// icons --
import { HiOutlineSearch } from 'react-icons/hi';
import { AiOutlineTrophy } from 'react-icons/ai';


function Content_1() {
    const handleGoToBountiesPage = () => {
        setDashboardTabNum(1);
        setDiscoverTabNum(2);
    }
    // context-values --
    const { setDashboardTabNum, setDiscoverTabNum } = useContext(AllContext);

    return (
        <>
            <div className='w-full mb-20 flex items-center justify-between'>

                <div className='w-[30%] '>
                    <h1 className='mb-3 text-lg font-semibold'>The easiest way to contribute</h1>
                    <div className='mb-3 flex items-center '>
                        <HiOutlineSearch className='text-3xl mr-2' />
                        <p className=' text-xs text-slate-400'>Find bounties and projects in 100s of DAOs in our global bounty board</p>
                    </div>
                    <div className='mb-3 flex items-center'>
                        <AiOutlineTrophy className='text-xl mr-2' />
                        <p className='text-xs text-slate-400'>Apply to tasks or submit contest bounties</p>
                    </div>

                    <NavLink to='/mainApp' onClick={handleGoToBountiesPage} className='mr-4 px-3 py-1 text-sm font-medium bg-cyan5 border-0 rounded-sm hover:bg-cyan6'>Explore Bounties</NavLink>
                </div>


                <div className='w-[68%] '>
                    <img
                        src=""
                        alt="Content_1"
                        className='w-full h-[500px] bg-slate-800 border-0 rounded-md'
                    />
                </div>

            </div>
        </>
    )
}

export default Content_1;