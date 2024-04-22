import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function OTPForm() {
  const [otp, setOTP] = useState('');
  const navigate = useNavigate();

  const handleOTPChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOTP(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // Validate OTP
    if (!otp) {
      alert('Please enter OTP.');
      return;
    }
  
    // Send OTP to backend for verification
    const url = 'http://localhost:3000/verify-otp';
    const data = JSON.stringify({ otp });
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: data,
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const responseData = await response.json();
  
      if (responseData.success) {
        alert('OTP verification successful');
        // Redirect user to another page after successful OTP verification
        navigate('/success');
      } else {
        // OTP verification failed
        alert('OTP verification failed: ' + responseData.message);
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error verifying OTP:', error);
      alert('An error occurred while verifying OTP. Please try again later.');
    }
  };

  const handleGoBack = () => {
    navigate('/');
  };
  
  return (
    <div className="flex flex-1 flex-col justify-center space-y-5 max-w-md mx-auto mt-24">
      <div className="```flex rounded-lg w-80 m-auto px-4 py-2  text-lg absolute  inset-x-0 top-16 bg-gray-100``` ">
        <h2 className="text-3xl md:text-4xl font-bold">Confirm OTP</h2>
        <p className="text-md md:text-xl">
          Enter the OTP we just sent you.
        </p>
      </div>
      <form className="flex flex-col max-w-md space-y-5" onSubmit={handleSubmit}>
      <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', textAlign: 'center' }}>
        <input
          type="text"
          placeholder="OTP"
          value={otp}
          onChange={handleOTPChange}
          className="text-lg text-center rounded-full w-80 p-2.5 bg-red-50 dark:placeholder-gray-900 dark:text-black"
          style={{ marginTop: '-50px' }} // Adjust the marginTop as needed to bring the bar up
        />
      </div>
        <button
          type="submit"
          className="rounded-full w-80 m-auto px-4 py-2 text-white bg-blue-950  text-lg absolute  inset-x-0 bottom-20"
        >
          Confirm
        </button>
      </form>
      <button
        onClick={handleGoBack}
        className="rounded-full w-80 m-auto px-4 py-2 text-white bg-blue-950  text-lg absolute  inset-x-0 bottom-6"
      >
         Back
      </button>
    </div>
  );
}

export default OTPForm;
