import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const colors = {
  primary: "#060606",
  background: "#E0E0E0",
  disabled: "#D9D9D9",
  verticalLine: "#1D68FF" // Color code for the vertical line
};

export default function Login() {
  return (
    <div className="w-full h-screen flex">
      {/* Left side (Login form) */}
      <div className="w-1/2 bg-gray-100 p-8 flex flex-col">
        <div className="flex gap-12 items-center mb-6">
          <h1 className="text-[#0F305E] font-bold text-2xl">Log in</h1>
          <button className="bg-gray-200 text-gray-700 text-l px-2 py-1 rounded-full">Need Help?</button>
        </div>
        <p className="mb-6 text-[#0F305E]">Welcome back, 👋 please complete your profile</p>
        <div className="flex items-center mb-4">
          <p className="mr-4">Select:</p>
          <label htmlFor="individual" className="flex items-center cursor-pointer mr-4">
            <input type="radio" id="individual" name="userType" className="form-radio h-3 w-3 text-green-500  focus:ring-green-500" />
            <span className="ml-2">Individual</span>
          </label>
          <label htmlFor="healthcare" className="flex items-center cursor-pointer">
            <input type="radio" id="healthcare" name="userType" className="form-radio h-3 w-3 text-green-500  focus:ring-green-500" />
            <span className="ml-2">Healthcare</span>
          </label>
        </div>
        <div className="relative mb-4 w-full flex items-center">
          <img src="/images/flag.jpeg" alt="Flag" className="absolute top-1/2 transform -translate-y-1/2 left-4 w-5 h-5" />
          <div className="absolute left-10 top-2 bottom-2 border-l-1 bg-blue-500 border-[#1D68FF]" style={{ width: '1px' }}></div>

          <input type="text" placeholder=" KRA PIN" className="pl-16 pr-10 border border-gray-300 rounded-full py-2 w-full" />
        </div>
        <input
          type="text"
          placeholder="Full Name"
          className="border border-gray-300 rounded-full pl-4 pr-10 py-2 mb-4 w-full"
        />
        <input
          type="text"
          placeholder="Age"
          className="border border-gray-300 rounded-full pl-4 pr-10 py-2 mb-4 w-full"
        />
        <input
          type="text"
          placeholder="Address"
          className="border border-gray-300 rounded-full pl-4 pr-10 py-2 mb-4 w-full"
        />
        <select className="border border-gray-300 rounded-full pl-4 pr-10 py-2 mb-4 w-full text-gray-500">
         <option value="" disabled selected>Select Billing Method</option>
         <option value="method1">Method 1</option>
         <option value="method2">Method 2</option>
       </select>

      
        <button className="bg-blue-800 text-white px-4 py-2 rounded-full w-full">Accept and Proceed</button>
      </div>
      
      {/* Right side (Image with Gradient) */}
      <div className="relative w-1/2 h-full flex flex-col bg-cover bg-center"  style={{ backgroundImage: 'url("/images/family.png")' }}>
        <div className="absolute bottom-0 left-0 w-full h-[85%] bg-gradient-to-t from-[#0F305ED9] to-transparent"></div>
        <div className="absolute bottom-[16%] left-[10%] flex flex-col p-4">
          <p className="text-4xl text-white font-normal">Providing. Next <br/> Generation of care for</p>
          <h1 className="text-3xl text-white font-bold my-4">Women and Families.</h1>
          <h6 className="text-xs text-white my-1">Reach out to us if you are experiencing any trouble logging in</h6>
          <div className="flex items-center text-xs text-white my-1">
            <FontAwesomeIcon icon={faPhone} className="w-[16.97px] h-[16.88px] text-white mr-1" />
            +254 705122230
          </div>
        </div>
      </div>
    </div>
  );
}
