import React from "react";

const RecommendedHospitals = () => {
    const hospitals = [
        {
            name: "Apollo Hospital",
            city: "Bangalore",
            image:
                "appolo.png",
        },
        {
            name: "Medanta Hospital",
            city: "Gurgaon",
            image:
                "medanta.png"
        },
        {
            name: "Jaslok hospital",
            city: "Mumbai",
            image:
                "jaslok.png"
        },
    ];

    return (
        <section className="py-16 px-6 bg-white">
            <div className="max-w-7xl mx-auto text-center">

                
                <p className="text-red-500 italic text-xl">Hospitals</p>

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-semibold mt-2 mb-10 text-[#1b1f2a]">
                    Recommended <span className="text-sky-500">Hospitals</span>
                </h2>

                {/* Hospital Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {hospitals.map((item, index) => (
                        <div
                            key={index}
                            className="border border-dashed border-red-300 rounded-lg shadow-md overflow-hidden bg-white"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-5 text-center">
                                <h3 className="text-xl font-semibold">{item.name}</h3>
                                <p className="text-red-500 italic mt-1">{item.city}</p>
                            </div>
                        </div>
                    ))}
                </div>

                
                <div className="flex justify-center mt-10 gap-3">
                    <span className="h-3 w-3 rounded-full bg-sky-500"></span>
                    <span className="h-3 w-3 rounded-full bg-gray-400"></span>
                    <span className="h-3 w-3 rounded-full bg-gray-400"></span>
                </div>

                
                <p className="text-gray-700 mt-10 text-lg">
                    Don’t hesitate, contact us for better help and services.{" "}
                    <span className="text-red-600 underline cursor-pointer">
                        Explore all Hospitals
                    </span>
                </p>
            </div>
        </section>
    );
};

export default RecommendedHospitals;
