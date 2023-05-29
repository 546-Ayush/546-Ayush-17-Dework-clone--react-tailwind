import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import { AllContext } from '../../../../../App';
// icons --
import { BsEmojiSmile } from 'react-icons/bs'
import { AiOutlineLock } from 'react-icons/ai'


function Content_2() {
    const handleGoToDAOsPage = () => {
        setDashboardTabNum(1);
        setDiscoverTabNum(1);
    }
    // context-values --
    const { setDashboardTabNum, setDiscoverTabNum } = useContext(AllContext);


    return (
        <>
            <div className='w-full mb-20 flex items-center justify-between'>

                <div className='w-[68%] '>
                    <img
                        src=""
                        alt="Content_2"
                        className='w-full h-[500px] bg-slate-800 border-0 rounded-md'
                    />
                </div>

                <div className='w-[30%] '>
                    <h1 className='mb-3 text-lg font-semibold'>Manage tasks and bounties</h1>
                    <div className='mb-3 flex items-center '>
                        <BsEmojiSmile className='text-3xl mr-2' />
                        <p className=' text-xs text-slate-400'>Clearly communicate your project roadmap and what work needs to be done</p>
                    </div>
                    <div className='mb-3 flex items-center'>
                        <AiOutlineLock className='text-3xl mr-2' />
                        <p className='text-xs text-slate-400'>Share context on ongoing initiatives and make it easy to involve new and existing contributors</p>
                    </div>

                    <NavLink to='/mainApp' onClick={handleGoToDAOsPage} className='mr-4 px-3 py-1 text-sm font-medium bg-cyan5 border-0 rounded-sm hover:bg-cyan6'>Create Project</NavLink>
                </div>

            </div>
        </>
    )
}

export default Content_2;