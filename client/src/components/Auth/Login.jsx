import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authImage from "../../assets/authImage.png";

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8091/api/login", input);
      alert("Login successful!");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed!");
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 hidden md:block">
        <img src={authImage} alt="Login" className="h-full w-full object-cover" />
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center bg-gray-100">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-lg w-[90%] max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
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
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition">
            Login
          </button>
          <p className="text-center mt-4">
            Don’t have an account?{" "}
            <Link to="/register" className="text-blue-600 underline">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
