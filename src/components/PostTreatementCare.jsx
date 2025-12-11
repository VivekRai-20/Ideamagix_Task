import React from "react";

const PostTreatmentCare = () => {
  const bullets = [
    "The BMI (body mass index) is 40 or more",
    "Your BMI is 30 or more with severe weight-related health conditions like type-2 diabetes and high blood pressure",
    "You are willing to make permanent changes in the lifestyle"
  ];

  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        <div className="max-w-3xl">
          {/* Title */}
          <h2 className="text-3xl font-semibold text-[#1b2028] mb-6">
            Post-Treatment Care Treatment
            <span className="text-red-500">.</span>
          </h2>

          
          <div className="text-gray-600 text-sm leading-relaxed space-y-4 mb-6">
            <p>
              Any individual who has tried diet and exercise but failed to lose weight is considered as a good candidate for gastric bypass. Although gastric bypass aids in weight loss, it is not an appropriate option for everyone. Based on the overall health and certain medical guidelines, the doctor will decide whether you are eligible for gastric bypass or not.
            </p>

            <p>
              In general, gastric bypass could be a good option if:
            </p>
          </div>

          
          <ul className="space-y-4 mb-10 text-gray-700">
            {bullets.map((text, i) => (
              <li key={i} className="flex items-start gap-4">
                <span
                  className="mt-1 inline-flex h-4 w-4 rounded-full border-2 border-sky-500"
                  aria-hidden="true"
                />
                <span className="text-gray-700 text-sm leading-relaxed">{text}</span>
              </li>
            ))}
          </ul>

          {/* Dashed blue divider */}
          <div className="border-b-2 border-dashed border-sky-300 w-full"></div>
        </div>
      </div>
    </section>
  );
};

export default PostTreatmentCare;
