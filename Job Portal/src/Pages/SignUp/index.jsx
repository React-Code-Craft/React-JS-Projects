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




export default function SignUp() {
    let { theme } = useContext(ThemeContext);
    let navigate = useNavigate();

    let [signUp, setSignup] = useState({
        userName: '',
        email: '',
        password: '',
        repassword: '',
        agree: false
    })

    function handleSubmit(e) {
        e.preventDefault();
        console.log(signUp)
    }

    return (
        <div className=' background fixed overflow-y-scroll w-screen h-screen'>
            <div className="w-full md:w-[33%] min-h-screen px-10   bg-white dark:bg-dark-primary absolute top-0 left-0">

                <div className="logo">
                    <img src={(theme == "light") ? light_mode_logo : dark_mode_logo} className='cursor-pointer w-[180px] py-5 h-auto' onClick={() => navigate('/')} />
                </div>

                <h1 className="text-[28px] font-Rubik font-medium dark:text-white text-title mb-4">Sign Up</h1>

                <div className="w-[20px] h-[2px] bg-primary" />

                <p className="mt-7 mb-3 font-Lato dark:text-[rgb(153,153,153)] text-[rgb(111,111,111)] ">Enter your personal detail below:</p>

                <form onSubmit={handleSubmit}>

                    <input type="text" value={signUp.userName} onChange={(e) => setSignup({ ...signUp, userName: e.target.value })} placeholder='User Name' className="w-full font-Lato text-sm my-3 rounded focus:outline-none py-4 px-4 shadow-[0px_0px_10px_0_rgba(0,24,128,0.1)] dark:bg-dark-secondary dark:text-white dark:placeholder:text-white" />

                    <input type="text" value={signUp.email} onChange={(e) => setSignup({ ...signUp, email: e.target.value })} placeholder='Email Address' className="w-full font-Lato text-sm my-3 rounded focus:outline-none py-4 px-4 shadow-[0px_0px_10px_0_rgba(0,24,128,0.1)] dark:bg-dark-secondary dark:text-white dark:placeholder:text-white" />

                    <input type="text" value={signUp.password} onChange={(e) => setSignup({ ...signUp, password: e.target.value })} placeholder='Password' className="w-full font-Lato text-sm my-3 rounded focus:outline-none py-4 px-4 shadow-[0px_0px_10px_0_rgba(0,24,128,0.1)] dark:bg-dark-secondary dark:text-white dark:placeholder:text-white" />

                    <input type="text" value={signUp.repassword} onChange={(e) => setSignup({ ...signUp, repassword: e.target.value })} placeholder='Re-type Password' className="w-full font-Lato text-sm my-3 rounded focus:outline-none py-4 px-4 shadow-[0px_0px_10px_0_rgba(0,24,128,0.1)] dark:bg-dark-secondary dark:text-white dark:placeholder:text-white" />

                    <p className="">
                        <CheckBox onChange={(e) => setSignup({ ...setSignup, agree: !agree })} label="I agree to the terms and condition" labelStyle="font-semibold" />
                    </p>

                    <div className="flex items-center justify-between my-10">
                        <span onClick={() => navigate(-1)} className="bg-[#666666] text-white py-2.5 px-4 rounded cursor-pointer">Back</span>
                        <Button btnText="Submit" type='submit' onSubmit={handleSubmit} />
                    </div>

                </form>



                <p className="dark:text-[rgb(153,153,153)] text-[rgb(111,111,111)] font-Lato my-8 text-center">
                    © Copyright by  <span className="text-primary cursor-pointer">Job Portal</span> rights reserved.
                </p>
            </div>
        </div>
    )
}
