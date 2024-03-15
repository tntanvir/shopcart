// src/components/Payment.js

import React, { useState } from "react";

const Payment = () => {
    const [formData, setFormData] = useState({
        phoneNumber: "",
        amount: "",
        pin: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your payment processing logic here
        console.log("Payment submitted!", formData);
    };

    return (
        <div className="max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Send Money</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="phoneNumber" className="block text-sm font-medium mb-1 text-gray-700">Phone Number</label>
                    <input
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        className="form-input w-full border border-gray-300 rounded-md px-4 py-2"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="amount" className="block text-sm font-medium mb-1 text-gray-700">Amount</label>
                    <input
                        type="text"
                        id="amount"
                        name="amount"
                        className="form-input w-full border border-gray-300 rounded-md px-4 py-2"
                        value={formData.amount}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="pin" className="block text-sm font-medium mb-1 text-gray-700">PIN</label>
                    <input
                        type="password"
                        id="pin"
                        name="pin"
                        className="form-input w-full border border-gray-300 rounded-md px-4 py-2"
                        value={formData.pin}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600">Send Money</button>
            </form>
        </div>
    );
};

export default Payment;
