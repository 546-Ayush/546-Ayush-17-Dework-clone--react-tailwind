import React, { useContext } from 'react';
import { AllContext } from '../../../App';
// pages --
import DiscoverPage from './1-Discover/DiscoverPage';
import TaskFeedPage from './2-TaskFeed/TaskFeedPage';
import InboxPage from './3-Inbox/InboxPage';
import MyTaskBoardPage from './4-My-task-board/MyTaskBoardPage';
import BookMarkPage from './5-Bookmarks/BookMarkPage';
import ProfilePage from './6-Profile/ProfilePage';


function Pages() {
    const displayPage = (num) => {
        switch (num) {
            case 1:
                return <DiscoverPage />
            case 2:
                return <TaskFeedPage />
            case 3:
                return <InboxPage />
            case 4:
                return <MyTaskBoardPage />
            case 5:
                return <BookMarkPage />
            case 6:
                return <ProfilePage />
            default:
                return <DiscoverPage />
        }
    }

    // context values --
    const { dashboardTabNum } = useContext(AllContext);



    return (
        <>
            <div className='w-full'>
                {
                    displayPage(dashboardTabNum)
                }
            </div>
        </>
    )
}

export default Pages;