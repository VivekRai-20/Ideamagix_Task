import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

export const Hero = () => {
    return (
        <div className="bg-blue-950 text-white h-85 flex items-center z-0">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 z-10">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Left content */}
                    <div className="md:w-1/2 mb-10 md:mb-0">
                        {/* Breadcrumbs */}
                        <nav className="flex text-sm text-gray-300 mb-6">
                            <a href="#" className="hover:text-white">Home</a>
                            <FaChevronRight className="mx-2 mt-1 h-3 w-3" />
                            <a href="#" className="hover:text-white">Treatments</a>
                            <FaChevronRight className="mx-2 mt-1 h-3 w-3" />
                            <a href="#" className="hover:text-white">Orthopaedics</a>
                            <FaChevronRight className="mx-2 mt-1 h-3 w-3" />
                            <span className="text-white">Knee Replacement</span>
                        </nav>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Total Knee Replacement
                        </h1>

                       
                        <p className="text-lg text-gray-300 mb-8 max-w-lg">
                            Total knee replacement is a surgery to remove and replace the whole damaged knee joint with an artificial joint.
                        </p>

                        
                        <div className=" w-40 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md transition duration-300">
                            Enquire Now
                        </div>
                    </div>

                    {/* Right image */}
                    <div className="md:w-1/2 flex justify-center">
                        <img
                            src="Hero.png"
                            alt="Knee joint medical illustration"
                            className="max-h-96 object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
