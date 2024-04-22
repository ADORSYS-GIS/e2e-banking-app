import React, { useState } from 'react';
import QRScannerComponent from './scan_rq';
import UserInfo from './userinfo'; // Import the UserInfo component
import { Link } from "react-router-dom";

const PaymentOptions: React.FC = () => {
  const [showQRScanner, setShowQRScanner] = useState<boolean>(false);
  const [showInputManually, setShowInputManually] = useState<boolean>(false);

  const handleScanQRClick = () => {
    setShowQRScanner(true);
    setShowInputManually(false); // Close InputManuallyComponent if open
  };

  const handleInputManuallyClick = () => {
    setShowInputManually(true);
    setShowQRScanner(false); // Close QRScannerComponent if open
  };

  return (
    <div className="container">
      <div className="bg-gray-100 absolute inset-x-6 top-12 h-40 rounded-lg">
        <h5 className="h-auto text-center pt-9 mb-2 text-2xl font-bold tracking-tight text-black">Payment Option.</h5>
        <h5 className="text-center pt-9 mb-2 text-black">Choose the option you wish to pay</h5>
      </div>
      <div className="pt-12">
        <Link to={`UserInfo`}>
          <button onClick={handleInputManuallyClick} className='bg-blue-950 rounded-full w-80 m-auto px-4  text-white text-lg absolute  inset-x-0 mb-20 bottom-12'>Input Manually</button>
          <br></br>
        </Link>
        <div className="pt-12">
  <Link to={`QRScannerComponent`}>
          <button onClick={handleScanQRClick} className="bg-blue-950 rounded-full w-80 m-auto px-4  text-white text-lg absolute  inset-x-0 bottom-12">
            QR Scan
          </button>
</Link>
        </div>
      </div>
      {showQRScanner && <QRScannerComponent />}
      {showInputManually && <UserInfo />} {/* Render UserInfo component when showInputManually is true */}
    </div>
  );
};

export default PaymentOptions
