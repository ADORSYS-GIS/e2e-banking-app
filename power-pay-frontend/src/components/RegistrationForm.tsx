import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

interface RegistrationData {
  name: string;
  number: string;
  pin: string;
}

function RegistrationForm() {
  const [formData, setFormData] = useState<RegistrationData>({
    name: '',
    number: '',
    pin: '',
  });
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // 1. Validate form data:
    const errors: { [key: string]: string } = {};

    if (!formData.name) {
      errors.name = 'Please enter your name.';
    }

    if (!formData.number || formData.number.length !== 9) {
      errors.number = 'Please enter a valid 9-digit phone number.';
    }

    if (!formData.pin || formData.pin.length < 4) {
      errors.pin = 'PIN must be at least 4 characters long.';
    }

    if (Object.keys(errors).length > 0) {
      // Handle form validation errors
      alert(Object.values(errors).join('\n'));
      return;
    }

    // 2. Send registration data to backend (API call):
    const url = 'http://localhost:3000/register';
    const data = JSON.stringify(formData);

    fetch(url, {
      method: 'POST', // Use POST for registration
      headers: { 'Content-Type': 'application/json' },
      body: data,
    })
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.success) {
          // Registration successful
          navigate('/otp');
        } else {
          // Handle registration failure (error messages)
          alert('Registration failed: ' + responseData.message);
        }
      })
      .catch((error) => {
        // Handle network or other errors
        console.error('Error sending registration data:', error);
        alert('An error occurred during registration. Please try again later.');
      });
  };

  const handleLoginClick = () => {
    navigate('/user_login');
  };
  const handleregistrationClick = () => {
    navigate('/otp');
  };

  return (
    <div className="flex flex-col items-center justify-center w-8 h-screen bg-800 text-black text-sm">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col items-center text-lg absolute inset-x-0 top-12 pt-12">
            <div className="input-group relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="text-lg px-12 rounded-full w-80 p-2.5 bg-red-50 dark:placeholder-gray-400 dark:text-black required"
                placeholder="Full Name"
                required
              />
              <FontAwesomeIcon
                icon={faUser}
                size="1x"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-600"
              />
            </div>
            <div className="input-group mt-4">
              <input
                type="text"
                name="number"
                value={formData.number}
                onChange={handleInputChange}
                className="text-lg px-9 rounded-full w-80 p-2.5 bg-red-50 dark:placeholder-gray-400 dark:text-black required"
                placeholder="Number"
                required
              />
              <FontAwesomeIcon
                icon={faPhone}
                size="1x"
                className="mr-2 text-red-600"
              />
            </div>
            <div className="input-group mt-4 relative">
              <input
                type="password"
                name="pin"
                value={formData.pin}
                onChange={handleInputChange}
                className="text-lg px-12 rounded-full w-80 p-2.5 bg-red-50 dark:placeholder-gray-400 dark:text-black required"
                placeholder="Pin"
                required
              />
              <FontAwesomeIcon
                icon={faLock}
                size="1x"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-600"
              />
            </div>
          </div>
          <button
            type="submit"
            onClick={handleregistrationClick}
            className="rounded-full w-80 m-auto px-4 py-2 text-white bg-blue-950 text-lg absolute inset-x-0 bottom-20"
          >
            Create an account
          </button>
          <button
            type="button"
            onClick={handleLoginClick}
            className="rounded-full w-80 m-auto px-4 py-2 text-white bg-blue-950 text-lg absolute inset-x-0 bottom-6"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;