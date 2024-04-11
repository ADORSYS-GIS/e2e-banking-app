import React, { useState } from ;
import QRScannerComponent from './scan_rq';

const PaymentOptions: React.FC = () => {
  const [showQRScanner, setShowQRScanner] = useState<boolean>(false);
  const [showInputManually, setShowInputManually] = useState<boolean>(false);

  const handleScanQRClick = () => {
    setShowQRScanner(true);
  };

  const handleInputManuallyClick = () => {
    setShowInputManually(true);
  };

  return (
    <div className="container">
      <h2>Payment Options</h2>
      <p>Please select how you would like to send money:</p>
      <button onClick={handleInputManuallyClick}>Input Manually</button>
      <button onClick={handleScanQRClick}>Scan QR Code</button>

      {showQRScanner && <QRScannerComponent />}
      {showInputManually && <InputManuallyComponent />}
    </div>
  );
};

export default PaymentOptions;