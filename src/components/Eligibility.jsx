import React from "react";

export const Eligibility = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Eligibility For Treatment
        <span className="text-red-500">.</span>
      </h2>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed mb-6">
        Any individual who has tried diet and exercise but failed to lose weight is considered
        as a good candidate for gastric bypass. Although gastric bypass aids in weight loss,
        it is not an appropriate option for everyone. Based on the overall health and certain
        medical guidelines, the doctor will decide whether you are eligible for gastric bypass
        or not.
      </p>

      <p className="text-gray-600 leading-relaxed mb-6">
        In general, gastric bypass could be a good option if:
      </p>

      {/* Bullet List */}
      <ul className="space-y-4 mb-10">
        {[
          "The BMI (body mass index) is 40 or more",
          "Your BMI is 30 or more with severe weight-related health conditions like type-2 diabetes and high blood pressure",
          "You are willing to make permanent changes in the lifestyle"
        ].map((item, index) => (
          <li key={index} className="flex items-start">
            {/* Blue bullet circle */}
            <span className="mt-1 mr-3">
              <span className="h-3 w-3 inline-block rounded-full border-2 border-sky-500"></span>
            </span>

            {/* Text */}
            <span className="text-gray-700 leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>

      {/* Dashed bottom divider */}
      <div className="border-b-2 border-dashed border-sky-300 w-full"></div>
    </div>
  );
};

export default Eligibility;
