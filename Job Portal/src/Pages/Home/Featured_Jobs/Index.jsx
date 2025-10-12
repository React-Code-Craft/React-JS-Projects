import React from 'react'
import Button from '@Components/Atomic_UI/Button/'

export default function Featured_Jobs() {
    return (
        <section className="py-10 pt-30 dark:bg-dark-primary">
            <div className="container px-4 mx-auto sm:px-0">
                {/* ----Section Head---- */}
                <div className="flex items-end justify-between mb-10 dark:text-white">
                    <div>
                        <h6 className="font-Rubik text-primary">Latest Job</h6>
                        <h1 className="font-Rubik leading-none text-title dark:text-inherit xl:text-[45px] xl:font-semibold">
                            New Job Offers
                        </h1>
                        <p className="font-lato text-title dark:text-inherit">
                            More Than +500 Job Offers Every Day
                        </p>
                    </div>
                    <Button btnText={"Post a Job"} fontFamily="Rubik" fontSize="16" fontWeight="400" borderRadius='6' padding="px-4 py-2.5" />
                </div>

                {/* ----All Job Section---- */}
                <div>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                        {/* ---------- Card 1 ---------- */}
                        <div className="bg-white border-2 border-transparent dark:bg-dark-secondary group relative rounded-md p-7.5 shadow-3xl transition-half hover:border-primary">
                            {/* date + badge */}
                            <div className="absolute right-2.5 top-2.5 flex text-right">
                                <p className="font-Rubik text-[11px] text-gray-400 dark:text-white">
                                    2 Day ago
                                </p>
                                <span className="ml-1.5 inline-block cursor-pointer rounded-[2px] bg-light-bg-2 py-0.5 px-1.5 font-Rubik text-[11px] font-medium text-primary">
                                    Full Time
                                </span>
                            </div>

                            {/* logo + titles */}
                            <div className="flex items-start gap-4">
                                <div className="border border-[rgba(0,0,0,0.1)] mb-4 size-[55px] rounded-lg bg-white p-2">
                                    <img
                                        src="https://logo.clearbit.com/google.com"
                                        alt="Google logo"
                                        className="w-full h-auto "
                                    />
                                </div>
                                <div>
                                    <h3 className="font-medium font-Rubik text-title dark:text-primary">
                                        Google , New York
                                    </h3>
                                    <p className="font-lato text-text dark:text-white">
                                        Sr. Product Designer
                                    </p>
                                </div>
                            </div>

                            {/* description */}
                            <p className="mb-5 text-sm font-lato text-text dark:text-white">
                                It is a long established fact that a reader of a page when
                                looking at its layout.
                            </p>

                            {/* actions */}
                            <div className="flex items-center justify-between mt-6">
                                <Button btnText={"Apply Now"} fontFamily="Rubik" fontSize="14" fontWeight="500" padding="py-3 px-5" borderRadius={2} />
                                <p className="text-lg font-medium font-Rubik text-primary">
                                    $560{" "}
                                    <span className="text-sm font-medium text-gray-500 font-Rubik dark:text-white">
                                        / Hour
                                    </span>
                                </p>
                            </div>
                        </div>

                        {/* ---------- Card 2 ---------- */}
                        <div className="bg-white border-2 border-transparent dark:bg-dark-light-background group relative rounded-md p-7.5 shadow-3xl transition-half hover:border-primary">
                            <div className="absolute right-2.5 top-2.5 flex text-right">
                                <p className="font-Rubik text-[11px] text-gray-400 dark:text-white">
                                    1 Day ago
                                </p>
                                <span className="ml-1.5 inline-block cursor-pointer rounded-[2px] bg-light-bg-2 py-0.5 px-1.5 font-Rubik text-[11px] font-medium text-primary">
                                    Full Time
                                </span>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="border border-[rgba(0,0,0,0.1)] mb-4 size-[55px] rounded-lg bg-white p-2">
                                    <img
                                        src="https://logo.clearbit.com/microsoft.com"
                                        alt="Microsoft logo"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-medium font-Rubik text-title dark:text-primary">
                                        Microsoft , California
                                    </h3>
                                    <p className="font-lato text-text dark:text-white">
                                        Web Designer
                                    </p>
                                </div>
                            </div>

                            <p className="mb-5 text-sm font-lato text-text dark:text-white">
                                It is a long established fact that a reader of a page when
                                looking at its layout.
                            </p>

                            <div className="flex items-center justify-between mt-6">
                                <Button btnText={"Apply Now"} varient="jobSection" />
                                <p className="text-lg font-medium font-Rubik text-primary">
                                    $560{" "}
                                    <span className="text-sm font-medium text-gray-500 font-Rubik dark:text-white">
                                        / Hour
                                    </span>
                                </p>
                            </div>
                        </div>

                        {/* ---------- Card 3 ---------- */}
                        <div className="bg-white border-2 border-transparent dark:bg-dark-light-background group relative rounded-md p-7.5 shadow-3xl transition-half hover:border-primary">
                            <div className="absolute right-2.5 top-2.5 flex text-right">
                                <p className="font-Rubik text-[11px] text-gray-400 dark:text-white">
                                    2 Day ago
                                </p>
                                <span className="ml-1.5 inline-block cursor-pointer rounded-[2px] bg-light-bg-2 py-0.5 px-1.5 font-Rubik text-[11px] font-medium text-primary">
                                    Full Time
                                </span>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="border border-[rgba(0,0,0,0.1)] mb-4 size-[55px] rounded-lg bg-white p-2">
                                    <img
                                        src="https://logo.clearbit.com/amazon.com"
                                        alt="Amazon logo"
                                        className="w-full h-auto rounded-sm"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-medium font-Rubik text-title dark:text-primary">
                                        Amazon , Southfield
                                    </h3>
                                    <p className="font-lato text-text dark:text-white">
                                        IT Management
                                    </p>
                                </div>
                            </div>

                            <p className="mb-5 text-sm font-lato text-text dark:text-white">
                                It is a long established fact that a reader of a page when
                                looking at its layout.
                            </p>

                            <div className="flex items-center justify-between mt-6">
                                <Button btnText={"Apply Now"} varient="jobSection" />
                                <p className="text-lg font-medium font-Rubik text-primary">
                                    $560{" "}
                                    <span className="text-sm font-medium text-gray-500 font-Rubik dark:text-white">
                                        / Hour
                                    </span>
                                </p>
                            </div>
                        </div>

                        {/* ---------- Card 4 ---------- */}
                        <div className="bg-white border-2 border-transparent dark:bg-dark-light-background group relative rounded-md p-7.5 shadow-3xl transition-half hover:border-primary">
                            <div className="absolute right-2.5 top-2.5 flex text-right">
                                <p className="font-Rubik text-[11px] text-gray-400 dark:text-white">
                                    2 Day ago
                                </p>
                                <span className="ml-1.5 inline-block cursor-pointer rounded-[2px] bg-light-bg-2 py-0.5 px-1.5 font-Rubik text-[11px] font-medium text-primary">
                                    Full Time
                                </span>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="border border-[rgba(0,0,0,0.1)] mb-4 size-[55px] rounded-lg bg-white p-2">
                                    <img
                                        src="https://logo.clearbit.com/github.com"
                                        alt="Github logo"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-medium font-Rubik text-title dark:text-primary">
                                        Github , Southfield
                                    </h3>
                                    <p className="font-lato text-text dark:text-white">
                                        Sr. Product Designer
                                    </p>
                                </div>
                            </div>

                            <p className="mb-5 text-sm font-lato text-text dark:text-white">
                                It is a long established fact that a reader of a page when
                                looking at its layout.
                            </p>

                            <div className="flex items-center justify-between mt-6">
                                <Button btnText={"Apply Now"} varient="jobSection" />
                                <p className="text-lg font-medium font-Rubik text-primary">
                                    $560{" "}
                                    <span className="text-sm font-medium text-gray-500 font-Rubik dark:text-white">
                                        / Hour
                                    </span>
                                </p>
                            </div>
                        </div>

                        {/* ---------- Card 5 ---------- */}
                        <div className="bg-white border-2 border-transparent dark:bg-dark-light-background group relative rounded-md p-7.5 shadow-3xl transition-half hover:border-primary">
                            <div className="absolute right-2.5 top-2.5 flex text-right">
                                <p className="font-Rubik text-[11px] text-gray-400 dark:text-white">
                                    1 Day ago
                                </p>
                                <span className="ml-1.5 inline-block cursor-pointer rounded-[2px] bg-light-bg-2 py-0.5 px-1.5 font-Rubik text-[11px] font-medium text-primary">
                                    Full Time
                                </span>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="border border-[rgba(0,0,0,0.1)] mb-4 size-[55px] rounded-lg bg-white p-2">
                                    <img
                                        src="https://logo.clearbit.com/dropbox.com"
                                        alt="Dropbox logo"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-medium font-Rubik text-title dark:text-primary">
                                        Dropbox , New York
                                    </h3>
                                    <p className="font-lato text-text dark:text-white">
                                        Web Designer
                                    </p>
                                </div>
                            </div>

                            <p className="mb-5 text-sm font-lato text-text dark:text-white">
                                It is a long established fact that a reader of a page when
                                looking at its layout.
                            </p>

                            <div className="flex items-center justify-between mt-6">
                                <Button btnText={"Apply Now"} varient="jobSection" />
                                <p className="text-lg font-medium font-Rubik text-primary">
                                    $560{" "}
                                    <span className="text-sm font-medium text-gray-500 font-Rubik dark:text-white">
                                        / Hour
                                    </span>
                                </p>
                            </div>
                        </div>

                        {/* ---------- Card 6 ---------- */}
                        <div className="bg-white border-2 border-transparent dark:bg-dark-light-background group relative rounded-md p-7.5 shadow-3xl transition-half hover:border-primary">
                            <div className="absolute right-2.5 top-2.5 flex text-right">
                                <p className="font-Rubik text-[11px] text-gray-400 dark:text-white">
                                    2 Day ago
                                </p>
                                <span className="ml-1.5 inline-block cursor-pointer rounded-[2px] bg-light-bg-2 py-0.5 px-1.5 font-Rubik text-[11px] font-medium text-primary">
                                    Full Time
                                </span>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="border border-[rgba(0,0,0,0.1)] mb-4 size-[55px] rounded-lg bg-white p-2">
                                    <img
                                        src="https://logo.clearbit.com/adobe.com"
                                        alt="Adobe logo"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-medium font-Rubik text-title dark:text-primary">
                                        Adobe , California
                                    </h3>
                                    <p className="font-lato text-text dark:text-white">
                                        IT Management
                                    </p>
                                </div>
                            </div>

                            <p className="mb-5 text-sm font-lato text-text dark:text-white">
                                It is a long established fact that a reader of a page when
                                looking at its layout.
                            </p>

                            <div className="flex items-center justify-between mt-6">
                                <Button btnText={"Apply Now"} varient="jobSection" />
                                <p className="text-lg font-medium font-Rubik text-primary">
                                    $560{" "}
                                    <span className="text-sm font-medium text-gray-500 font-Rubik dark:text-white">
                                        / Hour
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center mt-10 text-center">
                        <Button btnText={'View All Job'} varient="headSection" />
                    </div>
                </div>
            </div>
        </section>
    )
}
