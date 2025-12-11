import React from "react";

const TopDoctors = () => {
    const doctors = [
        {
            name: "Dr. Faique Falke",
            location: "Musaffah Industrial – Abu Dhabi",
            role: "Doctor Degree & Specialist",
            image: "https://via.placeholder.com/500x300/EEC9D5/FFFFFF?text=Doctor+Image"
        },
        {
            name: "Dr. Faique Falke",
            location: "Musaffah Industrial – Abu Dhabi",
            role: "Doctor Degree & Specialist",
            image: "https://via.placeholder.com/500x300/EEC9D5/FFFFFF?text=Doctor+Image"
        },
        {
            name: "Dr. Faique Falke",
            location: "Musaffah Industrial – Abu Dhabi",
            role: "Doctor Degree & Specialist",
            image: "https://via.placeholder.com/500x300/EEC9D5/FFFFFF?text=Doctor+Image"
        }
    ];

    return (
        <section className="py-16 px-6 bg-[#e9f0f6]">
            <div className="max-w-6xl mx-auto text-center">

                
                <p className="text-red-500 italic text-lg mb-2">Doctors</p>

                {/* Main Title */}
                <h2 className="text-3xl font-semibold text-[#1b1f2a] mb-10">
                    Top Orthopaedic <span className="text-sky-500">Doctors</span>
                </h2>

                {/* Doctor Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {doctors.map((doc, index) => (
                        <div
                            key={index}
                            className="bg-white p-5 rounded-md shadow-lg border border-gray-200"
                        >
                            
                            <div className="bg-pink-200 rounded-md mb-4 h-56">
                                <img
                                    src={doc.image}
                                    alt={doc.name}
                                    className="w-full h-full object-cover rounded-md"
                                />
                            </div>

                            
                            <p className="text-red-500 italic font-semibold text-lg">
                                {doc.name}
                            </p>
                            <p className="text-gray-700 mt-1">{doc.location}</p>
                            <p className="text-gray-500 text-sm mt-1">{doc.role}</p>
                        </div>
                    ))}
                </div>

                
                <div className="flex justify-center mt-8 gap-3">
                    <span className="h-3 w-3 rounded-full bg-sky-500"></span>
                    <span className="h-3 w-3 rounded-full bg-gray-400"></span>
                    <span className="h-3 w-3 rounded-full bg-gray-400"></span>
                </div>
            </div>
        </section>
    );
};

export default TopDoctors;
