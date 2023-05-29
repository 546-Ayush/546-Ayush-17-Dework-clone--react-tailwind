import React from 'react';
import Features from './Features';
import Contributions from './Contributions';


function UserWork() {
    return (
        <>
            <div className='w-full flex flex-col'>
                <div className='mb-2'>
                    <Features />
                </div>

                <div>
                    <Contributions />
                </div>
            </div>
        </>
    )
}

export default UserWork;