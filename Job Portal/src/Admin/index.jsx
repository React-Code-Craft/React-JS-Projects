import React from 'react'

import './style.css'

import logo from '@Assets/company-logo.jpg'

import { MdModeEditOutline } from "react-icons/md";
import { IoBagAdd } from "react-icons/io5";
import { FaFileMedical } from "react-icons/fa6";
import { NavLink, Outlet } from 'react-router-dom';

export default function Admin() {
    let navItem = "flex group items-center gap-2 py-3.5 px-5  border-l-[3px] border-t dark:border-t-[rgba(255,255,255,0.1)] border-t-primary-1  dark:bg-[#222339] dark:text-white  "
    return (
        <>
            <section className="dark:bg-dark-primary">
                <div className="container mx-auto lg:flex items-start justify-between gap-4 py-10">
                    {/*==== Navbar =====*/}
                    <div className="w-full lg:w-4/12 xl:w-3/12 sticky top-[80px] ">
                        <div className="w-full dark:bg-[#222339] rounded shadow-[0px_0px_10px_rgba(0,24,128,0.1)] py-10 flex flex-col items-center justify-center">
                            <div className="company-logo size-[150px] border-2 border-primary rounded-[50%] flex items-center justify-center bg-white">
                                <img src={logo} className='size-[139px] rounded-[50%] z-20' />
                                <div className="upload-link size-[45px] leading-[1] flex items-center justify-center rounded-full shadow-normal bg-white absolute top-0 right-0 z-30">
                                    <input type="file" className='opacity-0' />
                                    <MdModeEditOutline className='text-xl text-primary' />
                                </div>
                            </div>

                            <h1 className="font-Rubik font-medium text-2xl text-title dark:text-white hover:text-primary underline mt-5">@Job Portal</h1>


                        </div>

                        <div className="">
                            <ul className='list-none'>
                                <li>
                                    <NavLink to={'/Admin/'} end className={({ isActive }) => `${navItem} ${isActive ? 'border-primary' : 'border-transparent'}`}>
                                        <MdModeEditOutline />
                                        <span className="group-hover:ml-2 transition-all ease-in-out  delay-0">Home</span>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to={'/Admin/add-job'} className={({ isActive }) => `${navItem} ${isActive ? 'border-primary' : 'border-transparent'}`}>
                                        <FaFileMedical />
                                        <span className="group-hover:ml-2 transition-all delay-0">Add Job</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/Admin/All-Jobs-list'} className={({ isActive }) => `${navItem} ${isActive ? 'border-primary' : 'border-transparent'}`}>
                                        <MdModeEditOutline />
                                        <span className="group-hover:ml-2 transition-all delay-0">Manage Jobs</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/*==== Main Content =====*/}
                    <div className="w-full lg:w-812 xl:w-9/12 shadow-normal">
                        <Outlet />
                    </div>
                </div>
            </section>
        </>
    )
}
