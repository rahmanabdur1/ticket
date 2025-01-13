"use client";

import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="shadow-[2px_2px_6px_0px_rgba(0,0,0,0.25)] h-[78px] m-[27px] rounded-[10px]">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center h-full">
                {/* Logo */}
                <div>
                    <Image
                        src="/ticket_nav.jpg"
                        width={86}
                        height={30}
                        alt="Tickyto Logo"
                    />
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-28">
                    <li className="text-[rgba(56,48,88,1)] leading-[32px] text-[32px] font-[family-name:var(--font-jomhuria)]">
                        Home
                    </li>
                    <li>
                        <a href="/events" className="hover:text-gray-600 leading-[32px] text-[32px] font-[family-name:var(--font-jomhuria)] text-[rgba(56,48,88,1)]">
                            Events
                        </a>
                    </li>
                    <li>
                        <a href="/verify" className="hover:text-gray-600 leading-[32px] text-[32px] font-[family-name:var(--font-jomhuria)] text-[rgba(56,48,88,1)]">
                            Ticket Verify
                        </a>
                    </li>
                    <li>
                        <a href="/blog" className="hover:text-gray-600 leading-[32px] text-[32px] font-[family-name:var(--font-jomhuria)] text-[rgba(56,48,88,1)]">
                            Blog
                        </a>
                    </li>
                    <li>
                        <a href="/about" className="hover:text-gray-600 leading-[32px] text-[32px] font-[family-name:var(--font-jomhuria)] text-[rgba(56,48,88,1)]">
                            About
                        </a>
                    </li>
                </ul>

                {/* Buttons */}
                <div className="hidden md:flex space-x-8">
                    <button className="px-4 py-2 bg-[rgba(228,228,228,1)] leading-[32px] text-[32px] font-[family-name:var(--font-jomhuria)] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] text-[rgba(76,70,70,1)] rounded-md hover:bg-gray-700">
                        Log In
                    </button>
                    <button className="px-4 py-2 bg-[rgba(93,83,134,1)] leading-[32px] text-[32px] font-[family-name:var(--font-jomhuria)] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] text-white rounded-md hover:bg-blue-500">
                        Register
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-gray-800"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                        />
                    </svg>
                </button>

                {/* Mobile Menu */}
                {isOpen && (
                    <ul className="md:hidden space-y-4 p-4 absolute top-[78px] left-0 w-full bg-white shadow-md rounded-lg">
                        <li>
                            <a href="/home" className="block leading-[32px] text-[32px] font-[family-name:var(--font-jomhuria)] text-[rgba(56,48,88,1)] hover:text-gray-600">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/events" className="block hover:text-gray-600 leading-[32px] text-[32px] font-[family-name:var(--font-jomhuria)] text-[rgba(56,48,88,1)]">
                                Events
                            </a>
                        </li>
                        <li>
                            <a href="/verify" className="block hover:text-gray-600 leading-[32px] text-[32px] font-[family-name:var(--font-jomhuria)] text-[rgba(56,48,88,1)]">
                                Ticket Verify
                            </a>
                        </li>
                        <li>
                            <a href="/blog" className="block hover:text-gray-600 leading-[32px] text-[32px] font-[family-name:var(--font-jomhuria)] text-[rgba(56,48,88,1)]">
                                Blog
                            </a>
                        </li>
                        <li>
                            <a href="/about" className="block hover:text-gray-600 leading-[32px] text-[32px] font-[family-name:var(--font-jomhuria)] text-[rgba(56,48,88,1)]">
                                About
                            </a>
                        </li>

                        {/* Buttons */}
                        <div className="flex space-x-4">
                            <button className="px-4 w-full py-2 bg-[rgba(228,228,228,1)] leading-[32px] text-[32px] font-[family-name:var(--font-jomhuria)] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] text-[rgba(76,70,70,1)] rounded-md hover:bg-gray-700">
                                Log In
                            </button>
                            <button className="w-full py-2 px-4 bg-[rgba(93,83,134,1)] leading-[32px] text-[32px] font-[family-name:var(--font-jomhuria)] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] text-white rounded-md hover:bg-blue-500">
                                Register
                            </button>
                        </div>
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
