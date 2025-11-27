// import React, { useEffect, useState } from 'react'
import Button from '@Components/Atomic_UI/Button/Index'

import { FaAngleRight } from 'react-icons/fa6'
import { IoLocationOutline } from 'react-icons/io5';
import { FiDollarSign } from 'react-icons/fi';
import { IoShieldCheckmarkOutline } from 'react-icons/io5';
// import { useLocation, useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchJobs } from '../../Slices/Posts';
// // import { Data } from '../../Data/Data';

// export default function Post() {
//     let dispatch = useDispatch()
//     // let dispathc =

//     useEffect(() => {
//         dispatch(fetchJobs());
//         let url = useLocation();
//         let param = new URLSearchParams(url.search);
//         let id = param.get("id")
//         let AllJob = useSelector((state) => state.posts.jobs);


//         let status = useSelector((state) => state.posts.requestState);
//         console.log(AllJob, status);
//         let findJob = AllJob?.find((item) => item.id == id)
//         // let Job =
//         let [Job, setJob] = useState(findJob)
//         // console.log(singleJob)

//         // consonle.log(Job);
//         console.log(Job)

//     }, []);





//     // useEffect(() => {
//     //     if (!AllJob || AllJob.length === 0) {
//     //         dispatch(fetchJobs()); // your Redux thunk or async action
//     //     }
//     // }, [dispatch, AllJob]);







//     return (
//         <>
//             {/* <Data /> */}
//             <section className="mt-20">
//                 <div className='browse-all-jobs h-[300px]'>
//                     <div className="overlay size-full z-10">
//                         <main className="container mx-auto   size-full relative">
//                             <div className="flex flex-col items-center  justify-center size-full my-20">
//                                 <h1 className="font-Rubik font-medium text-4xl text-white">
//                                     Browse Job Filter List
//                                 </h1>
//                                 <h4 className="font-Montserrat font-medium text-lg text-white flex items-center mt-4">
//                                     Home  Browse {<FaAngleRight className='text-lg' />} Job Filter List
//                                 </h4>
//                                 <h3>
//                                     <span>
//                                         <Button extraCss='dkdksf' />
//                                     </span>
//                                 </h3>
//                             </div>
//                         </main>
//                     </div>
//                 </div>


//             </section>
//             {(!Job) ? <div className="text-center text-gray-500 mt-10">Loading...</div> :


//                 <section className="dark:bg-dark-primary px-4">
//                     <div className="container mx-auto  py-20 md:flex  items-start justify-between gap-6">
//                         {/*====SideBar=====*/}
//                         <div className="w-full md:w-4/12 md:sticky top-20 pb-10">
//                             <img src={Job.heroImage} className='w-full h-auto' />
//                             <div className="border border-[#ebedf2] dark:border-[rgba(225,225,225,0.1)]  mt-8 p-6 rounded">
//                                 <h1 className="font-Rubik font-medium text-2xl dark:text-white ">Job Detail</h1>

//                                 <li className='list-none flex  items-start mt-3'>
//                                     <span className='flex items-center leading-[24px]'>
//                                         <IoLocationOutline className='text-2xl text-[rgb(153,153,153)] mr-3 mt-1.5' />
//                                     </span>

//                                     <span className='block '>
//                                         <span className="block font-Lato font-semibold text-lg dark:text-white">Address</span>
//                                         <span className="text-[rgb(111,111,111)] dark:text-white">{Job.location}</span>
//                                     </span>
//                                 </li>

//                                 <li className='list-none flex  items-start mt-3'>
//                                     <span className='flex items-center leading-[24px]'>
//                                         <FiDollarSign className='text-2xl text-[rgb(153,153,153)] mr-3 mt-1.5' />
//                                     </span>

//                                     <span className='block '>
//                                         <span className="block font-Lato font-semibold text-lg dark:text-white">Salery</span>
//                                         <span className="text-[rgb(111,111,111)] dark:text-white">$ {Job.startingSalary} Monthly</span>
//                                     </span>
//                                 </li>

