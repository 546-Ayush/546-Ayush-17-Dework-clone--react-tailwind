import React, { useContext } from 'react';
import { AllContext } from '../../../../../App';
import { BsCupHotFill } from 'react-icons/bs';


function Contributions() {
    const handleGoToDiscoverPage = () => {
        setDashboardTabNum(1);
        setDiscoverTabNum(1);
    }

    // context values --
    const { setDashboardTabNum, setDiscoverTabNum } = useContext(AllContext);


    return (
        <>
            <div className='w-full p-4 text-xs bg-darkbg flex flex-col items-start border-0 rounded-md'>
                <h1 className='mb-2 text-xs font-semibold' >Contributions</h1>

                <div className='w-full flex flex-col items-center justify-center'>
                    <BsCupHotFill className='p-1.5 mb-2 text-4xl bg-slate-600 border-0 rounded-full' />
                    <p className='text-center mb-2'>No public tasks completed yet!</p>
                </div>

                <div className='w-full flex justify-center'>
                    <button onClick={handleGoToDiscoverPage} className='mr-4 px-3 py-0.5 text-sm font-medium bg-cyan5 border-0 rounded-sm hover:bg-cyan6'>Explore open bounties</button>
                </div>

            </div>
        </>
    )
}

export default Contributions;