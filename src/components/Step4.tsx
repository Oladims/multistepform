import { useState } from "react";

export const Step4 = ({ formData }) => {
  return (
    <div className="form-div">
      <h1>Review</h1>
      <div className="my-2" data-test-id="review-step">
        {Object.keys(formData).map((val) => (
          <p>
            <span className="font-bold">{val}</span>:{formData[val]}
          </p>
        ))}
      </div>
    </div>
  );
};
