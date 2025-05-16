import React, { useState } from 'react';
// import StepProgressBar from '../components/StepProgressBar';
import '../styles/MultiStepForm.css'; // Import the new CSS file
import StepProgressBar from '../components/StepProgressBar';
import SkipPage from '../components/SkipGrid.tsx';
const MultiStepForm: React.FC = () => {
  // const [currentStep, setCurrentStep] = useState(2);
   const [currentStep, setCurrentStep] = useState(3); // Start at step 2 (e.g. Select Skip)
//  const [selectedSkip, setSelectedSkip] = useState<{size: string; price_before_vat: number,hire_period_days:number} | null>(null);



  

const nextPage = (currentStep: number) => {
   setCurrentStep(currentStep)
}


  


  return (
    <>
    <div className="multi-step-form">
      <div className="form-container">
        {/* <StepProgressBar currentStep={currentStep} onStepClick={setCurrentStep} /> */}
        <StepProgressBar currentStep={currentStep} onStepClick={nextPage} />

   
    {/* Render the component for the current step */}
        {/* {currentStep === 2 && <SkipTabs />} */}
             <div className="tab-content">
        {currentStep === 1 && <p>Content for Post Code</p>}
        {currentStep === 2 && <p>Content for Waste Type</p>}
        {currentStep === 3 && <SkipPage  nextPage={nextPage} />}
        {currentStep === 4 && <p>Content for Permit Check</p>}
        {currentStep === 5 && <p>Content for Choose Date</p>}
        {currentStep === 6 && <p>Content for Payment</p>}
      </div>
        {/* Add other components for other steps similarly */}

      
        {/* <div className="button-group"> */}
        {/* Bottom Modal */}
          {/* {currentStep > 1 && (
            <button onClick={() => setCurrentStep(prev => prev - 1)} className="nav-button back">
            Back
            </button>
            )}
            {currentStep < 5 && (
              <button onClick={() => setCurrentStep(prev => prev + 1)} className="nav-button next">
              Next
            </button>
          )} */}
        {/* </div> */}
      </div>
    </div>
              </>
  );
};

export default MultiStepForm;

