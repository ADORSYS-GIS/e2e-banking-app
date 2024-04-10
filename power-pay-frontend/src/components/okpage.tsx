import React, { useEffect } from 'react';
import axios from 'axios';

const OKPage: React.FC = () => {
  const baseURL = 'http://localhost:5000';   // specifying the base URL with the desired port
  const api = axios.create({ 
    baseURL, 
    timeout: 5000,
  });

  // Mock function to simulate a successful API call
  const mockSend_MoneyAPI = async ( 
    senderPhoneNumber: string, 
    recipientPhoneNumber: string, 
    amount: number
  ) => {
    try {
      const response = await api.post('/send_money', { 
        senderPhoneNumber, 
        recipientPhoneNumber, 
        amount 
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  // Handle API call when component mounts
  useEffect(() => {
    mockSend_MoneyAPI('12347656', '1234567890', 100)
      .then((response) => {
        console.log("Mock API Response", response);
      })
      .catch((error) => {
        console.error("Mock API Error", error);
      });
  }, []);

 //fake data made while waiting for others to do the actual implementation
  const recipientName = "Mr Stephane";
  const amount = 100.50;
  const transferDate = new Date().toLocaleDateString(); // Today's date
  const referenceNumber = "1234567890";
  const newBalance = 500.25;

  // success message to be displayed on the screen
  const successMessage = `Successful transfer of FCFA${amount.toFixed(2)} to ${recipientName} on ${transferDate}. Reference: ${referenceNumber}, New Balance: FCFA${newBalance.toFixed(2)}`;

  return (
    <div className="flex justify-center items-center  mb-34 border border-white bg-800 text-black text-sm">
      <div className="">
        <div className="rounded-lg w-80 m-auto px-4 py-2  text-lg absolute  inset-x-0 top-12 bg-gray-100">
          <div>
            <h1 className="text-2xl font-bold pb-10">Confirmation Alert!</h1>
            <p className="text-md">{successMessage}</p>
          </div>
        </div>
        <div className="pt-12">
          <button className="rounded-full bg-blue-950 hover:bg-blue-900 w-80 m-auto px-4 py-2 text-white text-lg absolute  inset-x-0 bottom-12">
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default OKPage;