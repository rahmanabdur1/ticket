"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="shadow-[2px_2px_6px_0px_rgba(0,0,0,0.25)] h-[100px] sm:m-[27px] m-[7px] rounded-[10px] relative">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center h-full">
                {/* Logo */}
                <div>
                    <Image
                        src="/ticket_nav.jpg"
                        width={83}
                        height={28}
                        alt="Tickyto Logo"
                    />
                </div>
                <ul className="hidden lg:flex space-x-16">
                    <li>
                        <Link href="/" className="text-[rgba(56,48,88,1)] hover:text-gray-400 text-center leading-[29px] text-[29px] font-[family-name:var(--font-jomhuria)] transition-all duration-300 ease-in-out">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/events" className="hover:text-gray-400 text-center leading-[29px] text-[29px] font-[family-name:var(--font-jomhuria)] text-[rgba(56,48,88,1)] transition-all duration-300 ease-in-out">
                            Events
                        </Link>
                    </li>
                    <li>
                        <Link href="/verify" className="hover:text-gray-400 text-center leading-[29px] text-[29px] font-[family-name:var(--font-jomhuria)] text-[rgba(56,48,88,1)] transition-all duration-300 ease-in-out">
                            Ticket Verify
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog" className="hover:text-gray-400 text-center leading-[29px] text-[29px] font-[family-name:var(--font-jomhuria)] text-[rgba(56,48,88,1)] transition-all duration-300 ease-in-out">
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:text-gray-400 text-center leading-[29px] text-[29px] font-[family-name:var(--font-jomhuria)] text-[rgba(56,48,88,1)] transition-all duration-300 ease-in-out">
                            About
                        </Link>
                    </li>
                </ul>

                {/* Buttons */}
                <div className="hidden lg:flex space-x-8">
                    <button className="px-3 py-1.5 bg-[rgba(228,228,228,1)] text-center leading-[29px] text-[29px] font-[family-name:var(--font-jomhuria)] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] text-[rgba(76,70,70,1)] rounded-md hover:bg-[rgba(93,83,134,1)] hover:text-white transition-all duration-300 ease-in-out">
                        Log In
                    </button>
                    <button className="px-3 py-1.5 bg-[rgba(93,83,134,1)] text-center leading-[29px] text-[29px] font-[family-name:var(--font-jomhuria)] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] text-white rounded-md hover:text-[rgba(76,70,70,1)] hover:bg-[rgba(228,228,228,1)] transition-all duration-300 ease-in-out">
                        Register
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden text-gray-800 hover:text-gray-500 transition-all duration-300 ease-in-out"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <svg
                            className="w-6 h-6 transition-all duration-300 ease-in-out"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="w-5 h-5 transition-all duration-300 ease-in-out"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    )}
                </button>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden transition-all duration-300 ease-in-out absolute top-[90px] left-0 w-full bg-white shadow-md  overflow-hidden ${isOpen ? "h-[300px] rounded-b-[10px]" : "h-[0px]"
                        }`}
                >
                    <ul className="space-y-4 p-4 overflow-y-scroll h-full custom-scrollbar">
                        <li>
                            <Link href="/" className="block text-center hover:text-gray-400 leading-[32px] text-[32px] font-[family-name:var(--font-jomhuria)] text-[rgba(56,48,88,1)] transition-all duration-300 ease-in-out">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/events" className="block text-center hover:text-gray-400 leading-[32px] text-[32px] font-[family-name:var(--font-jomhuria)] text-[rgba(56,48,88,1)] transition-all duration-300 ease-in-out">
                                Events
                            </Link>
                        </li>
                        <li>
                            <Link href="/verify" className="block text-center hover:text-gray-400 leading-[32px] text-[32px] font-[family-name:var(--font-jomhuria)] text-[rgba(56,48,88,1)] transition-all duration-300 ease-in-out">
                                Ticket Verify
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog" className="block text-center hover:text-gray-400 leading-[32px] text-[32px] font-[family-name:var(--font-jomhuria)] text-[rgba(56,48,88,1)] transition-all duration-300 ease-in-out">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="block text-center hover:text-gray-400 leading-[32px] text-[32px] font-[family-name:var(--font-jomhuria)] text-[rgba(56,48,88,1)] transition-all duration-300 ease-in-out">
                                About
                            </Link>
                        </li>

                        <div className="flex space-x-4">
                            <button className="px-4 w-full py-2 bg-[rgba(228,228,228,1)] text-center leading-[32px] text-[32px] font-[family-name:var(--font-jomhuria)] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] text-[rgba(76,70,70,1)] hover:text-white rounded-md hover:bg-[rgba(93,83,134,1)] transition-all duration-300 ease-in-out">
                                Log In
                            </button>
                            <button className="w-full py-2 px-4 bg-[rgba(93,83,134,1)] text-center leading-[32px] text-[32px] font-[family-name:var(--font-jomhuria)] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] text-white rounded-md hover:text-[rgba(76,70,70,1)] hover:bg-[rgba(228,228,228,1)] transition-all duration-300 ease-in-out">
                                Register
                            </button>
                        </div>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
