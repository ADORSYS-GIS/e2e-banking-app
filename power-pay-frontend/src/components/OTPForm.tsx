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
        navigate('/cesssuc');
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
      <div className="flex flex-col space-y-2 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Confirm OTP</h2>
        <p className="text-md md:text-xl">
          Enter the OTP we just sent you.
        </p>
      </div>
      <form className="flex flex-col max-w-md space-y-5" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="OTP"
          value={otp}
          onChange={handleOTPChange}
          className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
        />
        <button
          type="submit"
          className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white"
        >
          Confirm
        </button>
      </form>
      <button
        onClick={handleGoBack}
        className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-white text-black"
      >
        Go back to registration
      </button>
    </div>
  );
}

export default OTPForm;
