//======== Core React and React Hooks =========//
import React, { useState, useEffect } from 'react';

//======== React Redux Hook =======//
import { useSelector, useDispatch } from 'react-redux';

//======== React Router Dom Hooks ==========//
import { Link, useNavigate } from 'react-router-dom';

//======== React Icons ========//
import { FaAngleRight, FaSearch, FaAngleDown, FaFilter } from "react-icons/fa";
import { FaTag } from "react-icons/fa6";
import { BsFillGrid3X3GapFill } from 'react-icons/bs'
import { FaLocationDot, FaRegBookmark } from "react-icons/fa6";
import { FaRegClock, FaRegHeart, FaPlus, FaMinus } from "react-icons/fa";


//======= Components =========//
import Button from '@Components/Atomic_UI/Button';

//======= Style Sheet ========//
import './style.css';

import { fetchJobs } from '../../Slices/Posts';


import Pagination from './Pagination';
import Loader from '../../Components/Common/Loader';


export default function Browse_All_Jobs() {
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchJobs());
    }, [dispatch]);

    let selector = useSelector((state) => state.posts.jobs);


    let [Data, setData] = useState();
    let [input, setinput] = useState({ title: '', location: '' })


    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 10;

    // Calculate total pages
    const totalPages = Math.ceil(Data?.length / jobsPerPage);

    // Slice the data for current page
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = Data?.slice(indexOfFirstJob, indexOfLastJob);

    // Handle page change
    const handlePageChange = (currentPage) => {
        setCurrentPage(currentPage);
    };



    useEffect(() => {
        if (!selector) return;

        const titleSearch = input.title.trim().toLowerCase();
        const locationSearch = input.location.trim().toLowerCase();

        if (titleSearch === "" && locationSearch === "") {
            // No filters, show all jobs
            setData(selector);
        } else {
            const filtered = selector.filter((job) => {
                const matchesTitle = titleSearch
                    ? job.title.toLowerCase().includes(titleSearch)
                    : true;
                const matchesLocation = locationSearch
                    ? job.location.toLowerCase().includes(locationSearch)
                    : true;
                return matchesTitle && matchesLocation;
            });

            setData(filtered);

        }
    }, [selector, input]);

    useEffect(() => {
        setData(currentJobs)
    }, [])



    console.log(Data);

    console.log(input)

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Form is Submitted")
    }



    return (
        <>
            {/*===== SEARCH BAR =====*/}
            <section className='pb-6 dark:bg-dark-primary'>
                <main className="browse-all-jobs w-full ">
                    <div className="size-full overlay pt-10 px-4">
                        <div className="flex flex-col items-center  justify-center size-full py-15">
                            <h1 className="font-Rubik font-medium text-4xl text-white">
                                Browse Job Filter List
                            </h1>
                            <h4 className="font-Montserrat font-medium text-lg text-white flex items-center mt-4">
                                Home  Browse {<FaAngleRight className='text-lg' />} Job Filter List
                            </h4>
                        </div>


                        <div className="search-filter-form container mx-auto shadow-[0px_0px_20px_0_rgba(0,0,0,0.2)] rounded absol z-10 bg-white dark:bg-dark-secondary dark:text-white">
                            <form onSubmit={handleSubmit} className=' block lg:flex lg:items-center px-6 pt-3 justify-between '>

                                <div className="relative border-b-2 border-primary w-full lg:w-[48%] xl:w-[27%] my-6">
                                    <input type="text" value={input.title} onChange={(e) => setinput({ ...input, title: e.target.value })} placeholder='' className='input w-full py-2  ' />
                                    <label htmlFor="title" className='labal font-Rubik dark:text-white z-20 text-[rgb(85,85,85)]'>Job Title, Keyword or Phrase</label>
                                    <FaSearch className='absolute right-0 bottom-3 text-primary text-base dark:text-white' />
                                </div>

                                <div className="relative border-b-2 border-primary w-full lg:w-[48%] xl:w-[27%] my-6">
                                    <input type="text" value={input.location} onChange={(e) => setinput({ ...input, location: e.target.value })} placeholder='' className='input w-full py-2  ' />
                                    <label htmlFor="title" className='labal font-Rubik'>City, State or ZIP</label>
                                    <FaLocationDot className='absolute right-0 bottom-3 text-primary text-base dark:text-white' />
                                </div>

                                <div className="relative border-b-2 border-primary w-full lg:w-[48%] xl:w-[27%] my-6">
                                    <input type="text" placeholder='' className='input w-full py-2  ' />
                                    <label htmlFor="title" className='labal font-Rubik'>Tags</label>
                                    <FaTag className='absolute right-0 bottom-3 text-primary text-base dark:text-white' />
                                </div>

                                <Button btnText='Find Job' type="submit" extraCss='font-Roboto px-10 py-6 w-full lg:w-auto' />
                            </form>
                        </div>
                    </div>
                </main>
            </section>

            {/*===== ALL JOB LIST =====*/}
            <section className="dark:bg-dark-primary pt-10">
                <main className="container mx-auto md:flex items-start justify-between gap-6">
                    <div className="w-full md:w-[25%] border">
                        Filter Bar:
                        <Dropdown title="Company" items={['1', '2', '3']} />
                    </div>

                    {/*==== Main content =====*/}
                    <div className="w-full md:w-[75%] mb-10">
                        {/*==== Head Section =====*/}
                        <div className="w-full border-b py-2.5 border-[rgba(63,97,229,0.1)] dark:border-[rgba(225,225,225,0.1)] flex items-center justify-between dark:text-white">
                            <h2 className="text-xl font-Rubik font-medium uppercase mb-2.5 ">{Data?.length} Jobs Found</h2>
                            <div className="flex items-center">
                                <span className='font-Lato font-semibold text-sm'>Sort By Freshness</span>
                                <span className='text-primary text-2xl hover:text-title mx-3'><BsFillGrid3X3GapFill /></span>
                            </div>
                        </div>

                        <div className=" w-full md:flex items-center flex-wrap justify-between">
                            {
                                currentJobs?.map((Job, index) => {
                                    return (
                                        <Link to={`/post?id=${Job.id}`} key={index} className='w-full'>
                                            <div className={` px-6 py-8 w-full shadow-[0_0_10px_rgba(0,24,238,0.1)]  border-l-[5px] cursor-default  border-[rgba(97,63,229,0.05)] ${index % 2 == 0 ? "dark:bg-dark-secondary bg-[#f7f5fe]" : "dark:bg-[#161722] bg-white"}  dark:border-[#30313e] hover:border-primary rounded mt-6 transition-all delay-0`}>
                                                <div className="flex items-start">
                                                    <div className="size-[70px] rounded">
                                                        <img src={Job.companyLogo} alt="" className="rounded size-full" />
                                                    </div>
                                                    <div className="ml-4">
                                                        <h1 className="text-2xl font-Rubik font-medium text-text dark:text-white cursor-pointer hover:underline transition-all delay-0">{Job.title}</h1>
                                                        <ul className='text-[#6f6f6f] dark:text-white flex items-center gap-3 font-Lato mt-3'>
                                                            <li className="flex items-center">
                                                                <FaLocationDot /><span className="ml-1">Lahore,Pakistain</span>
                                                            </li>
                                                            <li className="flex items-center">
                                                                <FaRegBookmark /><span className="ml-1">On Site</span>
                                                            </li>
                                                            <li className="flex items-center">
                                                                <FaRegClock /><span className="ml-1">Published 11 month ago</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="ring ring-primary rounded-full ml-auto p-1.5 dark:ring-[rgba(225,225,225,0.2)]">
                                                        <FaRegHeart className='text-lg text-primary dark:text-white' />
                                                    </div>
                                                </div>
                                                <div className="mt-6">
                                                    <ul className="flex items-end justify-between">
                                                        <li className="bg-[rgba(97,63,229,0.1)] px-2.5 py-[2px] text-[15px] font-Roboto text-primary rounded hover:bg-primary dark:bg-primary dark:text-white hover:text-white">Part Time</li>
                                                        <li className="font-Rubik text-[22px] dark:text-white">$1200 - $1300</li>
                                                    </ul>

                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })
                            }

                            <Pagination currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={handlePageChange} />
                        </div>

                    </div>
                </main>
            </section>


        </>
    )
}




const Dropdown = ({ title, items }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full mx-auto font-sans">
            {/* Heading */}
            <div
                onClick={() => setIsOpen(!isOpen)}
                className=" px-4 py-2 bg-white cursor-pointer select-none flex items-center justify-between border-b-2 border-[#e3e3e3] "
            >
                <span className='font-Rubik font-medium text-[#383838]'>{title}</span>
                {(isOpen ? <FaMinus className='text-[12px]' /> : <FaPlus className='text-[12px]' />)}
            </div>

            {/* Dropdown list */}
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out  rounded-lg mt-2 ${isOpen ? "max-h-60 opacity-100 py-2" : "max-h-0 opacity-0 py-0"
                    }`}
            >
                {items.map((item, index) => (
                    <p
                        key={index}
                        className="px-4 py-2 hover:bg-slate-200 cursor-pointer"
                    >
                        {item}
                    </p>
                ))}
            </div>
        </div>
    );
};


