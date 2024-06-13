import { useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.png';

import React, { useState, useEffect } from 'react';

const Home: React.FC = () => {
    const navigate = useNavigate();

    const handleCheckBalanceClick = () => {
        navigate('/pin_balance');
    };
    const handleSendMoneyClick = () => {
        navigate('/payment');
    };
    return (
        <div className="flex justify-center items-center  mb-34 bg-800 text-black text-sm">
            <div className="w-80 m-auto px-4 py-2  text-lg absolute  inset-x-0 top-12">
                <img src={Logo}  alt="Logo" />
                <p className="text-sm text-center text-black pb-4">Send money far and wide with ease.</p>
            </div>
            <div className="pt-12 w-80 m-auto">
                <button className="rounded-full w-80 m-auto px-4 py-2 text-white bg-blue-950 text-lg absolute inset-x-0 bottom-20"
                    onClick={handleSendMoneyClick}>
                    Send Money
                </button>
                <button

                    className="rounded-full w-80 m-auto px-4 py-2 text-white bg-blue-950 text-lg absolute inset-x-0 bottom-6"
                    onClick={handleCheckBalanceClick}>
                    Check Balance
                </button>
            </div>
        </div>
    );
};

export default Home;