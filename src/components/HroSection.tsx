import Image from "next/image";
import React from "react";

const HroSection = () => {
    return (
        <section className="container mx-auto h-[634px]   rounded-[15px] bg-[rgba(120,67,38,1)]">
            <div className=" flex flex-col lg:flex-row items-center ">
                {/* Left Side - Text Content */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    <p
                        className="text-white font-[400] text-[24px] font-[family-name:var(--font-jaro)] leading-[30px] text-[rgba(255,255,255,1)]"
                    >
                        Demo International Presents
                    </p>

                    <h1 className="font-[400] text-[64px] font-[family-name:var(--font-jaro)] leading-[80px] text-[rgba(255,255,255,1)]">
                        Rio Costanza's <br /> <span className="font-[400] text-[96px] font-[family-name:var(--font-jaro)] leading-[96px] text-[rgba(255,255,255,1)]">Solo Live</span> <span className="text-white font-[400] text-[24px] font-[family-name:var(--font-jeju-hallasan)] leading-[30px] text-[rgba(255,255,255,1)]">Performance</span>
                    </h1>
                    <p className="text-white font-[400] text-[24px] font-[family-name:var(--font-jaro)] leading-[30px] text-[rgba(255,255,255,1)]">AT DHAKA</p>
                    <div className="flex justify-center lg:justify-start space-x-4 mt-6">
                        <button className="px-4 py-3 bg-[rgba(82,71,55,1)] text-white rounded-md hover:bg-gray-700 font-[400] text-[32px] font-[family-name:var(--font-jaro)] leading-[40px] text-[rgba(255,255,255,1)]">
                            Book Now
                        </button>
                        <button className="px-4 py-3 bg-[rgba(49,29,20,1)] text-white rounded-md hover:bg-gray-700 font-[400] text-[32px] font-[family-name:var(--font-jaro)] leading-[40px] text-[rgba(255,255,255,1)]">
                            More Info
                        </button>
                    </div>
                </div>

                {/* Right Side - Image */}
                <div className=" w-[831px] relative">
                    <Image
                        src="/ticket-bg.png"
                        alt="Rio Costanza Solo Live"
                        width={781} // Added width
                        objectFit="cover"
                        height={6}
                        className="rounded-[15px_0px_0px_0px] h-[630px]   left-[524px] w-[100%] " // Custom styling
                    />
                    <div className="absolute top-0 right-0 bg-[rgba(93,83,134,1)] text-white text-xs px-3 py-1 rounded-md">
                        Featured Event
                    </div>
                </div>
            </div>

            {/* Event Details */}
            <div className="bg-[rgba(254,204,102,1)] py-2 rounded-[10px] ">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-800 space-y-4 md:space-y-0">
                    <p className="text-[rgba(59,2,2,1)] font-[400] text-[24px] font-[family-name:var(--font-jaro)] leading-[30px]">Rio Costanza's Solo Live Performance At Dhaka</p>

                    <div className="flex items-center space-x-2">
                        <svg width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.3333 2.66667V8.00001M8.66667 2.66667V8.00001M2 13.3333H26M4.66667 5.33334H23.3333C24.8061 5.33334 26 6.52725 26 8.00001V26.6667C26 28.1394 24.8061 29.3333 23.3333 29.3333H4.66667C3.19391 29.3333 2 28.1394 2 26.6667V8.00001C2 6.52725 3.19391 5.33334 4.66667 5.33334Z" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <span className="text-[rgba(59,2,2,1)] font-[400] text-[24px] font-[family-name:var(--font-jaro)] leading-[30px]">31st Jan 2025</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_3_35)">
                                <path d="M16 8.00001V16L21.3333 18.6667M29.3333 16C29.3333 23.3638 23.3638 29.3333 16 29.3333C8.6362 29.3333 2.66666 23.3638 2.66666 16C2.66666 8.63621 8.6362 2.66667 16 2.66667C23.3638 2.66667 29.3333 8.63621 29.3333 16Z" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_3_35">
                                    <rect width="32" height="32" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        <span className="text-[rgba(59,2,2,1)] font-[400] text-[24px] font-[family-name:var(--font-jaro)] leading-[30px]">Starts at 6 PM</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <svg width="20" height="28" viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.99999 27.3333C9.68888 27.3333 9.42221 27.2444 9.19999 27.0667C8.97777 26.8889 8.8111 26.6556 8.69999 26.3667C8.27777 25.1222 7.74443 23.9556 7.09999 22.8667C6.47777 21.7778 5.59999 20.5 4.46666 19.0333C3.33332 17.5667 2.4111 16.1667 1.69999 14.8333C1.0111 13.5 0.666656 11.8889 0.666656 10C0.666656 7.4 1.56666 5.2 3.36666 3.4C5.18888 1.57778 7.39999 0.666672 9.99999 0.666672C12.6 0.666672 14.8 1.57778 16.6 3.4C18.4222 5.2 19.3333 7.4 19.3333 10C19.3333 12.0222 18.9444 13.7111 18.1667 15.0667C17.4111 16.4 16.5333 17.7222 15.5333 19.0333C14.3333 20.6333 13.4222 21.9667 12.8 23.0333C12.2 24.0778 11.7 25.1889 11.3 26.3667C11.1889 26.6778 11.0111 26.9222 10.7667 27.1C10.5444 27.2556 10.2889 27.3333 9.99999 27.3333ZM9.99999 13.3333C10.9333 13.3333 11.7222 13.0111 12.3667 12.3667C13.0111 11.7222 13.3333 10.9333 13.3333 10C13.3333 9.06667 13.0111 8.27778 12.3667 7.63334C11.7222 6.98889 10.9333 6.66667 9.99999 6.66667C9.06666 6.66667 8.27777 6.98889 7.63332 7.63334C6.98888 8.27778 6.66666 9.06667 6.66666 10C6.66666 10.9333 6.98888 11.7222 7.63332 12.3667C8.27777 13.0111 9.06666 13.3333 9.99999 13.3333Z" fill="#1D1B20" />
                        </svg>

                        <span className="text-[rgba(59,2,2,1)] font-[400] text-[24px] font-[family-name:var(--font-jaro)] leading-[30px]">Demo Venue, Dhaka</span>

                    </div>
                </div>
            </div>

            <div className="mt-8">
                <div className="flex justify-center items-center p-6 space-x-6 bg-[rgba(228,228,228,1)] rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
                    {/* Event Name Input */}
                    <div className="flex bg-white p-4 w-72 space-x-4 rounded-lg">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 opacity-30"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                        <input
                            className="font-bold bg-gray-[400] outline-none"
                            type="text"
                            placeholder="Enter your desire event name......."
                        />
                    </div>

                    {/* Month Input */}
                    <div className="flex bg-white p-4 w-44 space-x-4 rounded-lg">
                        <svg
                            width="29"
                            height="31"
                            viewBox="0 0 29 31"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="opacity-30"
                        >
                            <path
                                d="M19.6667 2.58334V7.75001M9.33333 2.58334V7.75001M2.875 12.9167H26.125M5.45833 5.16668H23.5417C24.9684 5.16668 26.125 6.32327 26.125 7.75001V25.8333C26.125 27.2601 24.9684 28.4167 23.5417 28.4167H5.45833C4.0316 28.4167 2.875 27.2601 2.875 25.8333V7.75001C2.875 6.32327 4.0316 5.16668 5.45833 5.16668Z"
                                stroke="black"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <input
                            className="font-bold bg-gray-[400] outline-none"
                            type="text"
                            placeholder="Enter month"
                        />
                    </div>

                    {/* Search Button */}
                    <div className="bg-yellow-700 text-[20px] py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-300 cursor-pointer">
                        <span>SEARCH</span>
                    </div>
                </div>
            </div>

        </section >
    );
};

export default HroSection;
