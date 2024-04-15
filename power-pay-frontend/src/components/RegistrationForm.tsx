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

  return (
    <section className="flex flex-col items-center pt-6">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-10 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Create an account</h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div>
              <input type="text" name="name" id="name" value={formData.name} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="full name" required />
            </div>
            <div>
              <input type="tel" name="number" id="number" value={formData.number} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="number" required />
            </div>
            <div>
              <input type="password" name="pin" id="pin" value={formData.pin} onChange={handleInputChange} pattern="\d{4,}" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="pin" required />
            </div>
            <button type="submit" className="w-full text-white bg-black hover:bg-gray-900 focus:ring-4 focus:outline-none 
            focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
            dark:bg-black dark:hover:bg-gray-900 dark:focus:ring-blue-800">Create an account</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default RegistrationForm;
