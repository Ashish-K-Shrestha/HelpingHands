import { useLocation } from "react-router-dom";

const PaymentPage = () => {
    const { state } = useLocation(); // Access donation data

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
            <h1 className="text-3xl font-bold mb-4">Thank You for Choosing to Donate</h1>
            <p className="text-lg mb-2">Donor: <strong>{state?.name || "Anonymous"}</strong></p>
            <p className="text-lg mb-2">Email: <strong>{state?.email || "Not provided"}</strong></p>
            <p className="text-lg mb-6">Donation Amount: <strong>${state?.amount || 0}</strong></p>

            <button
                onClick={() => alert("Redirect to payment gateway here...")}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
            >
                Proceed to Payment Gateway
            </button>
        </div>
    );
};

export default PaymentPage;
