import React, { useState, useEffect } from 'react'

import { FaAngleRight } from "react-icons/fa";
import { FaSearch, FaAngleDown, FaFilter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaTag } from "react-icons/fa6";


import Button from '@Components/Atomic_UI/Button/Index.jsx'
import { useSelector, useDispatch } from 'react-redux';
import { fetchJobs } from '../../../Slices/Posts';


export default function SearchBar() {
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchJobs())
    }, []);

    let Data = useSelector((state) => state.posts.jobs);
    // console.log(Data[0].tags.find())
    console.log(Data)

    let [input, setinput] = useState({ title: '', location: '', tags: '' });

    let [search, setsearch] = useState([])





    function handleSubmit(e) {
        e.preventDefault();
        console.log("form is submited.");
        if (input.title != '' && input.location != '') {
            let searchResult = Data.filter((Job) => Job.title.toLowerCase().includes(input.title.toLowerCase()) || Job.location.toLowerCase().includes(input.location.toLowerCase()));
            setsearch(searchResult);
            console.log(searchResult)
        }

        // setsearch(searchResult)
    }




    return (
        <>
            <section className='browse-all-jobs h-[300px]'>
                <div className="overlay size-full z-10">
                    <main className="container mx-auto   size-full relative">
                        <div className="flex flex-col items-center  justify-center size-full">
                            <h1 className="font-Rubik font-medium text-4xl text-white">
                                Browse Job Filter List
                            </h1>
                            <h4 className="font-Montserrat font-medium text-lg text-white flex items-center mt-4">
                                Home  Browse {<FaAngleRight className='text-lg' />} Job Filter List
                            </h4>
                        </div>

                        {/*==== Search And Filter Form ====*/}
                        <div className="search-filter-form container p-8 shadow-[0px_0px_20px_0_rgba(0,0,0,0.2)] rounded abs z-10 bg-white dark:bg-dark-secondary dark:text-white">
                            <form className=' block lg:flex items-end justify-between '>

                                <div className="relative border-b-2 border-primary w-full lg:w-[48%] xl:w-[27%]">
                                    <input type="text" value={input.title} onChange={(e) => setinput({ ...input, title: e.target.value })} placeholder='' className='input w-full py-2  ' />
                                    <label htmlFor="title" className='labal font-Rubik dark:text-white z-20 text-[rgb(85,85,85)]'>Job Title, Keyword or Phrase</label>
                                    <FaSearch className='absolute right-0 bottom-3 text-primary text-base dark:text-white' />
                                </div>

                                <div className="relative border-b-2 border-primary w-full lg:w-[48%] xl:w-[27%] ">
                                    <input type="text" value={input.location} onChange={(e) => setinput({ ...input, location: e.target.value })} placeholder='' className='input w-full py-2  ' />
                                    <label htmlFor="title" className='labal font-Rubik'>City, State or ZIP</label>
                                    <FaLocationDot className='absolute right-0 bottom-3 text-primary text-base dark:text-white' />
                                </div>

                                <div className="relative border-b-2 border-primary w-full lg:w-[48%] xl:w-[27%]">
                                    <input type="text" value={input.tags} onChange={(e) => setinput({ ...input, tags: e.target.value })} placeholder='' className='input w-full py-2  ' />
                                    <label htmlFor="title" className='labal font-Rubik'>Tags</label>
                                    <FaTag className='absolute right-0 bottom-3 text-primary text-base dark:text-white' />
                                </div>

                                <Button btnText='Find Job' type="submit" onSubmit={handleSubmit} extraCss='font-Roboto px-10 py-4 w-full lg:w-auto' />
                            </form>
                        </div>

                    </main>
                </div>

            </section>

            <section className='mt-10'>
                {(search.length == 0) ? Data.map : search.map}

            </section>
        </>
    )
}
