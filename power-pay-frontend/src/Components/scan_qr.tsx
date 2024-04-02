import { useEffect, useRef } from 'react';
import { Scanner } from '@yudiel/react-qr-scanner'; // Importing Scanner from @yudiel/react-qr-scanner

const QRScannerComponent = () => {
  const qrScannerRef = useRef<any>(null);

  useEffect(() => {
    if (qrScannerRef.current) {
      qrScannerRef.current.start();
    }

    return () => {
      if (qrScannerRef.current) {
        qrScannerRef.current.stop();
      }
    };
  }, []);

  const handleScan = (data: string | null) => {
    if (data) {
      console.log('Scanned data:', data);
    }
  };

  const handleError = (err: any) => {
    console.error('QR scanner error:', err);
  };

  return (
    <div>
      <Scanner
        ref={qrScannerRef}
        onScan={handleScan}
        onError={handleError}
        facingMode="environment"
        style={{ width: '100%', height: 'auto' }}
      />
      <button onClick={() => qrScannerRef.current?.start()}>Start Scan</button>
    </div>
  );
};

export default QRScannerComponent;
