import React from 'react';
import UserBio from './user-bio/UserBio';
import UserEarnings from './user-earnings/UserEarnings';
import UserWork from './user-work/UserWork';


function ProfilePage() {
    return (
        <>
            <div className='w-full px-20 pt-10 flex justify-between'>
                <div className='w-[30%]'>
                    <div className='mb-2'>
                        <UserBio />
                    </div>

                    <div className='mb-2'>     
                        <UserEarnings />
                    </div>

                    <div className='p-4 text-xs bg-darkbg flex flex-col items-start border-0 rounded-md'>
                    </div>
                </div>


                <div className='w-[68%]'>
                    <UserWork />
                </div>
            </div>
        </>
    )
}

export default ProfilePage;