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
      <div className="rounded-lg w-80 m-auto px-4 py-2  text-lg absolute  inset-x-0 top-12 bg-gray-100">
        <h5 className="text-bold text-2xl text-black text-center pb-5">Payment Option.</h5>
        <h5 className="text-sm text-center text-black pb-4">Choose the option you wish to pay</h5>
      </div>
      <div className="pt-12">
          <button onClick={handleManuallyClick} className='rounded-full w-80 m-auto px-4 py-2 text-white bg-blue-950 text-lg absolute inset-x-0 bottom-20'>Input Manually</button>
          <br></br>
        <div className="pt-12">
          <button onClick={handleQRscanClick} className="rounded-full w-80 m-auto px-4 py-2 text-white bg-blue-950 text-lg absolute inset-x-0 bottom-6"
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
