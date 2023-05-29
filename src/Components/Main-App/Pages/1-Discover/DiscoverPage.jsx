import React, { useContext } from 'react';
import clsx from 'clsx';
import { AllContext } from '../../../../App';
// tabs --
import TopDaoTab from './1-Top-DAOs/TopDaoTab';
import BountiesTab from './2-Bounties/BountiesTab';
import ContributorsTab from './3-Contributors/ContributorsTab';


function DiscoverPage() {
    const displayTabs = (num) => {
        switch (num) {
            case 1:
                return <TopDaoTab />
            case 2:
                return <BountiesTab />
            case 3:
                return <ContributorsTab />
            default:
                return <TopDaoTab />
        }
    }

    // context values --
    const { discoverTabNum, setDiscoverTabNum } = useContext(AllContext);


    return (
        <>
            <div className='w-full pt-10 flex flex-col justify-center relative'>
                <div className='pb-2 mb-5 flex justify-center bg-lightbg border-b-2 border-white  sticky top-0 left-0'>
                    <button
                        onClick={() => setDiscoverTabNum(1)}
                        className={clsx('mr-5 text-sm text-darkbg font-semibold ', (discoverTabNum === 1) && "text-xl font-semibold border-b-[3px] border-white")}
                    >Top DAOs</button>
                    <button
                        onClick={() => setDiscoverTabNum(2)}
                        className={clsx('mr-5 text-sm text-darkbg font-semibold ', (discoverTabNum === 2) && "text-xl font-semibold border-b-[3px] border-white")}
                    >Bounties</button>
                    <button
                        onClick={() => setDiscoverTabNum(3)}
                        className={clsx('mr-5 text-sm text-darkbg font-semibold ', (discoverTabNum === 3) && "text-xl font-semibold border-b-[3px] border-white")}
                    >Contirbutors</button>
                </div>


                <div className='w-full flex justify-center'>
                    {
                        displayTabs(discoverTabNum)
                    }
                </div>
            </div>
        </>
    )
}

export default DiscoverPage;