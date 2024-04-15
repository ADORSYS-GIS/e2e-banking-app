import React, { useEffect } from 'react';
import axios from 'axios';
import SendMoneyConfirmation from './SendMoneyConfirmation';

const OKPage: React.FC = () => {
  const baseURL = 'http://localhost:5000';
  const api = axios.create({
    baseURL,
    timeout: 5000,
  });

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

  useEffect(() => {
    const sendMoney = async () => {
      try {
        const response = await mockSend_MoneyAPI('12347656', '1234567890', 100);
        console.log("Mock API Response", response);
      } catch (error) {
        console.error("Mock API Error", error);
      }
    };

    sendMoney();
  }, []);

  return (
    <div className="flex justify-center items-center  mb-34 bg-800 text-black text-sm">
      <div className="">
        <SendMoneyConfirmation onSuccess={(successMessage) => console.log(successMessage)} />

      </div>
    </div>
  );
};

export default OKPage;