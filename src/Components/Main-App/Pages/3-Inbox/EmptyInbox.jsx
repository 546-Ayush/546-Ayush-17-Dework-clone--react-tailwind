import React from 'react';
import Image from '../../../../assets/Empty_page-9.svg';


function EmptyInbox() {
    return (
        <>
            <div className='flex flex-col items-center'>
                <h1 className='mb-10 text-3xl' >Inbox</h1>

                <img
                    src={Image}
                    alt="Empty Inbox"
                    className='mb-5 bg-transparent w-60'
                />

                <p className='text-xs text-slate-400' >You're all caught up.</p>

            </div>
        </>
    )
}

export default EmptyInbox;