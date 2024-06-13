import React, { useState } from 'react';
import axios from 'axios';

const FakeApi: React.FC = () => {
  const baseURL = 'http://localhost:5000';
  const api = axios.create({ 
    baseURL, 
    timeout: 5000,
  });

  const [recipientPhoneNumber, setRecipientPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const mockSend_MoneyAPI = async (
    recipientPhoneNumber: string, 
    amount: number
  ) => {
    try {
      if (!recipientPhoneNumber || !amount) {
        setErrorMessage("Please fill in all fields");
      } else {
        console.log("Transaction Successful");
        console.log("Recipient Phone Number:", recipientPhoneNumber);
        console.log("Amount:", amount);
        setErrorMessage('');
        await api.post('/UserInfo', { 
          recipientPhoneNumber, 
          amount 
        });
      }
    } catch (error) {
      setErrorMessage("An error occurred while processing the transaction.");
      console.error("Error:", error);
    }
  }

  const handleSendMoney = () => {
    mockSend_MoneyAPI(recipientPhoneNumber, parseInt(amount));
  }

  return (
    <div>
      <p>FAKED API</p>
      <input
        type="text"
        value={recipientPhoneNumber}
        onChange={(e) => setRecipientPhoneNumber(e.target.value)}
        placeholder="Recipient Phone Number"
      />
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <button onClick={handleSendMoney}>Send Money</button>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default FakeApi;
