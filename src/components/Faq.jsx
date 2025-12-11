import React, { useState } from "react";

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(2); // third item open by default

    const faqs = [
        {
            q: "How do I know the clinic I am searching is verified?",
            a: "Most of the clinics listed with us go through a detailed verification process. Our team reviews the hospital’s accreditation, doctor’s qualifications, treatment outcomes, patient reviews, and safety standards. This ensures that you are choosing a clinic that is reliable, trustworthy, and adheres to international medical guidelines."
        },
        {
            q: "I can’t travel alone so can some family member or friend of mine accompany me?",
            a: "Yes, absolutely. Patients are encouraged to bring a companion for emotional support, assistance during travel, and to help during the initial recovery period. Our team can also help you with additional accommodation arrangements, travel planning, and local guidance for both you and your companion."
        },
        {
            q: "Can I see my doctor before I decide and what about my post recovery?",
            a: "Yes, pre and post treatment consultation can be done. You can speak to the doctor at the most appropriate time (before you decide to travel) to boost your confidence. The team at Mediretreats will also help you with arranging the OPD’S after the surgeries."
        },
        {
            q: "How do I share my reports and medical cases with the clinic of my choice?",
            a: "Sharing reports is simple and secure. You can upload your documents—such as prescriptions, diagnostic reports, scans, or medical history—through our website or send them directly to our medical team. All files are kept confidential and reviewed by specialists to provide accurate treatment advice and cost estimates."
        }
    ];

    const toggleFAQ = (i) => {
        setOpenIndex(openIndex === i ? null : i);
    };

    return (
        <section className="relative bg-white py-12 px-6">
            <div className="max-w-5xl mx-auto">
                <div className="max-w-3xl">

                    {/* Heading */}
                    <h2 className="text-3xl font-semibold text-[#1b1f2a] mb-8">
                        Treatment FAQs<span className="text-red-500">.</span>
                    </h2>

                    {/* FAQ List */}
                    <div className="space-y-2">
                        {faqs.map((item, i) => (
                            <div key={i}>
                                {/* Question Row */}
                                <div
                                    onClick={() => toggleFAQ(i)}
                                    className="w-full flex items-center gap-5 py-4 border-t border-gray-300 text-left"
                                >
                                    <span className="text-sky-500 text-2xl font-light">
                                        {openIndex === i ? "−" : "+"}
                                    </span>
                                    <span className="text-[17px] text-[#1b1f2a]">
                                        {item.q}
                                    </span>
                                </div>

                                {/* Answer */}
                                {openIndex === i && item.a && (
                                    <div className="pl-10 pr-4 pb-4">
                                        <div className="border-l-4 border-sky-400 pl-4 text-gray-600 leading-relaxed text-[15px]">
                                            {item.a}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}

                        
                        <div className="border-b border-gray-300 mt-2" />
                    </div>

                    {/* Dashed Bottom Divider */}
                    <div className="border-b-2 border-dashed border-sky-300 w-full mt-10" />
                </div>
            </div>
        </section>
    );
};

export default Faq;
