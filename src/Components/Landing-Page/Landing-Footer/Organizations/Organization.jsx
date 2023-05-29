import React from 'react';
import OrganizationCards from './OrganizationCards';
// icons --
import { BsDiscord, BsGithub } from 'react-icons/bs';
import { BiWalletAlt } from 'react-icons/bi';


const OrganizationInfo = [
    {
        logo: <BsDiscord />,
        heading: "Discord Integration",
        paragraph: "Discuss Dework tasks in Discord threads, notify members when new bounties are available, and more"
    },
    {
        logo: <BsGithub />,
        heading: "Sync with Github",
        paragraph: "Dework syncs Github issues, branches and pull requests with Dework tasks"
    },
    {
        logo: <BiWalletAlt />,
        heading: "Pay with your wallet",
        paragraph: "Dework works with Gnosis Safe, Metamask, Wallet Connect, Phantom, and more"
    },
]


function Organization() {
    return (
        <>
            <div className='w-full py-6 bg-darkbg flex flex-col items-center'>
                <h1 className='mb-4 text-xl font-semibold' >Built for decentralized organizations</h1>

                <div className='flex items-center'>
                    {
                        OrganizationInfo.map((obj, id) => (
                            <div key={id} >
                                <OrganizationCards logo={obj.logo} heading={obj.heading} paragraph={obj.paragraph} />
                            </div>
                        ))
                    }
                </div>

            </div>
        </>
    )
}

export default Organization;