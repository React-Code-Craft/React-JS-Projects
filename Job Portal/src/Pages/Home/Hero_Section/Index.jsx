import React from 'react'
// Import Custom style sheet
import './style.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

// Import Images
import man from '@Assets/Hero-Section/man.png';
import microsoft from '@Assets/Hero-Section/microsoft.svg';
import amazon from '@Assets/Hero-Section/amazon.svg';
import google from '@Assets/Hero-Section/google.svg';
import dropbox from '@Assets/Hero-Section/dropdox.svg';

import man2 from '@Assets/man1.png'

// Import Icons
import { IoLocationOutline, IoSearch } from 'react-icons/io5';

// Import Button Components
import Button from '@Components/Atomic_UI/Button'


export default function Hero_Section() {
    let navigate = useNavigate();
    let [input, setinput] = useState({ title: '', country: '' });
    function handlesubmit(e) {
        let path = `searchResult?title=${input.title}&country=${input.country}`
        e.preventDefault();
        navigate(path)

    }
    console.log(input)
    return (
        <>
            <section className='hero-section px-4 flex items-center   overflow-hidden hero-section bg-[#f5f3fd]    dark:bg-dark-main-banr '>
                <div className='w-full mx-auto sm:w-[576px] md:w-[768px] lg:w-[991px] xl:w-[1200px] z-30 flex items-center justify-between '>
                    {/* ---------- Left Content: Heading and Search Form ---------- */}
                    <div className='container z-30 flex items-center flex-wrap'>
                        <div className='z-30  xl:w-7/12 w-full p-2 pt-36'>
                            <h4 className='text-sm lg:text-lg font-medium text-primary font-Poppins mb-2.5'>We Have 208,000+ Live Jobs</h4>
                            <h1 className=' text-[40px] sm:text-[50px] capitalize  lg:text-[55px] xl:text-[65px] leading-[1.2] mb-6 font-Rubik font-semibold text-title dark:text-white'>Your <span className='text-primary'>Dream</span> Job is waiting for You.</h1>
                            <p className="text-base font-medium font-Poppins text-primary mb-2.5 ">Type your keywork, then click search to find your perfect job.</p>

                            {/*==== Search Form ====*/}
                            <form onSubmit={handlesubmit}>
                                <div className="mt-3 mb-5 rounded bg-white py-4 px-5 shadow-[0_10px_60px_0px_rgba(97,63,229,0.2)] search-box md:flex md:items-center md:justify-between">
                                    <div className="flex items-center w-full mb-2.5 md:mb-0 p-2 md:p-2.5  rounded-sm md:w-auto border border-[rgba(0,0,0,0.1)] md:border-0">
                                        <IoSearch className='mr-2 text-lg md:text-[22px] text-primary' />
                                        <input value={input.title} onChange={(e) => setinput({ ...input, title: e.target.value })} type="text" placeholder='Job title, Keyword' className='font-Poppins focus:outline-none w-full md:w-auto placelder:font-Poppins' />
                                    </div>

                                    <div className="flex items-center md:w-auto p-2 mb-2.5 md:mb-0  md:p-2.5 border border-[rgba(0,0,0,0.1)] md:border-0">
                                        <IoLocationOutline className='mr-2 text-lg md:text-[22px] text-primary' />
                                        <input value={input.country} onChange={(e) => setinput({ ...input, country: e.target.value })} type="text" placeholder='Zip Code, Country' className='font-Poppins focus:outline-none w-full md:w-auto placeholder:font-Poppins' />
                                    </div>

                                    <div className="w-full md:w-auto">
                                        <Button btnText={'Find Job'} extraCss={'font-Poppins text-[14px] font-medium px-8'} />
                                    </div>
                                </div>
                            </form>

                            {/*==== Popular searches ====*/}
                            <p className=''>
                                <span className='text-base font-Poppins font-medium text-[#142238] dark:text-white'>
                                    Popular Searches :
                                </span>
                                <span className='font-Poppins text-[rgba(127,147,182,1)] ml-1.5'>
                                    Designer, Senior, Architecture, iOS, etc.
                                </span>
                            </p>
                        </div>



                        {/* ---------- Right Content: Man Image & Logos ---------- */}
                        <div className="relative flex items-center justify-end w-full pt-10 mx-auto md:pt-20   lg:w-5/12">
                            <div className="mx-auto   ">
                                {/* Man Image */}
                                <div className="main-media z-30    flex items-center justify-center md:justify-end">
                                    <img src={man} className='w-[70%] md:w-[80%] lg:w-full h-auto' />
                                </div>

                                {/* Background circle with logos */}
                                <div className="bg-circle-container absolute left-1/2 top-[70%] -z-10 size-[650px]  md:size-[750px] lg:size-[1080px]">

                                    {/* Inner circle with Microsoft */}
                                    <div className="inner-circle absolute left-1/2 top-[44%] size-[45%]">
                                        <img src={microsoft} alt="Microsoft" className='absolute left-[25px] top-[20%] blur-[2px]' />
                                    </div>

                                    {/* Middle circle with more logos */}
                                    <div className="middle-circle size-[60%]">
                                        <img src={google} alt="Google" className='absolute left-[0%] top-1/4' />
                                        <img src={amazon} alt="Amazon" className='absolute right-[-4%] top-1/2' />
                                        <img src={dropbox} alt="Dropbox" className='absolute left-[88%] top-[20%]' />
                                    </div>

                                    {/* Optional: Third circle layer (empty) */}
                                    <div className='outer-circle size-[75%]'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="flex relative items-center justify-between overflow-hidden w-full ml-auto xl:w-[1200px]">
                <div class="w-7/12">
                    <div class="section-head style-1">
                        <h6>Recent Job</h6>
                        <h5 class="section-title-2">Over all 10,00+ Talented People Registered in Our Website </h5>
                        <p>It is a long established fact that a reader will be distracted by the
                            readable content of a page when looking at its layout.</p>
                        <a href="javascript:void(0);" class="site-button style-1">Join Now</a>
                    </div>
                </div>
                <div class="">
                    <div class="dz-job-media absolute right-0 to-0%">
                        <img src={man2} alt="" />
                        <svg width="892" height="733" viewBox="0 0 892 733" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M61.3623 116.435C23.5447 121.128 -3.30874 155.589 1.38355 193.406L44.2694 539.047C47.5755 565.692 65.66 586.895 89.2844 595.456C95.1286 598.219 101.463 600.202 108.175 601.249L941.587 731.348C979.239 737.225 1014.53 711.467 1020.4 673.815L1050.07 483.78L1053.09 483.404C1090.91 478.712 1117.77 444.251 1113.07 406.433L1070.19 60.7929C1065.5 22.9753 1031.03 -3.87817 993.217 0.81412L61.3623 116.435Z" fill="#2E55FA" />
                        </svg>
                    </div>
                </div>
            </section> */}
        </>
    )
}
