import React from 'react';
// components --
import Sidebar from './SideBar/Sidebar';
import Dashboard from './Dashboard/Dashboard';
import Pages from './Pages/Pages';


function MainApp() {
    return (
        <>
            <div className='w-full relative'>

                <div className='w-full flex'>
                    <div className='h-screen flex sticky top-0 left-0'>
                        <div className='w-[60px] bg-lightbg ' ><Sidebar /> </div>
                        <div className='w-[230px] bg-darkbg ' ><Dashboard /> </div>
                    </div>

                    <div className='w-full bg-lightbg ' ><Pages /> </div>
                </div>
                
            </div>
        </>
    )
}

export default MainApp;