import React, { useContext } from 'react';
import { AllContext } from '../../../../App';
import clsx from 'clsx';
// icons --
import { HiOutlineSearch } from 'react-icons/hi';
import { RxDashboard } from 'react-icons/rx';
import { BsBell } from 'react-icons/bs';
import { BiBarChartSquare } from 'react-icons/bi';
import { BsJournalBookmark } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';


function DashBody() {
    // context values --
    const { dashboardTabNum, setDashboardTabNum } = useContext(AllContext);


    return (
        <>
            <div className='text-xs flex flex-col'>
                <div
                    onClick={() => setDashboardTabNum(1)}
                    className={clsx('w-full mb-1 pl-2 py-1 flex items-center border-0 rounded-md cursor-pointer hover:bg-lightbg ', (dashboardTabNum === 1) && "bg-lightbg")}
                >
                    <HiOutlineSearch className='mr-1.5 text-inherit text-slate-400 ' />
                    <p>Discover</p>
                </div>
                <div
                    onClick={() => setDashboardTabNum(2)}
                    className={clsx('w-full mb-1 pl-2 py-1 flex items-center border-0 rounded-md cursor-pointer hover:bg-lightbg ', (dashboardTabNum === 2) && "bg-lightbg")}
                >
                    <RxDashboard className='mr-1.5 text-inherit text-slate-400 ' />
                    <p>Task Feed</p>
                </div>
                <div
                    onClick={() => setDashboardTabNum(3)}
                    className={clsx('w-full mb-1 pl-2 py-1 flex items-center border-0 rounded-md cursor-pointer hover:bg-lightbg ', (dashboardTabNum === 3) && "bg-lightbg")}
                >
                    <BsBell className='mr-1.5 text-inherit text-slate-400 ' />
                    <p>Inbox</p>
                </div>
                <div
                    onClick={() => setDashboardTabNum(4)}
                    className={clsx('w-full mb-1 pl-2 py-1 flex items-center border-0 rounded-md cursor-pointer hover:bg-lightbg ', (dashboardTabNum === 4) && "bg-lightbg")}
                >
                    <BiBarChartSquare className='mr-1.5 text-inherit text-slate-400 ' />
                    <p>My Task Board</p>
                </div>
                <div
                    onClick={() => setDashboardTabNum(5)}
                    className={clsx('w-full mb-1 pl-2 py-1 flex items-center border-0 rounded-md cursor-pointer hover:bg-lightbg ', (dashboardTabNum === 5) && "bg-lightbg")}
                >
                    <BsJournalBookmark className='mr-1.5 text-inherit text-slate-400 ' />
                    <p>Bookmarks</p>
                </div>
                <div
                    onClick={() => setDashboardTabNum(6)}
                    className={clsx('w-full mb-1 pl-2 py-1 flex items-center border-0 rounded-md cursor-pointer hover:bg-lightbg ', (dashboardTabNum === 6) && "bg-lightbg")}
                >
                    <AiOutlineUser className='mr-1.5 text-inherit text-slate-400 ' />
                    <p>Profile</p>
                </div>
            </div>
        </>
    )
}

export default DashBody;