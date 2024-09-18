import { useState } from "react";

export const Step2 = ({ step, formData,setFormData }) => {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const checkPassword = () => {
    // const result = passwordRegEx.test(password);
    // return result;
  };

  const next = () => {};
  return (
    <div className="form-div">
      <h1>Step 2</h1>
      <div>
        <div className="mb-2">
          <label htmlFor="address">Address</label>
          <input
            value={formData.address}
            onChange={(val) => setFormData({...formData,address:val})}
            data-test-id="address-input"
            type="text"
            className="block flex-1 border-1 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="city">City</label>
          <input
            value={formData.city}
            onChange={(val) => setFormData({...formData,city:val})}
            data-test-id="city-input"
            type="text"
            className="block flex-1 border-1 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="zipCode">ZipCode</label>
          <input
            value={formData.zipCode}
            onChange={(val) => setFormData({...formData,zipCode:val})}
            data-test-id="zipCode-input"
            type="text"
            className="block flex-1 border-1 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </div>
  );
};
