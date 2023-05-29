import React, { useContext } from 'react';
import { AllContext } from '../../../../App';


function TaskFeedPage() {
    const { setDashboardTabNum, setDiscoverTabNum } = useContext(AllContext);

    return (
        <>
            <div className='w-full pt-10 flex items-center justify-center'>

                <div className='w-9/12'>
                    <div className='mb-5'>
                        <h1 className='text-xl font-medium'>Your Task Feed</h1>
                        <p className='text-xs text-slate-400'>Recent open tasks from the DAOs you follow, based on your skills</p>
                    </div>

                    <div className='p-2 flex items-center border-[3px] border-darkbg rounded-sm '>
                        <button
                            onClick={() => { setDashboardTabNum(1), setDiscoverTabNum(1) }}
                            className='mr-4 px-8 py-1 text-sm font-medium bg-darkbg border-0 rounded-sm hover:bg-cyan6'
                        >Explore DAOs</button>
                        <p className='text-xs'>Follow at least 1 organization</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default TaskFeedPage;