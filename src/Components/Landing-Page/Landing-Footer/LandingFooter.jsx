import React from 'react';
import Footer from './Footer';
import Organization from './Organizations/Organization';


function LandingFooter() {
    return (
        <>
            <div className='w-full'>
                <div>
                    <Organization />
                </div>

                <Footer />
            </div>
        </>
    )
}

export default LandingFooter;