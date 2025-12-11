import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export const MainNav = () => {
    const [activeTab, setActiveTab] = useState('Overview');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const tabs = [
        'Overview',
        'Eligibility',
        'Preparation',
        'About Treatment',
        'Post-Treatment Care',
        'Recovery Tips',
        'FAQs',
        'Patient Stories'
    ];

    return (
        <div className="bg-white shadow-sm z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="flex justify-between items-center w-full py-4 text-gray-700 hover:text-gray-900"
                    >
                        <span className="font-medium">{activeTab}</span>
                        {isMobileMenuOpen ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                </div>

                {/* Desktop tabs */}
                <nav className="hidden md:flex overflow-x-auto">
                    <ul className="flex space-x-1">
                        {tabs.map((tab) => (
                            <li key={tab}>
                                <div
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-4 py-3 text-sm font-medium whitespace-nowrap cursor-pointer ${activeTab === tab
                                            ? 'border-b-2 border-blue-600 text-blue-600'
                                            : 'text-gray-600 hover:text-gray-900 hover:border-b-2 hover:border-gray-300'
                                        }`}
                                >
                                    {tab}
                                </div>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-200">
                        <ul className="flex flex-col">
                            {tabs.map((tab) => (
                                <li key={tab}>
                                    <div
                                        onClick={() => {
                                            setActiveTab(tab);
                                            setIsMobileMenuOpen(false);
                                        }}
                                        className={`w-full text-left px-4 py-3 text-sm font-medium cursor-pointer ${activeTab === tab
                                                ? 'bg-blue-50 text-blue-600'
                                                : 'text-gray-600 hover:bg-gray-50'
                                            }`}
                                    >
                                        {tab}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};
