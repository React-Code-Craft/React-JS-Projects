
//--------------- React && core: ------------------ 
import React, { useRef, useEffect } from 'react'
//--------------- React Hooks: -------------------- 
import { useState } from "react";
import { useContext } from 'react';
import { useNavigate } from 'react-router';

//----------------- Third Party: ------------------- 
import { NavLink, Link, useLocation } from "react-router";

//---------------- Components: --------------------- 
import Button from '@Components/Atomic_UI/Button/Index';

//----------------- Assets: ------------------------
import dark_logo from "@Assets/logo/dark-mode-logo.png";
import light_logo from "@Assets/logo/light-mode-logo.png";

//----------------- Icons: ------------------------- 
import { FaRegSun } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { LiaTimesSolid } from "react-icons/lia";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa"
import { FaAngleDown } from "react-icons/fa6";


//---------------- Theme Context: --------------------- 
import { ThemeContext } from '../../../Context/ThemeContext/index';

window.addEventListener("scroll", (e) => {
    if (window.scrollY > 100) {
        document.getElementsByTagName("header")[0].classList.add("fixed")
    } else if (window.scrollY < 80) {
        document.getElementsByTagName("header")[0].classList.remove("fixed")
    }
})



export default function Header() {
    const navigate = useNavigate();
    let [menu, setmenu] = useState(false)
    let { theme } = useContext(ThemeContext);
    return (
        <header className=" top-0  z-40  bg-white dark:bg-dark-primary w-full py-1.5  shadow-[0px_0px_10px_0px_rgba(0,0,0,0.9)  dark:border-b dark:border-[rgba(185,185,185,0.3)] transition-all  duration-100 ease-linear">
            <main className="flex max-w-full items-center justify-between px-2 py-1 sm:m-auto sm:max-w-[576px] md:m-auto md:max-w-[768px] md:py-1.5 lg:max-w-[992px] lg:py-2 xl:max-w-[1200px] xl:py-3 ">
                {/* LOGO DIV */}
                <div className="logo">
                    <Link to={{ pathname: '/' }}>
                        <img src={(theme == 'light') ? light_logo : dark_logo} className="w-[150px] lg:w-[180px] h-auto" />
                    </Link>
                </div>

                {/*------------ MAIN NAVIGATION BAR ------------------*/}
                <nav className=" items-start hidd  lg:block">
                    <Navigation state={menu} setstate={setmenu} />
                </nav>

                {/*-------------- THEME SWITCHER ---------------------*/}



                {/*-------------- HEADER BUTTON ------------*/}
                <div className="flex gap-1 items-center">
                    <ThemeToggle />
                    <div className='hidden  xl:flex'>
                        <Button btnText={'Sign Up'} icon={FaUser} extraCss='mx-2' handleClick={() => navigate('/signUp')} />
                        <Button btnText={'login'} icon={FaLock} handleClick={() => navigate('/login')} />
                    </div>
                    {menu ? <LiaTimesSolid className='ml-1 text-[22px]   lg:hidden dark:text-white' onClick={() => { setmenu(!menu) }} /> : <AiOutlineMenu className='ml-1 text-[22px]  lg:hidden dark:text-white' onClick={() => { setmenu(!menu) }} />}


                </div>




            </main>
        </header>
    )
}



