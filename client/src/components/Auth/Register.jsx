import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authImage from "../../assets/authImage.png";

const Register = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({ name: "", email: "", password: "" });

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8091/api/register", input);
            alert("Registration successful!");
            navigate("/login");
        } catch (err) {
            alert(err.response?.data?.message || "Registration failed!");
        }
    };

    return (
        <div className="flex h-screen">
            <div className="w-1/2 hidden md:block">
                <img src={authImage} alt="Register" className="h-full w-full object-cover" />
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center bg-gray-100">
                <form onSubmit={handleRegister} className="bg-white p-8 rounded-lg shadow-lg w-[90%] max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
                    <input
                        type="text"
                        name="name"
                        value={input.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        className="w-full p-3 mb-4 border rounded"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={input.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="w-full p-3 mb-4 border rounded"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        value={input.password}
                        onChange={handleChange}
                        placeholder="Password"
                        className="w-full p-3 mb-4 border rounded"
                        required
                    />
                    <button type="submit" className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition">
                        Register
                    </button>
                    <p className="text-center mt-4">
                        Already have an account?{" "}
                        <Link to="/login" className="text-blue-600 underline">Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;
