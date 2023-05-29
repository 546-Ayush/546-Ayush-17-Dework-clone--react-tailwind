import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AllContext } from '../../../../../App';
// icons --
import { AiOutlineWallet } from 'react-icons/ai'
import { BsShieldCheck } from 'react-icons/bs'


function Content_2() {
    const handleGoToBountiesPage = () => {
        setDashboardTabNum(1);
        setDiscoverTabNum(2);
    }
    // context-values --
    const { setDashboardTabNum, setDiscoverTabNum } = useContext(AllContext);

    return (
        <>
            <div className='w-full mb-20 flex items-center justify-between'>

                <div className='w-[68%] '>
                    <img
                        src=""
                        alt="Content_2"
                        className='w-full h-[500px] bg-slate-800 border-0 rounded-md'
                    />
                </div>

                <div className='w-[30%] '>
                    <h1 className='mb-3 text-lg font-semibold'> Get paid and build your on-chain CV</h1>
                    <div className='mb-3 flex items-center '>
                        <AiOutlineWallet className='text-2xl mr-2' />
                        <p className=' text-xs text-slate-400'>Get paid directly to your wallet after completing a task</p>
                    </div>
                    <div className='mb-3 flex items-center'>
                        <BsShieldCheck className='text-xl mr-2' />
                        <p className='text-xs text-slate-400'>Tasks you complete are stored on-chain</p>
                    </div>

                    <NavLink to='/mainApp' onClick={handleGoToBountiesPage} className='mr-4 px-3 py-1 text-sm font-medium bg-cyan5 border-0 rounded-sm hover:bg-cyan6'>Explore Bounties</NavLink>
                </div>

            </div>
        </>
    )
}

export default Content_2;