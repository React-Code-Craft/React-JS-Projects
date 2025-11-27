import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom';

import { FaAngleRight } from 'react-icons/fa';
import Button from '@Components/Atomic_UI/Button/'

export default function Error_404() {
    const navigate = useNavigate();
    return (
        <>
            <section className="error-404-bg h-[300px]">
                <div className="overlay size-full z-10">
                    <main className="container mx-auto   size-full relative">
                        <div className="flex flex-col items-center  justify-center size-full">
                            <h1 className="font-Rubik font-medium text-4xl text-white">
                                Error 404
                            </h1>
                            <h4 className="font-Montserrat font-medium text-lg text-white flex items-center mt-4">
                                Home {<FaAngleRight className='text-lg' />} Error 404
                            </h4>
                        </div>
                    </main>
                </div>
            </section>

            <section className="dark:bg-dark-primary pt-[120px] pb-[90px]">
                <div className="font-Rubik flex flex-col items-center justify-center text-title dark:text-white">
                    <h1 className="text-[120px] lg:text-[200px] font-medium leading-[1]">404</h1>
                    <h2 className="text-[60px] lg:text-[90px] font-medium tracking-[10px] text-center leading-[1]">OOPS !</h2>
                    <h3 className="text-[35px] lg:text-[45px] font-medium text-primary leading-[1]">Page Not Found</h3>
                    <Button btnText="Back to Home" extraCss="text-center my-10 font-Robotom px-6 py-3" handleClick={() => navigate('/')} />
                </div>
            </section>
        </>
    )
}
