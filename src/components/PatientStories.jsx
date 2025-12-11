import React from "react";
import { FaPlay } from "react-icons/fa";

const PatientStories = () => {
    const stories = [
        {
            title: "Underwent procedure for retinal detachment",
            type: "video",
            image: "Patient.png", 
            patientImg: "https://via.placeholder.com/60",
            name: "Luke Olfert",
            location: "New York, USA",
            quoteColor: "text-pink-400"
        },
        {
            title: "Underwent Colonoscopy and Medical Management",
            type: "text",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            patientImg: "https://via.placeholder.com/60",
            name: "Luke Olfert",
            location: "Sydney, Australia",
            quoteColor: "text-pink-400"
        }
    ];

    return (
        <section className="py-12 px-6 bg-white">
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <h2 className="text-3xl font-semibold text-[#1b1f2a] mb-10">
                    Patient Stories & Videos<span className="text-red-500">.</span>
                </h2>

                {/* Cards Wrapper */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {stories.map((item, i) => (
                        <div
                            key={i}
                            className="border border-gray-200 rounded-md p-6 relative shadow-sm"
                        >
                           
                            <div
                                className={`absolute top-6 right-6 text-4xl opacity-70 ${item.quoteColor}`}
                            >
                                &#10077;&#10077;
                            </div>

                            
                            <h3 className="text-lg font-semibold text-[#1b1f2a] pr-10">
                                {item.title}
                            </h3>

                           
                            {item.type === "video" ? (
                                <div className="relative mt-5">
                                    <img
                                        src={item.image}
                                        alt="Patient story"
                                        className="rounded-md"
                                    />
                                    
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="h-16 w-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center shadow-md cursor-pointer">
                                            <FaPlay className="text-sky-500 text-xl ml-1" />
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <p className="text-gray-600 leading-relaxed text-sm mt-4 pr-4">
                                    {item.content}
                                </p>
                            )}

                            
                            <div className="flex items-center gap-4 mt-6">
                                <img
                                    src={item.patientImg}
                                    alt="patient"
                                    className="h-12 w-12 rounded-full object-cover"
                                />
                                <div>
                                    <p className="text-[16px] font-semibold text-[#1b1f2a]">
                                        {item.name}
                                    </p>
                                    <p className="text-gray-500 text-sm">{item.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

               
                <div className="flex justify-center mt-6 gap-3">
                    <span className="h-3 w-3 rounded-full bg-sky-500"></span>
                    <span className="h-3 w-3 rounded-full bg-gray-300"></span>
                    <span className="h-3 w-3 rounded-full bg-gray-300"></span>
                </div>

            </div>
        </section>
    );
};

export default PatientStories;
