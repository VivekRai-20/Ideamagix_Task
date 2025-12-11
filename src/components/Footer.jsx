import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <>

            <div className="bg-gradient-to-r from-sky-500 to-blue-600 py-16 text-center text-white px-4 relative">
                <h3 className="text-xl font-light">Stay healthy and strong to enjoy life</h3>
                <h2 className="text-3xl md:text-5xl font-semibold mt-2">
                    We have team of healthcare experts
                </h2>

                <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-6">
                    <div className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-md shadow-md">
                        Get In Touch
                    </div>
                    <p className="text-white text-2xl font-medium">
                        +91 898 777 9999
                    </p>
                </div>


                <div className="absolute right-10 top-1/2 bg-white shadow-xl rounded-lg p-5 w-72 hidden md:block">
                    <h4 className="text-gray-600 text-sm">Are you doctor / hospital?</h4>
                    <p className="font-semibold text-blue-600 mt-1">Join Mediretreats</p>
                    <p className="text-xs text-gray-500 mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    </p>
                </div>
            </div>

            {/* Main Footer */}
            <footer className="bg-[#0f1f2d] text-gray-300 py-16 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">


                    <div>
                        <h4 className="text-white font-semibold mb-4">Important Links</h4>
                        <ul className="space-y-2">
                            <li>- Home</li>
                            <li>- About Us</li>
                            <li>- FAQs</li>
                            <li>- Blog</li>
                            <li>- Contact Us</li>
                        </ul>
                    </div>


                    <div>
                        <h4 className="text-white font-semibold mb-4">Top Hospitals</h4>
                        <ul className="space-y-2">
                            <li>- Apollo Hospital Delhi</li>
                            <li>- Medanta Hospital Gurgaon</li>
                            <li>- Max Hospital Delhi</li>
                            <li>- Jaslok hospital Mumbai</li>
                            <li>- Artemis hospital Gurgaon</li>
                            <li>- Fortis Hospital Gurgaon</li>
                            <li>- View All</li>
                        </ul>
                    </div>


                    <div>
                        <h4 className="text-white font-semibold mb-4">Speciality Treatments</h4>
                        <ul className="space-y-2">
                            <li>- Knee Replacement Surgeon</li>
                            <li>- Urologist</li>
                            <li>- Spine Surgeon</li>
                            <li>- ENT Surgeons</li>
                            <li>- Orthopedic</li>
                            <li>- Cardiologist</li>
                            <li>- View All</li>
                        </ul>
                    </div>


                    <div>
                        <h4 className="text-white font-semibold mb-4">Medical Tourism Destinations</h4>
                        <ul className="space-y-2">
                            <li>- Medical Tourism in India</li>
                            <li>- Medical Tourism in Sri Lanka</li>
                            <li>- Medical Tourism in UAE</li>
                            <li>- View All</li>
                        </ul>
                    </div>
                </div>


                <div className="border-t border-gray-600 my-12 pt-12 max-w-7xl mx-auto grid md:grid-cols-2 gap-10">


                    <div>
                        <img src="logo.png" alt="Logo" className="w-40 mb-4" />
                        <h4 className="text-white font-semibold mb-3">About Aafiya Mediretreats</h4>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            Aafiya Mediretreats is a free, confidential, independent resource for
                            patients and industry providers. Our mission is to provide a central portal
                            where patients, Medical Tourism providers, hospitals, clinics, employers,
                            and insurance companies can all find the information they need. Our site
                            focuses on patients looking for specific knowledge in the fields of medical
                            tourism, dental tourism, and health tourism.
                        </p>
                    </div>

                    {/* Social + Contact */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Follow Us On</h4>

                        <div className="flex gap-4 text-xl text-white mb-6">
                            <FaFacebookF className="cursor-pointer hover:text-sky-400" />
                            <FaTwitter className="cursor-pointer hover:text-sky-400" />
                            <FaInstagram className="cursor-pointer hover:text-sky-400" />
                            <FaYoutube className="cursor-pointer hover:text-red-500" />
                        </div>

                        <p className="text-gray-400">Customer Service</p>
                        <p className="text-sky-400 text-2xl font-semibold mt-1">
                            +91 9856555666
                        </p>
                    </div>

                </div>
            </footer>

            {/* Copyright Bar */}
            <div className="bg-sky-500 text-white py-4 text-center flex flex-col md:flex-row justify-between items-center px-6 text-sm">
                <p>Copyright © 2024 Aafiya Mediretreats. All Rights Reserved.</p>
                <p>Designed by Ideamagix.</p>

                <div className="flex gap-6 mt-2 md:mt-0">
                    <span className="cursor-pointer">Terms And Conditions</span>
                    <span className="cursor-pointer">Privacy Policy</span>
                </div>
            </div>
        </>
    );
};

export default Footer;
