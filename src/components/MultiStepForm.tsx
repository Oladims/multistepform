/**
 * Implement your solution here and also feel free to create new files as needed within this folder. Although, this is the entry component that will be tested
 */

import { useState } from "react";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";
import { Step4 } from "./Step4";

export const MultiStepForm = ({}) => {
  const [step, setStep] = useState(1);
  const [basicInfoData, setBasicInfoData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [addressData, setAddressData] = useState({
    address: "",
    city: "",
    zipCode: "",
  });
  const [contactData, setContactData] = useState({
    phoneNumber: "",
    emergencyContact: "",
  });
  const [data,setData] = useState({...basicInfoData,...addressData,...contactData})
  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };
  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleSubmit = () => {
    const values = {...basicInfoData, ...addressData,...contactData}
    console.log(values);
  };

  return (
    <div>
      {step === 1 && (
        <Step1
          step={step}
          formData={basicInfoData}
          setFormData={setBasicInfoData}
        />
      )}
      {step === 2 && (
        <Step2
          step={step}
          formData={addressData}
          setFormData={setAddressData}
        />
      )}
      {step === 3 && (
        <Step3
          step={step}
          formData={contactData}
          setFormData={setContactData}
        />
      )}
      {step === 4 && <Step4 formData={data} />}
      <h4 data-test-id="success-message"> Form Submitted Successfully</h4>
      <div className="w-2/3 flex justify-between items-center mx-auto">
        <button
          className="rounded-full h-12 bg-slate-700 w-1/4"
          disabled={step === 1}
          onClick={() => handlePrev()}
        >
          Prev
        </button>
        <button
          className="rounded-full h-12 bg-slate-700 w-1/4"
          disabled={step > 3}
          onClick={() => handleNext()}
        >
          Next
        </button>
        {step === 4 && (
          <button
            data-test-id="submit-button"
            className="rounded-full h-12 bg-slate-700 w-1/4"
            onClick={() => handleSubmit()}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};
