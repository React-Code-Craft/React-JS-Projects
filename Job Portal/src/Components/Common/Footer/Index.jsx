import React from "react";
import { FaGoogle, FaInstagram, FaLinkedinIn, FaTwitter, } from "react-icons/fa";
import {
    TiSocialFacebook,

    // FaGoogle,


} from "react-icons/ti";    // <-- only TiSocialFacebook comes from Ti
import Button from "@Components/Atomic_UI/Button";
import logo from "@Assets/Logo/dark-mode-logo.png";

export default function Footer() {
    /* ---- link data so it’s DRY ---- */
    const faqCol1 = [
        "Privacy & Security",
        "Communications",
        "Lending Licenses",
        "How It Works",
        "Underwriting",
        "Funding Process",
    ];

    const faqCol2 = [
        "Terms of Service",
        "Referral Terms",
        "Support",
        "For Employers",
        "Contact Us",
        "Help Center",
    ];

    const findJobs = [
        'UK Jobs',
        'USA Jobs',
        'Canada Jobs',
        'China Jobs',
        'Astralia Jobs',
        'India Jobs'
    ]

    /* ---- tiny helper ---- */
    const renderLinks = (list) =>
        list.map((label) => (
            <li
                key={label}
                className="flex items-start text-footer_text hover:text-primary transition-half cursor-pointer text-sm font-Montserrat"
            >
                {/* em-dash as custom bullet */}
                <span className="text-primary mr-2">—</span>
                {label}
            </li>
        ));

    return (
        <footer className="bg-[#222845] w-full ">
            {/* ================= MAIN GRID ================= */}
            <div className="container mx-auto grid sm:gap-10 grid-cols-12 pt-10 pb-5 sm:pt-20 sm:pb-10 px-4 md:px-0">
                {/* -------- Left section -------- */}
                <div className="col-span-12 md:col-span-12 lg:col-span-4 xl:col-span-5">
                    {/* logo */}
                    <div className="w-[180px] mb-4">
                        <img src={logo} alt="JobBoard" className="w-full h-auto" />
                    </div>

                    {/* blurb */}
                    <p className="mb-5 font-lato text-footer_text w-full">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry and has been the industrys standard dummy text ever since.
                    </p>

                    {/* email capture */}
                    <div className="mb-5 flex w-full items-center justify-between">
                        <input
                            type="email"
                            placeholder="Your Email Address"
                            className="h-12.5 w-[calc(100%-110px)] rounded-[30px] border-2 border-footer-text bg-transparent py-2.5 px-5 font-lato text-white placeholder:text-footer-text/70 focus:outline-none"
                        />
                        <Button btnText="Subscribe" extraCss="rounded-[30px] py-3.5" />
                    </div>

                    {/* social icons */}
                    {/* social icons */}
                    <ul className="flex">
                        {/* Facebook */}
                        <li className="mr-2 flex size-10 items-center justify-center rounded-full bg-white text-[22px] transition-colors hover:bg-[#1877F2] hover:text-white">
                            <TiSocialFacebook />
                        </li>

                        {/* LinkedIn */}
                        <li className="mr-2 flex size-10 items-center justify-center rounded-full bg-white text-[18px] transition-colors hover:bg-[#0A66C2] hover:text-white">
                            <FaLinkedinIn />
                        </li>

                        {/* Google (GMail / G-suite red) */}
                        <li className="mr-2 flex size-10 items-center justify-center rounded-full bg-white text-[17px] transition-colors hover:bg-[#EA4335] hover:text-white">
                            <FaGoogle />
                        </li>

                        {/* Twitter / X */}
                        <li className="mr-2 flex size-10 items-center justify-center rounded-full bg-white text-[17px] transition-colors hover:bg-[#1DA1F2] hover:text-white">
                            <FaTwitter />
                        </li>

                        {/* Instagram (picks a representative pink-red from the gradient) */}
                        <li className="mr-2 flex size-10 items-center justify-center rounded-full bg-white text-[20px] transition-colors hover:bg-[#E4405F] hover:text-white">
                            <FaInstagram />
                        </li>
                    </ul>

                </div>

                {/* -------- Middle section (FAQ heading + first column) -------- */}
                <div className="col-span-12 mt-8 sm:mt-0 md:col-span-8 lg:col-span-5 xl:col-span-5">
                    <h3 className="inline-block rounded-sm px-2 py-1 font-Rubik text-xl font-medium capitalize tracking-wide text-white">
                        Frequently Asked Questions
                    </h3>
                    <div className=" flex items-center ">
                        <ul className="mt-5 space-y-2">{renderLinks(faqCol1)}</ul>
                        <ul className="mt-5 space-y-2 ml-10 sm:ml-15">{renderLinks(faqCol2)}</ul>
                    </div>

                </div>

                {/* -------- Right section (second FAQ column) -------- */}
                <div className="col-span-12 md:col-span-4 lg:col-span-3 xl:col-span-2">
                    <h3 className="inline-block rounded-sm px-2 py-1 text-xl font-medium capitalize tracking-wide text-white">
                        Find a Job
                    </h3>
                    <ul className="mt-5 space-y-2">{renderLinks(findJobs)}</ul>
                </div>
            </div>

            {/* ================= bottom strip ================= */}
            <div className="w-full bg-[#171d36] py-5 text-center">
                <span className="flex items-center justify-center font-lato text-[15px] capitalize text-footer_text">
                    © Copyright 2025 by
                    JobBoard — All rights reserved.
                </span>
            </div>
        </footer>
    );
}
