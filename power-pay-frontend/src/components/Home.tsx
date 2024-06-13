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

    useEffect(() => {
        // Prevent scrolling on mount
        document.body.style.overflow = 'hidden';
        // Re-enable scrolling when component unmounts
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen overflow-hidden">
            <div className="rounded-full object-cover h-[100px] w-[300px] pt-0 pb-12 w-32 mb-8">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="w-80 m-auto">
                <p className="pt-0 text-gray-700">Send money far and wide with ease.</p>
            </div>
            <div className="pt-12 w-80 m-auto">
                <button className="rounded-full w-full px-4 py-2 my-4 text-white bg-blue-950 hover:border-blue-950 text-lg"
                    onClick={handleSendMoneyClick}>
                    Send Money
                </button>
                <button
                    className="rounded-full w-full px-4 py-2 text-white bg-blue-950 text-lg"
                    onClick={handleCheckBalanceClick}>
                    Check Balance
                </button>
            </div>
        </div>
    );
};

export default Home;