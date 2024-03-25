//faking the API
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OKpage: React.FC = () => {
  const baseURL = 'http://localhost:5000';   // specifying the base URL with the desired port
  const api = axios.create({ 
    baseURL, 
    timeout: 5000,
  });

    // Mock function to simulate a succesful API call
  const mockSend_MoneyAPI = async ( 
    senderPhoneNumber: string, 
    recipientPhoneNumber: string, 
    amount: number
     ) => {
    try {
      const response = await api.post('/send_money', { 
        senderPhoneNumber, 
        recipientPhoneNumber, 
        amount });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  //  Handle API call when component mounts
  useEffect(() => {
    mockSend_MoneyAPI('12347656', '1234567890', 100)
    .then((response) => {
      console.log("Mock API Response", response);
    })
    .catch((error) => {
      console.error("Mock API Error", error);
    });
  }, []);
}


//building the ok page for successful transfer
const OKPage = () => {
  return (
    <div className="card">
      <div className="ok-page">
        <h1>Success!</h1>
        <br></br>
        <p>The money was successfully transfered.</p>
        <br></br>
      </div> 
      <button className ="okbtn">OK</button>
    </div>
  );
};

export default OKPage;