const Navigation = ({ state, setstate }) => {
    let navigation = [
        {
            title: "Home",
            path: '/',
            end: true, // Exact match for the home page
            type: 'link'
        },
        {
            title: "Browse Jobs",
            path: '/jobs',
            type: 'link'
        },
        {
            title: "All Pages",
            type: 'dropdown',
            children: [
                {
                    title: 'Login',
                    path: '/login'
                }, {
                    title: 'Register',
                    path: '/signup'
                }
            ]
        }, {
            title: "Admin",
            path: '/Admin',
            type: 'link'
        }

    ];

    const classes = {
        // 💡 DEFAULT CLASSES: These classes will always be present (e.g., p-2, rounded)
        base: " py-2 px-3.5 lg:rounded-[3px]  dark:text-white font-normal font-Poppins transition-colors duration-200 delay-0 hover:bg-primary hover:text-white",

        // 💡 INACTIVE CLASSES: Applied when not active (e.g., default text color, hover background)
        inactive: "text-gray-700 hover:bg-gray-200",

        // 💡 ACTIVE CLASSES: Applied when active (e.g., highlight background, white text)
        active: " bg-primary text-white",
    };

    // 1. STATE DEFINITION

    return (
        <div className={`lg:flex gap-3 border-0 block absolute lg:relative lg:top-0 top-[62px] lg:left-0  shadow-[2px_0px_4px_rgba(0,0,0,0.2)] lg:shadow-none ${state ? 'left-0' : "left-[-100%]"} w-9/12   lg:w-auto bg-[#bababa] h-screen lg:h-auto z-50`}>
            <ul className="lg:w-auto lg:flex gap-2 h-full bg-white dark:bg-dark-primary">
                {navigation.map((item) => (
                    <>
                        {item.type == "link" && (<li className='flex' onClick={() => setstate(!state)}>
                            <NavLink
                                to={item.path}
                                end={item.end}
                                className={({ isActive }) => (
                                    `w-full block ${classes.base} ${isActive ? classes.active : classes.inactive}`
                                )}                    >
                                {item.title}
                            </NavLink>
                        </li>)}

                        {item.type == "dropdown" && <Dropdown title={item.title} children={item.children} />}
                    </>))}
            </ul>
        </div>
    );
};

// import { useState, useRef, useEffect } from "react";
// import { NavLink } from "react-router-dom";

function Dropdown({ title, children }) {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);
    let location = useLocation()
    let isChildActive = children.some((item) => location.pathname == item.path)

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(e) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative group " ref={dropdownRef}>
            <li
                onClick={() => setOpen(!open)}
                className={`flex items-center group group-hover:bg-primary dark:text-white group-hover:text-white gap-2 px-3 font-normal font-Poppins py-2 w-full justify-between hover:bg-primary cursor-pointer lg:rounded-[3px] hover:text-white transition-all delay-0 ${isChildActive && "bg-primary text-white"}`}
            >

                {title}
                <FaAngleDown className={`text-[12px] transition ${open ? "rotate-180" : ""}`} />

            </li>
            {open && (
                <div className="lg:absolute relative lg:my-0 mb-4 dark:bg-dark-secondary dark:text-white mt-1 lg:w-[200px] bg-white shadow-[0px_0px_6px_rgba(0,0,0,0.2)] rounded py-2.5 z-50">
                    {children.map((item) => (
                        <li className=''>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) => (`${isActive && "bg-primary text-white"} block py-2 px-3 hover:bg-primary hover:text-white transition-all delay-0 font-Montserrat text-sm font-medium`)}
                            >
                                {item.title}
                            </NavLink>

                        </li>
                    ))}

                </div>


            )
            }
        </div >
    );
}





function ThemeToggle() {
    let { theme, toggletheme } = useContext(ThemeContext);
    // console.log(theme)
    return (
        <div onClick={toggletheme} className="relative bg-primary rounded p-1 cursor-pointer transition-all duration-300 ease-in-out w-20 h-10.5" >
            {/* Background slider */}
            <div className={`absolute top-[4px] w-9 h-8.5 bg-white rounded shadow-md transition-transform duration-300 ease-in-out ${theme == 'light' ? 'translate-x-0' : 'translate-x-9'}`} />

            {/* Icons container */}
            <div className="relative h-full w-full flex ">
                {/* Sun icon */}
                <div className="w-1/2 h-full flex items-center justify-center z-10">
                    <FaRegSun
                        size={19}
                        className={`transition-colors duration-300 ${theme == 'light' ? 'text-primary' : 'text-white'
                            }`}
                    />
                </div>

                {/* Moon icon */}
                <div className="w-1/2 h-full flex items-center justify-center z-10">
                    <FaRegMoon
                        size={19}
                        className={`transition-colors duration-300 ${theme == 'dark' ? 'text-primary' : 'text-white'
                            }`}
                    />
                </div>
            </div>
        </div>
    );
}
