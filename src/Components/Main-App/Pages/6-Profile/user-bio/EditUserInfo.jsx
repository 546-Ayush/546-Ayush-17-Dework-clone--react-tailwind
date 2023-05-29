import React from 'react';
// icons --
import { BsGithub, BsLinkedin, BsTwitter, BsDiscord, } from 'react-icons/bs';
import { AiOutlineLink } from 'react-icons/ai';
import { FiMapPin } from 'react-icons/fi';


function EditUserInfo({ clickEvent }) {
    return (
        <>
            <div className='w-full bg-transparent'>

                <form className='w-full' >
                    <div className='w-full mb-6 '>
                        <div>
                            <label className='text-xs' >User name</label>
                            <input
                                type="text"
                                className='w-full p-1.5 pl-2 text-xs bg-transparent border-[1px] border-slate-500 rounded-md outline-none'
                            />
                        </div>
                        <div>
                            <label className='text-xs' >Bio</label>
                            <input
                                type="text"
                                className='w-full p-1.5 pl-2 text-xs bg-transparent border-[1px] border-slate-500 rounded-md outline-none'
                            />
                        </div>
                    </div>


                    <div className='w-full'>
                        <div className='mb-2 w-full flex items-center'>
                            <BsGithub className='text-md mr-3' />
                            <input
                                type="link"
                                placeholder='https://github.com/userName'
                                className='w-full p-1 pl-2 text-xs bg-transparent border-[1px] border-slate-500 rounded-sm outline-none'
                            />
                        </div>
                        <div className='mb-2 w-full flex items-center'>
                            <BsLinkedin className='text-md mr-3' />
                            <input
                                type="link"
                                placeholder='https://linkedin.com/in/userName'
                                className='w-full p-1 pl-2 text-xs bg-transparent border-[1px] border-slate-500 rounded-sm outline-none'
                            />
                        </div>
                        <div className='mb-2 w-full flex items-center'>
                            <BsTwitter className='text-md mr-3' />
                            <input
                                type="link"
                                placeholder='https://twitter.com/userName'
                                className='w-full p-1 pl-2 text-xs bg-transparent border-[1px] border-slate-500 rounded-sm outline-none'
                            />
                        </div>
                        <div className='mb-2 w-full flex items-center'>
                            <AiOutlineLink className='text-md mr-3' />
                            <input
                                type="link"
                                placeholder='https://my-site.com'
                                className='w-full p-1 pl-2 text-xs bg-transparent border-[1px] border-slate-500 rounded-sm outline-none'
                            />
                        </div>
                        <div className='mb-2 w-full flex items-center'>
                            <BsDiscord className='text-md mr-3' />
                            <input
                                type="link"
                                placeholder='https://discord.com/userName'
                                className='w-full p-1 pl-2 text-xs bg-transparent border-[1px] border-slate-500 rounded-sm outline-none'
                            />
                        </div>
                        <div className='mb-2 w-full flex items-center'>
                            <FiMapPin className='text-md mr-3' />
                            <input
                                type="text"
                                placeholder='Lisbon, Portugal'
                                className='w-full p-1 pl-2 text-xs bg-transparent border-[1px] border-slate-500 rounded-sm outline-none'
                            />
                        </div>
                    </div>


                    <div className='w-full mt-5 flex justify-between'>
                        <button onClick={clickEvent()} className='w-[48%] px-3 py-0.5 text-sm font-medium bg-slate6 border-0 rounded-sm hover:bg-slate5'>Cancel</button>
                        <button className='w-[48%] px-3 py-0.5 text-sm font-medium bg-cyan5 border-0 rounded-sm hover:bg-cyan6'>Save</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default EditUserInfo;