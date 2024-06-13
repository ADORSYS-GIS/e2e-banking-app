import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentOptions: React.FC = () => {
  const navigate = useNavigate();

    const handleManuallyClick = () => {
        navigate('/recipient_info');
    };
    const handleQRscanClick = () => {
        navigate('/QR_scan');
    };
  return ( 
    <div className="container">
      <div className="absolute inset-x-6 top-12 h-40 rounded-lg">
        <h5 className="h-auto text-center pt-9 mb-2 text-2xl font-bold tracking-tight text-black">Payment Option.</h5>
        <h5 className="text-center pt-9 mb-2 text-black">Choose the option you wish to pay</h5>
      </div>
      <div className="pt-12">
          <button onClick={handleManuallyClick} className='bg-blue-950 rounded-full w-80 m-auto px-4  text-white text-lg absolute  inset-x-0 mb-20 bottom-12'>Input Manually</button>
          <br></br>
        <div className="pt-12">
          <button onClick={handleQRscanClick} className="bg-blue-950 rounded-full w-80 m-auto px-4  text-white text-lg absolute  inset-x-0 bottom-12"
           type='button'>
            QR Scan
          </button>
        </div>
      </div>
      {/* {showQRScanner && <QRScannerComponent />}
      {showInputManually && <RecipientInfo />} Render RecipientInfo component when showInputManually is true */}
    </div>
  );
};

export default PaymentOptions
