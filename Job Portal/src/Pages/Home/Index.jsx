import React from 'react'

// Import Style file
import './style.css'

// Import Components:
import Header from '@Components/Common/Header/Index';
import Hero_Section from './Hero_Section/Index';
import Footer from '@Components/Common/Footer/Index'
import Button from '@Components/Atomic_UI/Button/Index'
import Featured_Jobs from './Featured_Jobs/Index';

// Import Swiper and SwiperSlide for Slider
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

// Swiper Slider CSS 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import Our Partner Images:
import partner1 from '@Assets/Our_Partner/partner1.svg';
import partner2 from '@Assets/Our_Partner/partner2.svg';
import partner3 from '@Assets/Our_Partner/partner3.svg';
import partner4 from '@Assets/Our_Partner/partner4.svg';
import partner5 from '@Assets/Our_Partner/partner5.svg';
import partner6 from '@Assets/Our_Partner/partner6.svg';

// Client Images:
import client_1 from '@Assets/Client-Review/client-1.png'
import client_2 from '@Assets/Client-Review/client-2.png'
import client_3 from '@Assets/Client-Review/client-3.png';

import man_img from '@Assets/man1.png'

// Icons:
import { GoFileCode } from "react-icons/go";
import { FiCheckCircle } from "react-icons/fi";
import { RiUserAddLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";



// Variable For Our Partner Section
const Partners = [partner1, partner2, partner3, partner4, partner5, partner6];

// Variable For Follow Easy Four Steps Section:
const Steps = [
    {
        icon: <IoSearch className="size-[35px] text-white group-hover:text-primary  transition-all duration-500 ease-in-out" />,
        title: "Search Jobs",
        description: "The standard chunk of used below of those interested."
    },
    {
        icon: <GoFileCode className="size-[35px] text-white group-hover:text-primary transition-all duration-500 ease-in-out" />,
        title: "CV/Resume",
        description: "The standard chunk of used below of those interested."
    },
    {
        icon: <RiUserAddLine className="size-[35px] text-white group-hover:text-primary transition-all duration-500 ease-in-out" />,
        title: "Create Account",
        description: "The standard chunk of used below of those interested."
    },
    {
        icon: <FiCheckCircle className="size-[35px] text-white group-hover:text-primary transition-all duration-500 ease-in-out" />,
        title: "Apply Them",
        description: "The standard chunk of used below of those interested."
    },
];

// Variable Job Categories:
const Categories = [
    { title: "UX/UI Design", description: "Turn ideas into visuals" },
    { title: "Illustration", description: "Build robust digital products" },
    { title: "Cool Art", description: "Grow audiences & sales" },
    { title: "Finance", description: "Manage numbers confidence" },
    { title: "Writing", description: "Craft compelling stories" },
    { title: "Customer Support", description: "Delight and retain users" },
    { title: "Data Science", description: "Uncover insights from data" },
    { title: "Human Resources", description: "Build thriving teams" },
];

// Variable Client Reviews
const Client_Review = [
    {
        img_url: client_1,
        client_name: 'Max Makina',
        time_with_us: 'One Year with us',
        review_text: 'It is a long established fact that a reader will be distracted by readable content of a page when looking at its layout.'
    },
    {
        img_url: client_2,
        client_name: 'Andriew Smith',
        time_with_us: 'One Year with us',
        review_text: 'It is a long established fact that a reader will be distracted by readable content of a page when looking at its layout.'
    },
    {
        img_url: client_3,
        client_name: 'Makina Smith',
        time_with_us: 'One Year with us',
        review_text: 'It is a long established fact that a reader will be distracted by readable content of a page when looking at its layout.'
    },
    {
        img_url: client_1,
        client_name: 'Makina Smith',
        time_with_us: 'One Year with us',
        review_text: 'It is a long established fact that a reader will be distracted by readable content of a page when looking at its layout.'
    }

]

export default function Home() {
    return (
        <>
            {/*==== Header ====*/}
            <Header />

            {/*==== Hero Section ====*/}
            <Hero_Section />

            {/*==== Our Partners*/}
            <section className='px-4 sm:px-0  dark:bg-dark-primary'>
                <div className="container  mx-auto py-7.5 md:py-12 lg:py-20 px-10 flex items-center justify-center ">
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{ delay: 5000, Autoplay, disableOnInteraction: false }}
                        breakpoints={{
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 5 },
                        }}
                    >

                        {Partners.map((partner) => (
                            <SwiperSlide>
                                <img src={partner} className='grayscale-[1] mx-auto opacity-50 dark:contrast-0 ' />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            {/*==== Follow Easy Four Steps ====*/}
            <section className="px-4 md:px-0 pb-16 bg-white dark:bg-dark-primary">
                <div className="mx-auto container  text-center">
                    <p className="font-medium text-primary font-lato">How It Work</p>
                    <h2 className="lg:text-[45px] text-title font-semibold font-Rubik mb-2 dark:text-white">Follow Easy 4 Steps</h2>
                    <p className="mb-10 text-title font-Montserrat max-w-[520px] mx-auto dark:text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p> {/* Placeholder paragraph */}

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {Steps.map((step, idx) => (
                            <div
                                key={idx}
                                className="bg-white dark:bg-dark-secondary rounded-lg px-6 py-10 text-center shadow-[0px_10px_60px_0px_rgba(0,0,0,.1)] relative group transition-all duration-400 ease-in-out z-30"
                            >
                                <div className="absolute top-0 left-0 w-full h-0 transition-all duration-500 ease-in-out rounded-lg bg-primary group-hover:h-full -z-10"></div>
                                <div className="bg-primary  size-[66px] mb-5 flex items-center justify-center rounded-md mx-auto group-hover:bg-white group-hover:text-primary transition-all duration-400 ease-in-out">
                                    {step.icon}
                                </div>
                                <h3 className="mb-2 text-xl font-medium font-Rubik text-title dark:text-primary group-hover:text-white">{step.title}</h3>
                                <p className="text-[15px] text-title dark:text-white font-lato group-hover:text-white">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/*==== Join Now Banner*/}
            <section className="px-4 md:px-0 pb-16 bg-white dark:bg-dark-primary overflow-hidden">
                <main className="container m-auto xl:w-full flex items-center ">
                    <div className="w-full xl:w-1/2 ">
                        <h6 className='font-Rubik text-primary'>Recent Job</h6>
                        <h5 className="text-[25px] sm:text-[30px] sm:leading-[37px] md:text-[34px] md:leading-[44px] lg:text-[40px] lg:leading-[52px] xl:text-[45px] xl:leading-[60px] lg:max-w-[520px]  text-text dark:text-white font-Rubik font-medium  my-2">Over all 10,00+ Talented People Registered in Our Website </h5>
                        <p className='font-Lato max-w-[520px] dark:text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        <Button btnText='Join Now' extraCss='font-Rubik font-medium text-base px-[30px] py-[15px] mt-4' />
                    </div>

                    <div className="w-1/2 hidden xl:block ">
                        <div class="join-now-banner">
                            <img src={man_img} />
                            <svg width="892" height="733" viewBox="0 0 892 733" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M61.3623 116.435C23.5447 121.128 -3.30874 155.589 1.38355 193.406L44.2694 539.047C47.5755 565.692 65.66 586.895 89.2844 595.456C95.1286 598.219 101.463 600.202 108.175 601.249L941.587 731.348C979.239 737.225 1014.53 711.467 1020.4 673.815L1050.07 483.78L1053.09 483.404C1090.91 478.712 1117.77 444.251 1113.07 406.433L1070.19 60.7929C1065.5 22.9753 1031.03 -3.87817 993.217 0.81412L61.3623 116.435Z" fill="#2E55FA" />
                            </svg>
                        </div>
                    </div>
                </main>
            </section>




            {/*==== Job Categoris ====*/}
            <section className="dark:bg-dark-primary">
                <main
                    className="container px-4 pt-20 mx-auto text-center sm:px-0"
                >
                    {/* Small label text */}
                    <span className="block text-base font-normal tracking-wide font-Rubik text-primary">
                        Job categories
                    </span>

                    {/* Heading */}
                    <h2 className="font-Rubik font-semibold text-title dark:text-white text-[25px] sm:text-[30px] md:text-[34px] lg:text-[40px] xl:text-[45px]">
                        Choose your desired category
                    </h2>

                    {/* Placeholder paragraph */}
                    <p className="mx-auto mt-4 max-w-[650px] text-sm md:text-base font-Montserrat text-title dark:text-white">
                        There are many variations of passages of available, but the majority have suffered some form, by injected humour, or look even slightly believable.
                    </p>

                    {/* Cards */}
                    <div className="flex flex-wrap justify-center w-full gap-4 mt-10">
                        {Categories.map(({ title, description }, idx) => (
                            <article
                                key={idx}
                                className="relative z-30 overflow-hidden group basis-full sm:basis-[calc(50%-1.5rem)] lg:basis-[calc(33.333%-1.5rem)] xl:basis-[calc(25%-1.5rem)] rounded-md p-6 bg-[#eeeafc] dark:bg-dark-secondary group"

                            >

                                <span className="absolute top-0 -left-[100%] h-full w-full rounded-md bg-primary content-[''] -z-10 transition-all duration-500 ease-in-out group-hover:left-0">

                                </span>
                                <h3 className="mb-2.5 font-Rubik text-lg lg:text-xl font-semibold text-title dark:text-white transition-colors duration-500 group-hover:text-white">
                                    {title}
                                </h3>
                                <p className="text-[15px] font-lato text-primary dark:text-white transition-colors duration-500 group-hover:text-white">
                                    {description}
                                </p>
                            </article>
                        ))}
                    </div>
                </main>
            </section>

            {/*==== Featured Jobs =====*/}
            <Featured_Jobs />

            {/*==== Client Reviews ====*/}
            <section className='py-20 dark:bg-dark-primary'>
                <main className="container px-4 mx-auto sm:px-0">
                    {/*----Section Head----*/}
                    <div className="text-center">
                        <h6 className='font-Rubik text-primary'>Clients Review</h6>
                        <h1 className='font-Rubik font-semibold capitalize leading-none   text-title dark:text-white text-[25px] sm:text-[30px] md:text-[34px] lg:text-[40px] xl:text-[45px]'>What a job holder says about us</h1>
                        <p className="font-Montserrat text-title dark:text-white max-w-[700px] mx-auto">There are many variations of passages of available, but the majority have suffered some form, by injected humour, or look even slightly believable.</p>
                    </div>

                    {/*----Reviews Section----*/}
                    <div className="mt-6 overflow-visible">
                        <div className='overflow-visible'>
                            <Swiper
                                spaceBetween={30}
                                slidesPerView={1}
                                loop={true}
                                autoplay={{ delay: 5000, disableOnInteraction: false }}
                                breakpoints={{
                                    768: { slidesPerView: 2 },
                                    1024: { slidesPerView: 3 },
                                }}
                                navigation={{
                                    prevEl: '.swiper-button-prev-custom',
                                    nextEl: '.swiper-button-next-custom',
                                }}
                                modules={[Navigation, Autoplay, Pagination]}
                            >
                                {Client_Review.map((review, index) => (

                                    <SwiperSlide key={index}>
                                        <div className="pt-15">
                                            <div className="pt-[65px] px-5 py-5 bg-[#f0ecfd] background dark:bg-dark-secondary rounded-md relative text-center">

                                                {/*---- Review Img Section ----*/}
                                                <div className="absolute size-[110px] top-0 left-1/2 bg-white dark:bg-dark-secondary  -translate-x-1/2 -translate-y-1/2 rounded-[50%] flex items-center" >
                                                    <div className="client-review-img-outline absolute flex items-center justify-between size-[92px] border-2 border-primary top-1/2 left-1/2 bg-white dark:bg-transparent -translate-x-1/2 -translate-y-1/2 rounded-[50%] after:absolute after:size-[8px] after:content-[''] after:bg-primary after:-bottom-[8px] after:left-1/2 after:rounded-[50%] after:-translate-x-1/2 after:-translate-y-1/2 before:absolute before:size-[8px] before:content-[''] before:bg-primary before:top-0 before:left-1/2 before:rounded-[50%] before:-translate-y-1/2  -z-100">

                                                    </div>

                                                    <div className='size-[72px] m-auto rounded-[50%] z-20'>
                                                        <img src={review.img_url} alt="" className='size-full rounded-[50%]' />
                                                    </div>
                                                </div>

                                                {/*---- Review Info Section -----*/}
                                                <div>
                                                    <h2 className='text-lg font-medium font-Rubik text-title dark:text-white'>{review.client_name}</h2>
                                                    <h6 className='text-sm font-Rubik text-primary mb-2.5'>{review.time_with_us}</h6>
                                                    <p className='font-lato text-text dark:text-white'>{review.review_text}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        {/*---- Custom Navigation Arrows ----*/}
                        <div className='flex items-center justify-between mt-4'>

                            <div className="swiper-button-prev-custom bg-[#f0ecfd] p-2.5 dark:bg-dark-secondary   rounded  cursor-pointer">
                                <FaChevronLeft className="text-lg text-primary dark:text-white" />
                            </div>

                            <div className="p-2 rounded cursor-pointer swiper-button-next-custom bg-[#f0ecfd] dark:bg-dark-secondary">
                                <FaChevronRight className="text-lg text-primary dark:text-white" />
                            </div>
                        </div>

                    </div>
                </main>
            </section >

            {/*==== Footer ====*/}
            <Footer />
        </>
    )
}
