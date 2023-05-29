import React, { useContext } from 'react';
import { AllContext } from '../../../App';
import { NavLink } from 'react-router-dom';


function HeroSection() {
    const handleGoToDAOsPage = () => {
        setDashboardTabNum(1);
        setDiscoverTabNum(1);
    }

    const handleGoToBountiesPage = () => {
        setDashboardTabNum(1);
        setDiscoverTabNum(2);
    }
    // context-values --
    const { setDashboardTabNum, setDiscoverTabNum } = useContext(AllContext);


    return (
        <>
            <div className='mb-20 flex flex-col items-center'>
                <div className='px-40  flex flex-col items-center'>
                    <h1 className='mb-3 text-xl text-center font-semibold'>Web3-native project management with token payments, credentialing, bounties</h1>
                    <p className='mb-3 text-sm text-center text-zinc-400'>Create bounties for contributors, let contributors build their web3 profile and pay with your own DAO token.</p>
                </div>


                <div className='mb-16 flex'>
                    <NavLink to='/mainApp' onClick={handleGoToDAOsPage} className='mr-4 px-5 py-1 text-sm font-medium bg-cyan5 border-0 rounded-sm hover:bg-cyan6'>Create Project</NavLink>
                    <NavLink to='/mainApp' onClick={handleGoToBountiesPage} className='px-5 py-1 text-sm font-medium bg-slate6 border-0 rounded-sm hover:bg-slate5'>Explore Bounties</NavLink>
                </div>

                <img
                    src=""
                    alt="instruction video"
                    className='w-[90%] h-[calc(100vh-130px)] bg-slate-600 border-0 rounded-lg '
                />
            </div>
        </>
    )
}

export default HeroSection