import React from 'react';
import DashNavbar from './DashNavbar/DashNavbar';
import DashBody from './DashBody/DashBody';
import DashFooter from './DashFooter/DashFooter';

function Dashboard() {
    return (
        <>
            <div className='h-screen p-2 flex flex-col justify-between'>
                <div>
                    <DashNavbar />
                    <DashBody />   
                </div>


                <div>
                    <DashFooter />
                </div>
            </div>
        </>
    )
}

export default Dashboard;