//                                 <li className='list-none flex  items-start mt-3'>
//                                     <span className='flex items-center leading-[24px]'>
//                                         <IoShieldCheckmarkOutline className='text-2xl text-[rgb(153,153,153)] mr-3 mt-1.5' />
//                                     </span>

//                                     <span className='block '>
//                                         <span className="block font-Lato font-semibold text-lg dark:text-white">Exprience</span>
//                                         <span className="text-[rgb(111,111,111)] dark:text-white">{Job.experienceLevel} </span>
//                                     </span>
//                                 </li>

//                             </div>
//                         </div>
//                         {/*====Main Content=====*/}
//                         <div className="w-full md:w-8/12">
//                             <h1 className="font-Rubik font-medium text-[28px] text-title dark:text-white">{Job.title}</h1>
//                             <p className="list-none flex items-center gap-3">
//                                 <li className="font-Lato text-[rgb(111,111,111)]">
//                                     <strong className='text-title dark:text-white mr-1.5'>Education</strong>
//                                     {Job.title}
//                                 </li>

//                                 <li className="font-Lato text-[rgb(111,111,111)]">
//                                     <strong className='text-title dark:text-white mr-1.5'>Deadline</strong>
//                                     {Job.deadline}
//                                 </li>

//                                 <li className="font-Lato text-[rgb(111,111,111)] flex items-center">
//                                     <strong className='text-title dark:text-white mr-1.5'><IoLocationOutline /></strong>
//                                     {Job.location}
//                                 </li>


//                             </p>

//                             <p className="font-Lato text-[rgb(111,111,111)] mt-6">
//                                 Lorem, ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, deleniti. Iure quam voluptatum, esse cum nisi id laudantium quaerat obcaecati vero perferendis rerum facere unde doloribus nam. Obcaecati, exercitationem tenetur! elit. Dolorum quisquam, dolores quis aliquam doloribus qui quo pariatur nobis, nemo sint vitae laboriosam praesentium laudantium voluptatibus nulla modi odit veritatis asperiores autem in. Consequuntur molestias temporibus, neque vel aut ratione distinctio nulla corporis. Tenetur ab tempora vel autem sapiente consequuntur neque?
//                             </p>

//                             <h2 className="font-Rubik font-medium text-xl text-title mt-8 dark:text-white border-b-2 border-[#d3d3d3] dark:border-[rgba(225,225,225,0.1)] mb-7 pb-2">Job Discription</h2>
//                             <p className="font-Lato text-[rgb(111,111,111)]">
//                                 {Job.description}
//                             </p>

//                             <h2 className="font-Rubik font-medium text-xl text-title mt-8 dark:text-white border-b-2 border-[#d3d3d3] dark:border-[rgba(225,225,225,0.1)] mb-7 pb-2">Skill Requirement</h2>
//                             <ul className='list-decimal font-Lato text-[rgb(111,111,111)] ml-3 flex gap-10'>
//                                 {Job.skills.map((list) =>
//                                     <li className='py-2'>{list}</li>
//                                 )}
//                             </ul>

//                             <h2 className="font-Rubik font-medium text-xl text-title mt-8 dark:text-white border-b-2 border-[#d3d3d3] dark:border-[rgba(225,225,225,0.1)] mb-7 pb-2">How to Apply</h2>
//                             <p className="font-Lato text-[rgb(111,111,111)]">
//                                 Lorem, ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, deleniti. Iure quam voluptatum, esse cum nisi id laudantium quaerat obcaecati vero perferendis rerum facere unde doloribus nam. Obcaecati, exercitationem tenetur! elit. Dolorum quisquam, dolores quis aliquam doloribus qui quo pariatur nobis, nemo sint vitae laboriosam praesentium laudantium voluptatibus nulla modi odit veritatis asperiores autem in. Consequuntur molestias temporibus, neque vel aut ratione distinctio nulla corporis. Tenetur ab tempora vel autem sapiente consequuntur neque?
//                             </p>

