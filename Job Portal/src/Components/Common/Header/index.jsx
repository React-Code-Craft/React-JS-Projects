import React, { useState } from 'react'

import { Link } from 'react-router-dom'

//------------- Assets -------------------//
import light_Mode_Logo from '@Assets/logo/light-mode-logo.png'
import Dark_Mode_Logo from '@Assets/logo/dark-mode-logo.png'

//------------- Icons -------------------//
import { FaRegMoon } from 'react-icons/fa'
import { FaRegSun } from 'react-icons/fa'

export default function Header() {
    return (
        <DeskTop_Header />
    )
}

// Header For Desktop Computer Screen
function DeskTop_Header() {
    window.addEventListener('scroll', (e) => {
        console.log(window.scrollY)
        if (window.scrollY > 100) {
            document.querySelector('header').classList.add("fixed", 'shadow-[0px_0px_10px_0px_rgba(0,0,0,0.2)]', 'dark:shadow-[0px_0px_10px_0px_rgba(225,225,225,0.2))]')
        } else if (window.scrollY == 0) {
            document.querySelector('header').classList.remove('fixed', 'shadow-[0px_0px_10px_0px_rgba(0,0,0,0.2)]', 'dark:shadow-[0px_0px_10px_0px_rgba(225,225,225,0.2))]')
        }
    })

    return (
        <header className="bg-white z-50 dark:bg-dark-primary w-full py-1.5  shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)] dark:shadow-[0px_0px_10px_0px_rgba(225,225,225,0.1))] transition-all duration-500 ease-in-out">
            <main className="flex max-w-full items-center justify-between px-2 py-1 sm:m-auto sm:max-w-[576px] md:m-auto md:max-w-[768px] md:py-1.5 lg:max-w-[992px] lg:py-2 xl:max-w-[1200px] xl:py-3 ">
                {/* LOGO DIV */}
                <div className="logo">

                    <img src={light_Mode_Logo} className="w-[150px] lg:w-[180px] h-auto" />

                </div>

                {/*------------ MAIN NAVIGATION BAR ------------------*/}
                <nav className="items-start hidd  lg:block">
                    <ul className='flex items-center gap-4'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Wist</li>
                        <li>Privacy</li>
                    </ul>
                </nav>

                {/*------------ Theme Switcher ------------------*/}
                <ThemeSwitcher />



            </main>
        </header>
    )
}


// Header For Mobile Screen 
function Mobile_Header() {
    return (
        <div className="">Mobile Header</div>
    )
}

function ThemeSwitcher() {
    let [theme, settheme] = useState('light');

    function switchMood() {
        if (theme == 'light') {
            settheme('dark');
            document.getElementsByTagName("html")[0].classList.add("dark")
        } else {
            settheme('dark')
        }
    }
    return (
        <div onClick={switchMood} className="relative bg-primary rounded p-1 cursor-pointer transition-all duration-300 ease-in-out w-20 h-10.5" >
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

