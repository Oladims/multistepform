import { useState } from "react";

export const Step3 = ({ step, formData, setFormData }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");

  return (
    <div className="form-div">
      <h1>Step 3</h1>
      <div>
        <div className="mb-2">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            value={formData.phoneNumber}
            onChange={(val) => setFormData({ ...formData, phoneNumber: val })}
            data-test-id="phoneNumber-input"
            type="text"
            className="block flex-1 border-1 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="emergencyContact">Emergency Contact</label>
          <input
            value={formData.emergencyContact}
            onChange={(val) =>
              setFormData({ ...formData, emergencyContact: val })
            }
            data-test-id="emergencyContact-input"
            type="text"
            className="block flex-1 border-1 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </div>
  );
};