//                             <h2 className="font-Rubik font-medium text-xl text-title mt-8 dark:text-white border-b-2 border-[#d3d3d3] dark:border-[rgba(225,225,225,0.1)] mb-7 pb-2">Job Requirement</h2>
//                             <ul className='list-decimal font-Lato text-[rgb(111,111,111)] ml-3'>
//                                 {Job.requirements.map((list) =>
//                                     <li className='py-2'>{list}</li>
//                                 )}
//                             </ul>
//                             <Button btnText='Apply This Job' extraCss='mt-4 pl-6' />
//                         </div>
//                     </div>
//                 </section>
//             }

//         </>
//     )
// }

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchJobs } from "../../Slices/Posts/index";

export default function Post() {
    const dispatch = useDispatch();
    const location = useLocation();

    const Alljobs = useSelector((state) => state.posts.jobs);
    const status = useSelector((state) => state.posts.requestState);

    const [Job, setJob] = useState(null);

    const [relatedjob, setrelatedjob] = useState(null);

    // 1️⃣ Fetch jobs when component mounts
    useEffect(() => {
        dispatch(fetchJobs());
    }, [dispatch]);

    // 2️⃣ Extract ID from URL
    const params = new URLSearchParams(location.search);
    const id = params.get("id");

    // 3️⃣ When jobs update, find the specific job
    useEffect(() => {
        if (Alljobs?.length > 0 && id) {
            const foundJob = Alljobs.find((item) => item.id == id);
            setJob(foundJob);



        }
    }, [Alljobs, id]);



    // console.log("All Jobs:", jobs);
    // console.log("Status:", status);
    // console.log("Current Job:", job);

    return (
        <>
            <section className="">
                <div className='browse-all-jobs h-[300px]'>
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
                        </main>
                    </div>
                </div>


            </section>
            {status === "loading" && <p className='mt-40'>Loading...</p>}
            {status === "failed" && <p className='mt-40'>Error loading jobs.</p>}
            {Job && (
                <section className="dark:bg-dark-primary px-4">
                    <div className="container mx-auto  py-20 md:flex  items-start justify-between gap-6">
                        {/*====SideBar=====*/}
                        <div className="w-full md:w-4/12 md:sticky top-20 pb-10">
                            <img src={Job.heroImage} className='w-full h-auto' alt={Job.title} />
                            <div className="border border-[#ebedf2] dark:border-[rgba(225,225,225,0.1)]  mt-8 p-6 rounded">
                                <h1 className="font-Rubik font-medium text-2xl dark:text-white ">Job Detail</h1>
                                <li className='list-none flex  items-start mt-3'>
                                    <span className='flex items-center leading-[24px]'>
                                        <IoLocationOutline className='text-2xl text-[rgb(153,153,153)] mr-3 mt-1.5' />
                                    </span>

                                    <span className='block '>
                                        <span className="block font-Lato font-semibold text-lg dark:text-white">Address</span>
                                        <span className="text-[rgb(111,111,111)] dark:text-white">{Job.location}</span>
                                    </span>
                                </li>

                                <li className='list-none flex  items-start mt-3'>
                                    <span className='flex items-center leading-[24px]'>
                                        <FiDollarSign className='text-2xl text-[rgb(153,153,153)] mr-3 mt-1.5' />
                                    </span>
                                    <span className='block '>
                                        <span className="block font-Lato font-semibold text-lg dark:text-white">Salery</span>
                                        <span className="text-[rgb(111,111,111)] dark:text-white">$ {Job.startingSalary} Monthly</span>
                                    </span>
                                </li>

                                <li className='list-none flex  items-start mt-3'>
                                    <span className='flex items-center leading-[24px]'>
                                        <IoShieldCheckmarkOutline className='text-2xl text-[rgb(153,153,153)] mr-3 mt-1.5' />
                                    </span>

                                    <span className='block '>
                                        <span className="block font-Lato font-semibold text-lg dark:text-white">Exprience</span>
                                        <span className="text-[rgb(111,111,111)] dark:text-white">{Job.experienceLevel} </span>
                                    </span>
                                </li>

                            </div>
                        </div>
                        {/*====Main Content=====*/}
                        <div className="w-full md:w-8/12">
                            <h1 className="font-Rubik font-medium text-[28px] text-title dark:text-white">{Job.title}</h1>
                            <p className="list-none flex items-center gap-3">
                                <li className="font-Lato text-[rgb(111,111,111)]">
                                    <strong className='text-title dark:text-white mr-1.5'>Education</strong>
                                    {Job.title}
                                </li>

                                <li className="font-Lato text-[rgb(111,111,111)]">
                                    <strong className='text-title dark:text-white mr-1.5'>Deadline</strong>
                                    {Job.deadline}
                                </li>

                                <li className="font-Lato text-[rgb(111,111,111)] flex items-center">
                                    <strong className='text-title dark:text-white mr-1.5'><IoLocationOutline /></strong>
                                    {Job.location}
                                </li>


                            </p>

                            <p className="font-Lato text-[rgb(111,111,111)] mt-6">
                                Lorem, ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, deleniti. Iure quam voluptatum, esse cum nisi id laudantium quaerat obcaecati vero perferendis rerum facere unde doloribus nam. Obcaecati, exercitationem tenetur! elit. Dolorum quisquam, dolores quis aliquam doloribus qui quo pariatur nobis, nemo sint vitae laboriosam praesentium laudantium voluptatibus nulla modi odit veritatis asperiores autem in. Consequuntur molestias temporibus, neque vel aut ratione distinctio nulla corporis. Tenetur ab tempora vel autem sapiente consequuntur neque?
                            </p>

                            <h2 className="font-Rubik font-medium text-xl text-title mt-8 dark:text-white border-b-2 border-[#d3d3d3] dark:border-[rgba(225,225,225,0.1)] mb-7 pb-2">Job Discription</h2>
                            <p className="font-Lato text-[rgb(111,111,111)]">
                                {Job.description}
                            </p>

                            <h2 className="font-Rubik font-medium text-xl text-title mt-8 dark:text-white border-b-2 border-[#d3d3d3] dark:border-[rgba(225,225,225,0.1)] mb-7 pb-2">Skill Requirement</h2>
                            <ul className='list-decimal font-Lato text-[rgb(111,111,111)] ml-3 flex gap-10'>
                                {Job.skills.map((list) =>
                                    <li className='py-2'>{list}</li>
                                )}
                            </ul>

                            <h2 className="font-Rubik font-medium text-xl text-title mt-8 dark:text-white border-b-2 border-[#d3d3d3] dark:border-[rgba(225,225,225,0.1)] mb-7 pb-2">How to Apply</h2>
                            <p className="font-Lato text-[rgb(111,111,111)]">
                                Lorem, ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, deleniti. Iure quam voluptatum, esse cum nisi id laudantium quaerat obcaecati vero perferendis rerum facere unde doloribus nam. Obcaecati, exercitationem tenetur! elit. Dolorum quisquam, dolores quis aliquam doloribus qui quo pariatur nobis, nemo sint vitae laboriosam praesentium laudantium voluptatibus nulla modi odit veritatis asperiores autem in. Consequuntur molestias temporibus, neque vel aut ratione distinctio nulla corporis. Tenetur ab tempora vel autem sapiente consequuntur neque?
                            </p>

                            <h2 className="font-Rubik font-medium text-xl text-title mt-8 dark:text-white border-b-2 border-[#d3d3d3] dark:border-[rgba(225,225,225,0.1)] mb-7 pb-2">Job Requirement</h2>
                            <ul className='list-decimal font-Lato text-[rgb(111,111,111)] ml-3'>
                                {Job.requirements.map((list) =>
                                    <li className='py-2'>{list}</li>
                                )}
                            </ul>
                            <Button btnText='Apply This Job' extraCss='mt-4 pl-6' />
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}


