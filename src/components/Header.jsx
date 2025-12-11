import React from 'react';
import { FaLaptopMedical } from "react-icons/fa";
import { TbPhoneCall } from "react-icons/tb";
import { IoIosMailOpen } from "react-icons/io";
import { Navbar } from './Navbar';


export const Header = () => {
    return (
        <header className="w-screen bg-white shadow-sm z-10">
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center h-20'>
                    <div className='flex items-center'>
                        <img
                            src="/header.png"
                            alt="Header Logo"
                            className='h-16 w-auto'
                        />
                    </div>
                    <div className='flex justify-between items-center h-20'>
                        <div className='flex space-x-8'>
                        <div className='flex items-center space-x-3'>
                            <FaLaptopMedical className='text-blue-600 text-2xl' />
                            <div>
                                <p className='text-xs text-gray-500'>Second medical opinion</p>
                                <h2 className='text-sm font-semibold text-gray-800'>Book Consultation</h2>
                            </div>
                        </div>
                        <div className='flex items-center space-x-3'>
                            <TbPhoneCall className='text-blue-600 text-2xl' />
                            <div>
                                <p className='text-xs text-gray-500'>Call Us on</p>
                                <h2 className='text-sm font-semibold text-gray-800'>985 896 2222</h2>
                            </div>
                        </div>
                        <div className='flex items-center space-x-3'>
                            <IoIosMailOpen className='text-blue-600 text-2xl' />
                            <div>
                                <p className='text-xs text-gray-500'>Mail Us at</p>
                                <h2 className='text-sm font-semibold text-gray-800'>info@mediretreats.com</h2>
                            </div>
                        </div>
                    </div>

                    </div>
                    
                </div>
            </div>
            <Navbar/>
        </header>
    );
};
