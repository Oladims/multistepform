import { useState } from "react";

const passwordRegEx =
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$";
export const Step1 = ({ step, formData, setFormData }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const checkPassword = () => {
    // const result = passwordRegEx.test(password);
    // return result;
    return
  };

  const next = () => {};
  return (
    <div>
      <h1>Step 1</h1>
      <div className="form-div">
        <div className="mb-2">
          <label htmlFor="Name">Name</label>
          <input
            value={formData.name}
            onChange={(val) => setFormData({ ...formData, name: val })}
            data-test-id="name-input"
            type="text"
            className="block flex-1 border-1 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="Email">Email</label>
          <input
            value={formData.email}
            onChange={(val) => setFormData({ ...formData, email: val })}
            data-test-id="email-input"
            type="text"
            className="block flex-1 border-1 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="Password">Password</label>
          <input
            value={formData.password}
            onChange={(val) => setFormData({...formData, password:val})}
            data-test-id="password-input"
            type="text"
            className="block flex-1 border-1 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          />
          {checkPassword() ? (
            <small>
              Must be minimum of 8 characters that includes at least a lowercase
              and uppercase alphabet, a number and a special character
            </small>
          ) : null}
        </div>
      </div>
    </div>
  );
};
