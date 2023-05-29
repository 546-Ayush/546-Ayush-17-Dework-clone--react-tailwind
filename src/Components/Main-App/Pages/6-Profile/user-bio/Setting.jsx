import React from 'react';
// icons --
import {RxCross2} from 'react-icons/rx';
import {BsGithub, BsDiscord} from 'react-icons/bs';
import {TbGhost2Filled} from 'react-icons/tb';
import {GrGoogleWallet} from 'react-icons/gr';


function Setting() {
    return (
        <>
            <div className='w-[500px] p-5 text-xs bg-darkbg border-2 border-slate-500 rounded-md '>

                <div className='w-full mb-5 flex items-center justify-between border-b-2 border-slate-500'>
                    <h1>Setting</h1>
                    <RxCross2 />
                </div>

                <div className='mb-3 pb-3 border-b-2 border-slate-400'>
                    <h1>Skills</h1>
                    <p>Select your skills. This is used to show you relevant tasks and find interesting workspaces.</p>

                    <p className='w-full p-4 border-2 border-sm rounded-sm'></p>
                </div>

                <div>
                    
                </div>
            </div>
        </>
    )
}

export default Setting;