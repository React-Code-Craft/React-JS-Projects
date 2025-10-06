import React from 'react'

import { Link } from 'react-router-dom'

//------------- Assets -------------------//
import light_Mode_Logo from '@Assets/logo/light-mode-logo.png'
import Dark_Mode_Logo from '@Assets/logo/dark-mode-logo.png'

export default function Header() {
    return (
        <DeskTop_Header />
    )
}

// Header For Desktop Computer Screen
function DeskTop_Header() {
    return (
        <header className="fixed top-0 z-40  bg-white dark:bg-dark-background w-full py-1.5  shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3) dark:shadow-[0px_0px_10px_0px_rgba(225,225,225,0.1))]">
            <main className="flex max-w-full items-center justify-between px-2 py-1 sm:m-auto sm:max-w-[576px] md:m-auto md:max-w-[768px] md:py-1.5 lg:max-w-[992px] lg:py-2 xl:max-w-[1200px] xl:py-3 ">
                {/* LOGO DIV */}
                <div className="logo">
                    <Link to={{ pathname: '/' }}>
                        <img src={light_Mode_Logo} className="w-[150px] lg:w-[180px] h-auto" />
                    </Link>
                </div>

                {/*------------ MAIN NAVIGATION BAR ------------------*/}
                <nav className="items-start hidd  lg:block">
                    <ul className={`lg:flex lg:relative lg:top-0 lg:left-0 lg:bg-transparent lg:w-auto items-start block absolute top-15.5 ${menu ? 'left-0' : '-left-[100%]'} w-[80%] h-[100vh] lg:h-auto bg-white dark:bg-dark-background transition-all  duration-100 ease-linear`}>

                    </ul>
                </nav>





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
