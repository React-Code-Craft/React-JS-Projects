import React, { useContext, useState } from 'react'

//====== Style =======//
import './style.css'

//====== Hooks =======//
import { useNavigate } from 'react-router-dom'

import { ThemeContext } from '../../Context/ThemeContext';

//====== Assets ======//
import dark_mode_logo from '@Assets/logo/dark-mode-logo.png';
import light_mode_logo from '@Assets/logo/light-mode-logo.png';

//====== Components ======//
import Button from '../../Components/Atomic_UI/Button/Index'
import CheckBox from '../../Components/Atomic_UI/CheckBox'
import { Link } from 'react-router-dom'

//====== ICONS =========//
import { FaLock, FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";




export default function Login() {
    let { theme } = useContext(ThemeContext);
    let navigate = useNavigate();
    let [input, setInput] = useState({ email: '', password: '' });

    function handleSubmit(e) {
        e.preventDefault()
        console.log(input)
    }

    return (
        <div className=' background fixed overflow-y-scroll w-screen h-screen'>
            <div className="w-full md:w-[33%] min-h-screen px-10   bg-white dark:bg-dark-primary absolute top-0 left-0">

                <div className="logo">
                    <img src={(theme == "light") ? light_mode_logo : dark_mode_logo} className='cursor-pointer w-[180px] py-5 h-auto' onClick={() => navigate('/')} />
                </div>

                <h1 className="text-[28px] font-Rubik font-medium dark:text-white text-title mb-4">Personal Information</h1>

                <div className="w-[20px] h-[2px] bg-primary" />

                <p className="mt-7 mb-3 font-Lato dark:text-[rgb(153,153,153)] text-[rgb(111,111,111)] ">Enter your e-mail address and your password.</p>

                <form onSubmit={handleSubmit}>
                    <input type="text" value={input.email} onChange={(e) => setInput({ ...input, email: e.target.value })} placeholder='User Name' className="w-full font-Lato text-sm my-3 rounded focus:outline-none py-3 px-3 shadow-[0px_0px_10px_0_rgba(0,24,128,0.1)] dark:bg-dark-secondary dark:text-white dark:placeholder:text-white" />

                    <input type="text" value={input.password} onChange={(e) => setInput({ ...input, password: e.target.value })} placeholder='Type Password' className="w-full font-Lato text-sm  my-3 rounded focus:outline-none py-3 px-3 shadow-[0px_0px_10px_0_rgba(0,24,128,0.1)] dark:bg-dark-secondary dark:text-white dark:placeholder:text-white" />

                    <div className="flex items-center mt-4">
                        <Button onClick={handleSubmit} btnText={'login'} extraCss="mr-2" />
                        <CheckBox label="Remember me" labelStyle="font-Lato font-semibold dark:text-white text-[rgb(51,51,51)]" />
                    </div>
                </form>

                <p className="mt-5">
                    <Link className='flex items-center justify-center text-primary font-Lato hover:text-title dark:hover:text-primary hover:underline transition-all delay-0 text-center'>
                        <FaLock /> Forgot Password
                    </Link>
                </p>

                <div className=" flex items-center justify-between mt-10 mb-7.5">
                    <h3 className="font-Rubik font-medium text-xl text-title dark:text-white">
                        Sign In With
                    </h3>

                    <div className="">
                        <ul className='flex items-center gap-[3px]'>
                            <li className='size-[35px] rounded text-white bg-[#4367AA] justify-center text-sm cursor-pointer flex items-center'>
                                <FaFacebookF />
                            </li>
                            <li className='size-[35px] rounded text-white bg-[#Dc4A38] justify-center text-sm cursor-pointer flex items-center'>
                                <FaGoogle />
                            </li>
                            <li className='size-[35px] rounded text-white bg-[#0274B3] justify-center text-sm cursor-pointer flex items-center'>
                                <FaLinkedinIn />
                            </li>
                            <li className='size-[35px] rounded text-white bg-[#1DA1F2] justify-center text-sm cursor-pointer flex items-center'>
                                <FaTwitter />
                            </li>
                        </ul>
                    </div>
                </div>

                <Link>
                    <Button btnText="Create an Account" handleClick={() => navigate('/signUp')} extraCss="font-Roboto font-bold w-full text-center h-[50px]" />
                </Link>

                <p className="dark:text-[rgb(153,153,153)] text-[rgb(111,111,111)] font-Lato my-8 text-center">
                    © Copyright by  <span className="text-primary cursor-pointer">Job Portal</span> rights reserved.
                </p>
            </div>
        </div>
    )
}
