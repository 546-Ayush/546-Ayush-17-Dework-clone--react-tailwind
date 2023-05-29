import React from 'react';
import EmptyInbox from './EmptyInbox';


function InboxPage() {
    return (
        <>
            <div className='w-full pt-10 flex justify-center '>
                <EmptyInbox />
            </div>
        </>
    )
}

export default InboxPage;