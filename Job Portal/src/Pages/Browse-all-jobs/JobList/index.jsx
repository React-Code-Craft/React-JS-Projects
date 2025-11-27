import React, { useEffect, useState } from 'react'
import { FaLocationDot, FaRegBookmark } from "react-icons/fa6";
import { FaRegClock, FaRegHeart, FaPlus, FaMinus } from "react-icons/fa";
import CheckBox from '../../../Components/Atomic_UI/CheckBox';

import { Link } from 'react-router-dom';


import { useSelector, useDispatch } from 'react-redux';

import { fetchJobs } from '../../../Slices/Posts';
import RadioButton from '../../../Components/Atomic_UI/RadioButton';
import CustomSelect from '../../../Components/Atomic_UI/SelectBox';
import Pagination from '../Pagination';
// import { Jobs } from '../../../Data/Data.jsx';

// import Dropdown from '@Components/Atomic_UI/FilterDropdown'

export default function JobList() {
    const dispatch = useDispatch()

    let Jobs = useSelector((state) => state.posts.jobs)

    console.log(Jobs);
    useEffect(() => {
        dispatch(fetchJobs())
    }, [dispatch]);

    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 10;

    // Calculate total pages
    const totalPages = Math.ceil(Jobs.length / jobsPerPage);

    // Slice the data for current page
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = Jobs.slice(indexOfFirstJob, indexOfLastJob);

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    return (
        <section className="md:pt-30 pt-40 px-4  relative dark:bg-dark-primary">
            {/*==== Main Container*/}
            <div className="container mx-auto md:flex items-baseline justify-between gap-7">
                {/* Filter Side Bar */}
                <FilterBar />

                {/*==== Job Listing Section =====*/}
                <div className="w-full md:w-9/12 pt-10 md:pt-0">
                    {/* Header Section*/}
                    <div className="w-full border-b py-2.5 border-[rgba(63,97,229,0.1)] dark:border-[rgba(225,225,225,0.1)] flex items-center justify-between dark:text-white">
                        <h2 className="text-xl font-Rubik font-medium uppercase mb-2.5 ">Jobs Found</h2>
                        <div className="flex items-center">
                            <span className='font-Lato font-semibold text-sm'>Sort By Freshness</span>
                            <span className='text-primary text-2xl hover:text-title mx-3'><BsFillGrid3X3GapFill /></span>
                            <CustomSelect />
                        </div>

                    </div>

                    <div className="">
                        {
                            Jobs.map((Job, index) => {
                                return (
                                    <Link to={`/post?id=${Job.id}`} key={index}>
                                        <div className={`px-6 py-8 shadow-[0_0_10px_rgba(0,24,238,0.1)]  border-l-[5px] cursor-default  border-[rgba(97,63,229,0.05)] ${index % 2 == 0 ? "dark:bg-dark-secondary bg-[#f7f5fe]" : "dark:bg-[#161722] bg-white"}  dark:border-[#30313e] hover:border-primary rounded mt-10 transition-all delay-0`}>
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

                        <Pagination currentPage={currentJobs}
                            totalPages={totalPages}
                            onPageChange={handlePageChange} />

                        {/* <div className="px-6 py-8 shadow-[0_0_10px_rgba(0,24,238,0.1)] bg-[#f7f5fe] border-l-[5px] cursor-default dark:bg-dark-secondary border-[rgba(97,63,229,0.05)] dark:border-[#30313e] hover:border-primary rounded mt-10 transition-all delay-0">
                            <div className="flex items-start">
                                <div className="size-[70px] rounded">
                                    <img src="./logo1.svg" alt="" className="rounded size-full" />
                                </div>
                                <div className="ml-4">
                                    <h1 className="text-2xl font-Rubik font-medium text-text dark:text-white cursor-pointer hover:underline transition-all delay-0">Digital Marketing Exector</h1>
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

                        <div className="px-6 py-8 shadow-[0_0_10px_rgba(0,24,238,0.1)] bg-[#f7f5fe] border-l-[5px] cursor-default border-[rgba(97,63,229,0.05)] hover:border-primary rounded mt-6">
                            <div className="flex items-start">
                                <div className="size-[70px] rounded">
                                    <img src="./logo1.svg" alt="" className="rounded size-full" />
                                </div>
                                <div className="ml-4">
                                    <h1 className="text-2xl font-Rubik font-medium text-text cursor-pointer hover:underline">Digital Marketing Exector</h1>
                                    <ul className='text-[#6f6f6f] flex items-center gap-3 font-Lato mt-3'>
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
                                <div className="ring ring-primary rounded-full ml-auto p-1.5">
                                    <FaRegHeart className='text-lg text-primary' />
                                </div>
                            </div>
                            <div className="mt-6">
                                <ul className="flex items-end justify-between">
                                    <li className="bg-[rgba(97,63,229,0.1)] px-2.5 py-[2px] text-[15px] font-Roboto text-primary rounded hover:bg-primary hover:text-white">Part Time</li>
                                    <li className="font-Rubik text-[22px] ">$1200 - $1300</li>
                                </ul>

                            </div>
                        </div>

                        <div className="px-6 py-8 shadow-[0_0_10px_rgba(0,24,238,0.1)] bg-[#f7f5fe] border-l-[5px] cursor-default border-[rgba(97,63,229,0.05)] hover:border-primary rounded mt-6">
                            <div className="flex items-start">
                                <div className="size-[70px] rounded">
                                    <img src="./logo1.svg" alt="" className="rounded size-full" />
                                </div>
                                <div className="ml-4">
                                    <h1 className="text-2xl font-Rubik font-medium text-text cursor-pointer hover:underline">Digital Marketing Exector</h1>
                                    <ul className='text-[#6f6f6f] flex items-center gap-3 font-Lato mt-3'>
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
                                <div className="ring ring-primary rounded-full ml-auto p-1.5">
                                    <FaRegHeart className='text-lg text-primary' />
                                </div>
                            </div>
                            <div className="mt-6">
                                <ul className="flex items-end justify-between">
                                    <li className="bg-[rgba(97,63,229,0.1)] px-2.5 py-[2px] text-[15px] font-Roboto text-primary rounded hover:bg-primary hover:text-white">Part Time</li>
                                    <li className="font-Rubik text-[22px] ">$1200 - $1300</li>
                                </ul>

                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}



const Dropdown = ({ title, items, Dropdown }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full mx-auto font-sans dark:bg-dark-secondary">
            {/* Heading */}
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="dark:bg-dark-secondary dark:text-white px-4 py-2.5 bg-white cursor-pointer select-none flex items-center justify-between border-b dark:border-[rgba(225,225,225,0.1)] border-[#e3e3e3] "
            >
                <span className={`font-Rubik font-medium  ${isOpen == true ? 'text-primary' : 'text-green'}`}>{title}</span>
                {(isOpen ? <FaMinus className='text-[12px] text-primary hover:text-primary' /> : <FaPlus className='text-[12px] hover:text-primary' />)}
            </div>

            {/* Dropdown list */}
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out border-b border-[#e3e3e3] dark:border-[rgba(225,225,225,0.1)]   ${isOpen ? "max-h-60 opacity-100 py-6 pl-1.5" : "max-h-0 opacity-0 py-0"
                    }`}
            >
                {items.map((item, index) => (
                    <li key={index} className="px-4 dark:text-white">
                        <CheckBox label={items[index]} />
                    </li>
                ))}
            </div>
        </div>
    );
};


function FilterBar() {
    return (
        <div className="w-full md:sticky md:w-3/12  top-[100px] rounded shadow-[0_0_10px_rgba(0,0,0,0.2)] dark:bg-dark-secondary">
            <div className="">
                <p className="font-Rubik font-medium px-4 py-2.5 text-[rgb(35,35,35)] dark:text-white flex justify-between items-center border-b border-[#e3e3e3] dark:border-[rgba(225,225,225,0.1)]">
                    <span className="">Refined By</span>
                    <span className="text-[12px] hover:text-primary cursor-pointer">Reset All</span>
                </p>
            </div>
            <Dropdown title='Companies' items={['Job Mirror Consultancy', 'Engineering Group', 'Electric Co. ', 'Telecom industry ', 'Safety/ Health']} />
            <Dropdown title='Companies' items={['Job Mirror Consultancy', 'Engineering Group', 'Electric Co. ', 'Telecom industry ', 'Safety/ Health']} />
            <Dropdown title='Companies' items={['Job Mirror Consultancy', 'Engineering Group', 'Electric Co. ', 'Telecom industry ', 'Safety/ Health']} />
            <Dropdown title='Companies' items={['Job Mirror Consultancy', 'Engineering Group', 'Electric Co. ', 'Telecom industry ', 'Safety/ Health']} />


        </div>
    )
}