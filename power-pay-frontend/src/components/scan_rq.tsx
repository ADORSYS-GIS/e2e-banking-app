import {  useEffect, useRef as ref } from 'react';
import { useNavigate } from 'react-router-dom';
import { Scanner as S } from '@yudiel/react-qr-scanner'; // Importing Scanner from @yudiel/react-qr-scanner
const Scanner: any = S;


const QRScannerComponent  = () => {
  const navigate = useNavigate();

    const handleCancelClick = () => {
        navigate('/payment');
    };
  const qrScannerRef = ref<any>(null);
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
      <div className="flex rounded-lg w-80 m-auto px-4 py-2  text-lg absolute  inset-x-0 top-4">
        <Scanner
          ref={qrScannerRef}
          on={handleScan}
          onError={handleError}
          facingMode="environment"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div className="pt-12">
      <button className="rounded-full w-80 m-auto px-4 py-2 text-white bg-red-600 text-lg absolute inset-x-0 bottom-20"
          onClick={handleCancelClick }
          >
            Cancel
          </button>
        <button onClick={() => qrScannerRef.current?.start()} className="rounded-full w-80 m-auto px-4 py-2 text-white bg-blue-950 text-lg absolute inset-x-0 bottom-6">Start Scan</button>
      </div>
    </div>
  );
};

export default QRScannerComponent;