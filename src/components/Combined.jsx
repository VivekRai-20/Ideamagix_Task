import React from 'react';

import Eligibility from './Eligibility';
import Preparation from './Preparation';
import AboutTreatment from './AboutTreatment';
import PostTreatmentCare from './PostTreatementCare';
import RecoveryTips from './RecoveryTips';
import Faq from './Faq';
import PatientStories from './PatientStories';
import Form from './form';

export const Combined = () => {
    return (
        <div>
            <div className="bg-gray-50 w-screen">
                <div className='flex flex-col lg:flex-row gap-8 w-screen mx-auto px-4 sm:px-6 lg:px-8 py-12'>

                    <div className="lg:w-2/3 space-y-8">
                        <Eligibility />
                        <Preparation />
                        <AboutTreatment />
                        <PostTreatmentCare />
                        <RecoveryTips />
                        <Faq />
                        <PatientStories />
                    </div>


                    <div className="lg:w-1/3">
                        <div className="sticky top-24">
                            <Form />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Combined;
