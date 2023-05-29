import React from 'react';
import Image from '../../../../assets/Empty_page-5.svg';


function EmptyBookmark() {
    return (
        <>
            <div className='flex flex-col items-center'>
                <h1 className='mb-10 text-3xl' >Bookmarks</h1>

                <img
                    src={Image}
                    alt="Empty Inbox"
                    className='mb-5 bg-transparent w-60'
                />

                <p className='text-xs text-slate-400' >Bookmark a task to make it show up here.</p>

            </div>
        </>
    )
}

export default EmptyBookmark;