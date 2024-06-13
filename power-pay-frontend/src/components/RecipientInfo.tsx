import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
interface FormValues {
    phone: string;
    amount: string;
}

const RecipientInfo: React.FC = () => {
    const navigate = useNavigate();

    const handleCancelClick = () => {
        navigate('/home');
    };
    const handleConfirmClick = () => {
        navigate('/pin_send');
    };
    const formik = useFormik<FormValues>({
        initialValues: {
            phone: '',
            amount: ''
        },
        onSubmit: (values: any) => {
            // Handle form submission
            console.log(values);
        }
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        // Allow only numbers in the input fields
        const newValue = value.replace(/[^\d]/g, ''); 
        formik.setFieldValue(name, newValue);
    };

    return (
        <div className="flex  flex-col items-center justify-center bg-800 text-black text-sm">
            <form onSubmit={formik.handleSubmit} className="max-w-sm mx-auto w-80 mb-12">
                <div className="flex pb-4 flex-col items-center">
                    <div className="input-group">
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder='Phone Number'
                        onChange={handleChange}
                        value={formik.values.phone}
                        style={{ color: 'black' }}
                        className="text-lg px-12 rounded-full w-80 p-2.5 bg-red-50 dark:placeholder-gray-400 dark:text-black required"
                    />
                    <FontAwesomeIcon icon={faPhone} size="1x" className="absolute text-red-500 left-10 top-1/2 transform -translate-y-1/2 color-red-100" />
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="input-group">
                    <input
                        type="text"
                        id="amount"
                        name="amount"
                        placeholder="Amount"
                        onChange={handleChange}
                        value={formik.values.amount}
                        className="text-lg px-12 rounded-full w-80 p-2.5 bg-red-50 dark:placeholder-gray-400 dark:text-black required"
                    />
                    <FontAwesomeIcon icon={faMoneyBill} size="1x" className="absolute text-red-500 left-2 top-1/2 transform -translate-y-1/2 color-red-100" />
                    </div>
                </div>
                <div className="pt-12">
                    <button className="rounded-full w-80 m-auto px-4 py-2 my-16 text-white bg-red-600 hover:border-red-950 text-lg absolute  inset-x-0 bottom-12"
                    onClick={handleCancelClick}
                    >
                        Cancel
                    </button>
                    <button className="rounded-full w-80 m-auto px-4 py-2 text-white bg-blue-950  text-lg absolute  inset-x-0 bottom-12"
                    onClick={handleConfirmClick}
                    >
                        Confirm
                    </button>
                </div>
            </form>
        </div>
    );
}

export default RecipientInfo;
