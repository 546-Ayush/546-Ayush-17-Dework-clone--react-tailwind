import React, { useState } from 'react';
import clsx from 'clsx';
// tabs --
import ProjectLeaders from './ProjectLeaders-tab/ProjectLeaders';
import Contributors from './Contributor-tab/Contributors';


function InfoTabs() {
    const [currentab, setCurrentTab] = useState(1);
    const displayTabs = (num) => {
        switch (num) {
            case 1:
                return <ProjectLeaders />
            case 2:
                return <Contributors />
            default:
                return <ProjectLeaders />
        }
    }

    return (
        <>
            <div className='w-full flex flex-col items-center justify-center'>
                <div className='mb-10'>
                    <button onClick={() => setCurrentTab(1)} className={clsx('mr-5 px-4 py-1 text-sm font-semibold hover:text-cyan5', (currentab === 1) && "text-cyan5 border-2 border-cyan5 rounded-full")}>For Project Leaders</button>
                    <button onClick={() => setCurrentTab(2)} className={clsx('px-4 py-1 text-sm font-semibold hover:text-cyan5', (currentab === 2) && "text-cyan5 border-2 border-cyan5 rounded-full")}>For Contributors</button>
                </div>

                {displayTabs(currentab)}
            </div>
        </>
    )
}

export default InfoTabs;