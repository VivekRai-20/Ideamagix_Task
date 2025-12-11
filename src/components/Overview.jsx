import React from "react";

export const Overview = () => {
  return (
    <div className="w-full bg-white py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-12">

          {/* LEFT CONTENT */}
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-[#1b2028]">
              Treatment Overview<span className="text-red-500">.</span>
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Lorem incididunt ut labore ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src="overview.png"
              alt="Treatment Overview"
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
          </div>
        </div>

        {/* DASHED BLUE DIVIDER */}
        <div className="border-b-2 border-dashed border-sky-300 mt-12"></div>
      </div>
    </div>
  );
};

export default Overview;
