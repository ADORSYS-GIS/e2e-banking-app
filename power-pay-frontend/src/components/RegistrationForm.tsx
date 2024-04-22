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
    navigate('/UserLogin'); 
  };

  return (
    <section className="flex flex-col items-center pt-6">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          <div className="input-group" style={{ position: 'absolute', top: '30px', left: '50%', transform: 'translateX(-50%)', width: '100%', textAlign: 'center' }}>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              className="bg-red-50 border border-gray-300 text-gray-900 sm:text-sm rounded-full focus:ring-blue-600 focus:border-blue-600 block w-full p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="    full name"
              style={{ width: '350px', margin: 'auto' }}
              required
            />
            <FontAwesomeIcon icon={faUser} size="1x" className="mr-2 color-red-950"/>
          </div>
          <div className="input-group" style={{ position: 'absolute', top: '90px', left: '50%', transform: 'translateX(-50%)', width: '100%', textAlign: 'center' }}>
            <input
              type="text"
              name="number"
              id="number"
              value={formData.number}
              onChange={handleInputChange}
              className="bg-red-50 border border-gray-300 text-gray-900 sm:text-sm rounded-full focus:ring-blue-600 focus:border-blue-600 block w-full p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="      number"
              style={{ width: '350px', margin: 'auto' }}
              required
            />
            <FontAwesomeIcon icon={faPhone} size="1x" className="mr-2 color-red-950" />
          </div>
          <div className="input-group" style={{ position: 'absolute', top: '160px', left: '50%', transform: 'translateX(-50%)', width: '100%', textAlign: 'center' }}>
            <input
              type="text"
              name="pin"
              id="pin"
              value={formData.pin}
              onChange={handleInputChange}
              className="bg-red-50 border border-gray-300 text-gray-900 sm:text-sm rounded-full focus:ring-blue-600 focus:border-blue-600 block w-full p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="    pin"
              style={{ width: '350px', margin: 'auto' }}
              required
            />
            <FontAwesomeIcon icon={faLock} size="1x" className="mr-2 color-red-950" />
          </div>
          <button type="submit" className="rounded-full w-80 m-auto px-4 py-2 text-white bg-blue-950 text-lg absolute inset-x-0 bottom-20">
            Create an account
          </button>
          <button type="button" onClick={handleLoginClick} className="rounded-full w-80 m-auto px-4 py-2 text-white bg-blue-950 text-lg absolute inset-x-0 bottom-6">
            Login
          </button>
        </form>
      </div>
    </section>
  );
}

export default RegistrationForm;
