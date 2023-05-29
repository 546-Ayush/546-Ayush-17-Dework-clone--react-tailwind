import React, { useContext } from 'react';
import { AllContext } from '../../../../../App';
import ContributorCard from './ContributorCard';
import { ContributorJsonData } from './ContributorJsonData';


function ContributorsTab() {
    // context values --
    const { setDashboardTabNum } = useContext(AllContext);


    return (
        <>
            <div className='w-full px-20 flex flex-col justify-start'>
                <h1 className='mb-2 text-xl'>Contributors </h1>

                <div className='p-2 mb-4 flex items-center justify-between border-[3px] border-darkbg rounded-sm '>
                    <p className='text-xs'>Enable revenue sharing to show up on the contributors page. <span className='ml-1 text-darkbg font-semibold cursor-pointer hover:text-cyan5'>Learn more... </span> </p>
                    <button
                        onClick={() => { setDashboardTabNum(6) }}
                        className='px-8 py-1 text-sm font-medium bg-darkbg border-0 rounded-sm hover:bg-cyan6'
                    >Enable revenue sharing</button>
                </div>


                {/* cards -- */}
                <div className='w-full grid grid-cols-3 gap-3'>
                    {
                        ContributorJsonData.map((obj, id) => (
                            <div key={id}>
                                <ContributorCard logo={obj.logo} contributorName={obj.contributorName} description={obj.description} reputation={obj.reputation} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default ContributorsTab;