import React, { useState } from 'react';
import EditUserInfo from './EditUserInfo';
import { BsDiscord } from 'react-icons/bs';


function UserBio() {
    const { showEditUserInfo, setShowEditUserInfo } = useState(true);
    const handleEditUserInfo = () => {
        console.log("clicked");
        // setShowEditUserInfo(!showEditUserInfo);
    }

    return (
        <>
            <div className='p-4 bg-darkbg flex flex-col items-center border-0 rounded-md'>
                <div className='flex flex-col items-center'>
                    <h1 className='px-7 py-5 mb-2 text-2xl bg-lightbg flex items-center justify-center border-0 rounded-full'>U</h1>
                    <p className='text-md font-semibold'>User name</p>
                    <p className='mb-2 text-xs text-slate-400'>No bio...</p>
                    <BsDiscord className='p-1 mb-10 text-2xl bg-slate-600 cursor-pointer border-0 rounded-full hover:bg-slate-700' />
                </div>


                <div className='w-full flex flex-col'>
                    {
                        showEditUserInfo
                            ? <EditUserInfo clickEvent={handleEditUserInfo} />
                            : <button onClick={handleEditUserInfo} className='w-full mb-2 py-0.5 text-sm bg-slate-600 border-0 rounded-sm hover:bg-slate-500 '>Edit Profile</button>
                    }
                    <button className='w-full py-0.5 text-sm bg-slate-600 border-0 rounded-sm hover:bg-slate-500 '>Setting</button>
                </div>

                <div className='w-full mt-5'>

                </div>
            </div>
        </>
    )
}

export default UserBio;