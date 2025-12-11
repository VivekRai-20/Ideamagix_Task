import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { FaChevronDown } from 'react-icons/fa';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { text: 'Home', href: '#' },
        { text: 'About Us', href: '#' },
        { text: 'Treatments', hasDropdown: true, href: '#' },
        { text: 'Destinations', hasDropdown: true, href: '#' },
        { text: 'Hospitals', href: '#' },
        { text: 'FAQs', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Request A Quote', href: '#' }
    ];

    return (
        <nav className="bg-blue-600 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Desktop Menu */}
                    <div className="flex items-center space-x-1">
                        {navItems.map((item, index) => (
                            <div key={index} className="relative group">
                                <div
                                    className={`px-3 py-2 text-sm font-medium hover:bg-blue-700 text-white hover:text-white rounded-md flex items-center cursor-pointer ${item.hasDropdown ? 'pr-6' : ''}`}
                                >
                                    <span>{item.text}</span>
                                    {item.hasDropdown && (
                                        <FaChevronDown className="ml-1 h-3 w-3" />
                                    )}
                                </div>
                                {item.hasDropdown && (
                                    <div className="hidden group-hover:block absolute left-0 mt-0 w-56 bg-white rounded-md shadow-lg z-10">
                                        <div className="py-1">
                                            <a href="#" className="block px-4 py-2 text-sm text-blue-700 hover:bg-blue-50">
                                                {item.text} Item 1
                                            </a>
                                            <a href="#" className="block px-4 py-2 text-sm text-blue-700 hover:bg-blue-50">
                                                {item.text} Item 2
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Search Link */}
                    <div className="flex items-center">
                        <div className="flex items-center bg-blue-700 hover:bg-blue-800 px-6 py-3 rounded-md text-base font-medium cursor-pointer">
                            <FiSearch className="h-5 w-5 mr-2" />
                            <span>Search</span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};