import React from 'react';
// pages --
import LandingNavbar from './Landing-Navbar/LandingNavbar';
import LandingBody from './Landing-Body/LandingBody';
import LandingFooter from './Landing-Footer/LandingFooter';


function LandingPage() {
    return (
        <>
            <div className='w-full bg-gradient-to-b from-[#000428] to-[#004e92] relative  '>
                <div className='bg-[#000428] sticky top-0 left-0 '>
                    <LandingNavbar />
                </div>

                <div className='px-28'>
                    <LandingBody />
                </div>

                <div className='w-full'>
                    <LandingFooter />
                </div>
            </div>
        </>
    )
}

export default LandingPage;