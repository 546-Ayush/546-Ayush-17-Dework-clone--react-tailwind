import React from 'react';
import InputSection from './InputSection';
import SkillSection from './SkillSection';


function BountyFilter() {
    return (
        <>
            <div className='w-full p-3 text-xs bg-darkbg border-0 rounded-sm '>
                <h1 className='mb-4 pb-2 border-b-[1px] border-slate-500 '>Filter</h1>

                <div>
                    <InputSection />
                </div>

                <div>
                    <SkillSection />
                </div>
            </div>
        </>
    )
}

export default BountyFilter;