import React from 'react';

const OKPage = () => {
 //fake data made while waiting for others to do the actual implementation
  const recipientName = "Mr Stephane";
  const amount = 100.50;
  const transferDate = new Date().toLocaleDateString(); // Today's date
  const referenceNumber = "1234567890";
  const newBalance = 500.25;

  // success message to be displayed on the screen
  const successMessage = `Successful transfer of FCFA${amount.toFixed(2)} to ${recipientName} on ${transferDate}. Reference: ${referenceNumber}, New Balance: FCFA${newBalance.toFixed(2)}`;

  return (
    <div className="flex justify-center items-center  mb-34 border border-white bg-800 text-black text-sm">
      <div className="">
        <div className="rounded-lg w-80 m-auto px-4 py-2  text-lg absolute  inset-x-0 top-12 bg-gray-100">
          <div>
            <h1 className="text-2xl font-bold pb-10">Confirmation Alert!</h1>
            <p className="text-md">{successMessage}</p>
          </div>
        </div>
        <div className="pt-12">
          <button className="rounded-full w-80 m-auto px-4 py-2 text-white text-lg absolute  inset-x-0 bottom-12">
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default OKPage;
