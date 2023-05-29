import React, { useContext } from 'react';
import { AllContext } from '../../../App';
import { NavLink } from 'react-router-dom';
// icons --
import { BsDiscord } from 'react-icons/bs';
import { GiTwirlyFlower } from 'react-icons/gi'


function LandingNavbar() {
    const handleGoToDAOsPage = () => {
        setDashboardTabNum(1);
        setDiscoverTabNum(1);
    }
    // context-values --
    const { setDashboardTabNum, setDiscoverTabNum } = useContext(AllContext);


    return (
        <>
            <div className='px-28 py-3 flex items-center justify-between'>

                <div className='flex items-center'>
                    <GiTwirlyFlower className='mr-1 text-xl ' />
                    <h1 className='text-md font-semibold'>Dework</h1>
                </div>


                <div className='flex items-center'>
                    <div className='px-2 py-1 mr-2 border-0 rounded-md cursor-pointer flex items-center hover:bg-zinc-700 '>
                        <BsDiscord className='mr-1 text-md' />
                        <p className='text-xs font-semibold'>Discord</p>
                    </div>
                    <NavLink to='./mainApp' onClick={handleGoToDAOsPage} className='px-3 py-1 bg-cyan5 border-0 rounded-md text-sm font-semibold hover:bg-cyan6'>Open App</NavLink>
                </div>
            </div>
        </>
    )
}

export default LandingNavbar;