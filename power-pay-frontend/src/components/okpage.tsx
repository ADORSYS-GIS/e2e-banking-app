import React, { useEffect } from 'react';
import axios from 'axios';
import SendMoneyConfirmation from './SendMoneyConfirmation';

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

  return (
    <div className="flex justify-center items-center  mb-34 bg-800 text-black text-sm">
      <div className="">
        <SendMoneyConfirmation onSuccess={(successMessage) => console.log(successMessage)} />
Implement-the-frontend-Pin-input-for-send-money-using-PPA-#25


main
      </div>
    </div>
  );
};

export default OKPage;