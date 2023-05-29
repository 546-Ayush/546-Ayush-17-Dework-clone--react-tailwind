import React from 'react';
import HeroSection from './HeroSection';
import InfoTabs from './Info-Tabs/InfoTabs';


function LandingBody() {
    return (
        <>
            <div className='w-full pt-10'>
                <HeroSection />
                <InfoTabs />
            </div>
        </>
    )
}

export default LandingBody;