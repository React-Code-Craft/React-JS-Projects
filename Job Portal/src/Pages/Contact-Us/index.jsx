import React from 'react'
// import './style.css
import { useNavigate } from 'react-router-dom';

import { FaAngleRight, } from 'react-icons/fa';
import { IoLocation } from 'react-icons/io5';
import { TfiEmail } from 'react-icons/tfi';
import { FaPhoneAlt } from 'react-icons/fa';
import Button from '@Components/Atomic_UI/Button/'

import map from '@Assets/map.png'

export default function Contact_Us() {
    const navigate = useNavigate();
    return (
        <>
            <section className="error-404-bg h-[300px]">
                <div className="overlay size-full z-10">
                    <main className="container mx-auto   size-full relative">
                        <div className="flex flex-col items-center  justify-center size-full">
                            <h1 className="font-Rubik font-medium text-4xl text-white">
                                Contact US
                            </h1>
                            <h4 className="font-Montserrat font-medium text-lg text-white flex items-center mt-4">
                                Home {<FaAngleRight className='text-lg' />} Contact US
                            </h4>
                        </div>
                    </main>
                </div>
            </section>

            <section className="dark:bg-dark-primary">
                <main className="container mx-auto md:flex items-stretch justify-between gap-4 pt-[80px] pb-[50px]">
                    <div className="w-full md:w-[32%] border-1 border-[#eee] dark:border-[rgba(255,255,255,0.1)] rounded p-7.5">
                        <h1 className="text-2xl text-title font-medium font-Rubik leading-[1] dark:text-white">Contact Info</h1>
                        <p className="font-Lato text-[rgb(111,111,111)] dark:text-[rgb(153,153,153)]">If you have any questions simply use the following contact details.</p>

                        <div className="flex items-start justify-start my-4">
                            <div className="border-1 p-2 rounded border-[#eee] dark:border-[rgba(255,255,255,0.1)]"> <IoLocation className='text-primary text-xl' /></div>
                            <div className="ml-2">
                                <h1 className='text-lg font-Rubik font-medium dark:text-white text-title hover:underline'>Address</h1>
                                <p className="text-[rgb(111,111,111)] dark:text-[rgb(153,153,153)]">123 West Street, Melbourne Victoria 3000 Australia</p>
                            </div>
                        </div>

                        <div className="flex items-start justify-start my-4">
                            <div className="border-1 p-2 rounded border-[#eee] dark:border-[rgba(255,255,255,0.1)]"> <TfiEmail className='text-primary text-xl' /></div>
                            <div className="ml-2">
                                <h1 className='text-lg font-Rubik font-medium dark:text-white text-title hover:underline'>Email</h1>
                                <p className="text-[rgb(111,111,111)] dark:text-[rgb(153,153,153)]">info@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-start justify-start my-4">
                            <div className="border-1 p-2 rounded border-[#eee] dark:border-[rgba(255,255,255,0.1)]"> <FaPhoneAlt className='text-primary text-xl' /></div>
                            <div className="ml-2">
                                <h1 className='text-lg font-Rubik font-medium dark:text-white text-title hover:underline'>Phone</h1>
                                <p className="text-[rgb(111,111,111)] dark:text-[rgb(153,153,153)]">+92 3XX XXXXXXXXX</p>
                            </div>

                        </div>

                        <div className="w-full h-[1px] dark:bg-[rgba(255,255,255,0.1)] bg-[#eee]" />

                    </div>

                    <div className="w-full md:w-[32%] dark:bg-dark-secondary bg-[#f3f3f3] p-7.5 rounded">
                        <h1 className="text-2xl text-title font-medium font-Rubik leading-[1] dark:text-white">Send Message Us</h1>
                        <input type='text' placeholder='Your Name' className='border border-[#e1e6eb] dark:border-[rgba(255,255,255,0.3)] bg-white dark:bg-[#0e0f20] w-full mb-7.5 mt-4 outline-none py-2.5 px-5 dark:text-white text-sm' />
                        <input type='text' placeholder='Your Email Address' className='border border-[#e1e6eb] dark:border-[rgba(255,255,255,0.3)] bg-white dark:bg-[#0e0f20] w-full mb-7.5 mt-4 outline-none py-2.5 px-5 dark:text-white text-sm' />
                        <textarea placeholder='Your Message' className='min-h-[150px] border border-[#e1e6eb] dark:border-[rgba(255,255,255,0.3)] bg-white dark:bg-[#0e0f20] w-full mb-7.5 mt-4 outline-none py-2.5 px-5 dark:text-white text-sm' />
                        <Button btnText="Submit" extraCss="rounded-none w-full" />
                    </div>

                    <div className="w-full md:w-[32%] rounded ">
                        <img src={map} className='h-full rounded' />
                    </div>

                </main>
            </section>
        </>
    )
}

