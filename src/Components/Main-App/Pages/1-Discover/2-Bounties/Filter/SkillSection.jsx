import React from 'react'

function SkillSection() {
    return (
        <>
            <div>
                <div className='mb-2'>
                    <h1 className='text-[12px] ' >SKILLS</h1>
                    <p className='text-[10px] text-slate-500'>Click on skills to show tasks for</p>
                </div>


                <ul className='w-full flex flex-wrap'>
                    <li className='px-2 py-0.5 mr-1.5 mb-1.5 text-[12px] bg-slate-700 border-0 rounded-sm cursor-pointer tracking-wider ' >Development</li>
                    <li className='px-2 py-0.5 mr-1.5 mb-1.5 text-[12px] bg-slate-700 border-0 rounded-sm cursor-pointer tracking-wider ' >Design</li>
                    <li className='px-2 py-0.5 mr-1.5 mb-1.5 text-[12px] bg-slate-700 border-0 rounded-sm cursor-pointer tracking-wider ' >Translation</li>
                    <li className='px-2 py-0.5 mr-1.5 mb-1.5 text-[12px] bg-slate-700 border-0 rounded-sm cursor-pointer tracking-wider ' >Writing</li>
                    <li className='px-2 py-0.5 mr-1.5 mb-1.5 text-[12px] bg-slate-700 border-0 rounded-sm cursor-pointer tracking-wider ' >Marketing</li>
                    <li className='px-2 py-0.5 mr-1.5 mb-1.5 text-[12px] bg-slate-700 border-0 rounded-sm cursor-pointer tracking-wider ' >Community</li>
                    <li className='px-2 py-0.5 mr-1.5 mb-1.5 text-[12px] bg-slate-700 border-0 rounded-sm cursor-pointer tracking-wider ' >Product</li>
                    <li className='px-2 py-0.5 mr-1.5 mb-1.5 text-[12px] bg-slate-700 border-0 rounded-sm cursor-pointer tracking-wider ' >Research</li>
                    <li className='px-2 py-0.5 mr-1.5 mb-1.5 text-[12px] bg-slate-700 border-0 rounded-sm cursor-pointer tracking-wider ' >Legal</li>
                    <li className='px-2 py-0.5 mr-1.5 mb-1.5 text-[12px] bg-slate-700 border-0 rounded-sm cursor-pointer tracking-wider ' >Operations</li>
                    <li className='px-2 py-0.5 mr-1.5 mb-1.5 text-[12px] bg-slate-700 border-0 rounded-sm cursor-pointer tracking-wider ' >Admin</li>
                    <li className='px-2 py-0.5 mr-1.5 mb-1.5 text-[12px] bg-slate-700 border-0 rounded-sm cursor-pointer tracking-wider ' >Data analytics</li>
                    <li className='px-2 py-0.5 mr-1.5 mb-1.5 text-[12px] bg-slate-700 border-0 rounded-sm cursor-pointer tracking-wider ' >Dune Analytics</li>
                </ul>
            </div>
        </>
    )
}

export default SkillSection;