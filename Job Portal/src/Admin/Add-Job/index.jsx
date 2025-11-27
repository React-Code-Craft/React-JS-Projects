import React, { useState } from 'react'

// Import Components 
import Button, { BackButton } from '@Components/Atomic_UI/Button/Index'
import Input from '@Components/Atomic_UI/Input'
import { TextArea } from '@Components/Atomic_UI/Input'
import CustomSelect from '@Components/Atomic_UI/SelectBox'

// Import Icons
import { FaUpload } from "react-icons/fa";



export default function AddJob() {
    let [state, setstate] = useState({ title: '', email: '', type: "Part Time" })
    let exprienceOption = ["1 Year", "2 Year", "3 Year", "4 Year", "5 Year"];
    let jobType = ["Part Time", "Full Time", "Intern", "Freelance"]
    console.log(state)
    return (

        <div className='px-7.5 py-7.5 pb-10 dark:bg-dark-secondary rounded'>
            {/*===== Head Section ==== */}
            <div className="head-section flex items-center justify-between  border-b border-primary-1 dark:border-[#ffffff1a] mb-5 pb-7.5">
                <h1 className="text-xl font-Rubik font-medium text-title dark:text-white uppercase">Post a Job</h1>
                <BackButton />
            </div>

            {/*==== Form ====*/}
            <form>
                <div className="lg:flex items-center justify-between gap-6">
                    <Input label="Title" placeholder="Enter Job Title" style="lg:w-full"></Input>
                    <Input label="Tags" placeholder="Frontend Developer, React Js, Vue Js" style="lg:w-full"></Input>
                </div>

                <div className="mt-6">
                    <TextArea label="Discription" placeholder="Enter Job discription in detail." style="w-full min-h-[150px]"></TextArea>
                </div>

                <div className="md:flex items-center justify-between gap-6 mt-6">
                    <CustomSelect label="Job Type" options={jobType} selected={state.type}
                        setSelected={(val) => setstate({ ...state, type: val })} />

                    <CustomSelect label="Exprience" options={exprienceOption}></CustomSelect>
                </div>

                <div className="lg:flex items-center justify-between gap-6 mt-6">
                    <Input label="Minimum Salery" placeholder="$ 2500" style="lg:w-full"  ></Input>
                    <Input label="Maximum Salery" placeholder="$ 3000" style="lg:w-full"  ></Input>
                </div>


                <div className="lg:flex items-center justify-between gap-6 mt-6">
                    <Input label="Deadline" type="date" placeholder="Enter Job Title" style="appearance-none lg:w-full appearance-none"  ></Input>
                    <Input label="Location" placeholder="Sahiwal, Pakistan" style="lg:w-full"  ></Input>
                </div>

                <p className="block mb-2.5 font-Lato font-semibold leading-[1.75] text-title dark:text-white mt-6">Featured Image</p>
                <div className="w-full flex items-center justify-center p-3 gap-1 relative  dark:bg-[#0e0f20] rounded dark:text-[#999999] text-[#6f6f6f] shadow-normal">
                    <FaUpload />
                    <span>Upload file</span>
                    <input type="file" className='w-full h-full opacity-0 vi absolute top-0 left-0' />
                </div>

                <Button btnText="Submit" extraCss="mt-6">Submit</Button>
            </form>

        </div>
    )
}
