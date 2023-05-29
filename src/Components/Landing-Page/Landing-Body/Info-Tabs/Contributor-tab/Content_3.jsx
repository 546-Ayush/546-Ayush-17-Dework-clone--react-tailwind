import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AllContext } from '../../../../../App';
// icons --
import { BsBell } from 'react-icons/bs';
import { MdOutlineInsertChartOutlined } from 'react-icons/md';


function Content_3() {
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
                    <h1 className='mb-3 text-lg font-semibold'> Track everything in one place</h1>
                    <div className='mb-3 flex items-center '>
                        <BsBell className='text-xl mr-2' />
                        <p className=' text-xs text-slate-400'>Stay up to date with new opportunities in your task feed</p>
                    </div>
                    <div className='mb-3 flex items-center'>
                        <MdOutlineInsertChartOutlined className='text-xl mr-2' />
                        <p className='text-xs text-slate-400'>All your tasks in your task board</p>
                    </div>

                    <NavLink to='/mainApp' onClick={handleGoToBountiesPage} className='mr-4 px-3 py-1 text-sm font-medium bg-cyan5 border-0 rounded-sm hover:bg-cyan6'>Explore Bounties</NavLink>
                </div>


                <div className='w-[68%] '>
                    <img
                        src=""
                        alt="Content_3"
                        className='w-full h-[500px] bg-slate-800 border-0 rounded-md'
                    />
                </div>

            </div>
        </>
    )
}

export default Content_3;