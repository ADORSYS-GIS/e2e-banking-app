import React from 'react';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import FakeApi from './fake_api';

const UserInfo: React.FC = () => {
    const mockSend_MoneyAPI = FakeApi(); // Call the FakeApi function to get the function mockSend_MoneyAPI

    const formik = useFormik({
        initialValues: {
            phone: '',
            amount: ''
        },
        onSubmit: async (values) => {
            try {
                // Call the mockSend_MoneyAPI function
                const response = await mockSend_MoneyAPI(values.phone, parseInt(values.amount));
                console.log("API Response:", response);
                // Handle success, navigate to next step, etc.
            } catch (error: any) {
                // Handle errors thrown by the mockSend_MoneyAPI function
                console.error("An error occurred:", error.message);
                
            }
        }
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        // Allow only numbers in the input fields
        const newValue = value.replace(/[^\d]/g, ''); 
        formik.setFieldValue(name, newValue);
    };

    return (
        <div className="max-w-md w-full bg-gray-100 p-8 rounded shadow-lg mt-16">
            <form onSubmit={formik.handleSubmit}>
            <div className="absolute top-0 left-0 mt- ml-4">
            <Link to={`PaymentOptions`}>
                <button className="hover:bg-blue-700 text-black font-bold py-61 px-4 rounded">
                &larr; 
            </button>
            </Link>
            </div>
                <div className="mb-4">
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder='Phone Number'
                        onChange={handleChange}
                        value={formik.values.phone}
                        style={{ color: 'black' }}
                        className="mt-1 p-2 border border-gray-300 rounded-full w-full bg-white"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        id="amount"
                        name="amount"
                        placeholder="Amount"
                        onChange={handleChange}
                        value={formik.values.amount}
                        className="mt-1 p-2 border border-gray-300 rounded-full w-full bg-white"
                    />
                </div>
                <button type="submit" className="rounded-full bg-blue-950 hover:bg-blue-950 w-80 m-auto px-4 py-2 text-white text-lg absolute  inset-x-0 bottom-12">Submit</button>
            </form>
        </div>
    );
}

export default UserInfo;
