import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeroImg from "../../assets/image2.jpeg";

const bgStyle = {
  backgroundImage: `url(${HeroImg})`,
  backgroundSize: "cover",
  backgroundPosition: "top",
  backgroundRepeat: "no-repeat",
  width: "100%",
};

const FadeUp = (delay) => ({
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: "easeInOut" } },
});

const Hero = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    amount: 10, // Default donation
  });

  const handleClick = (e) => {
    const name = e.target.name;
    setData((prev) => ({
      ...prev,
      [name]: e.target.value,
    }));
  };

  return (
    <div style={bgStyle}>
      <div className="min-h-[650px] md:min-h-[750px] bg-gradient-to-r from-black/80 to-primary/60 pt-32 pb-10 md:pt-48">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 text-white">

            {/* Hero Text */}
            <div className="flex flex-col items-center text-center gap-5 lg:items-start lg:text-left lg:max-w-[450px]">
              <motion.h1 variants={FadeUp(0.2)} initial="initial" animate="animate" className="text-5xl lg:text-7xl font-bold">
                Donate Save Lives
              </motion.h1>
              <motion.p variants={FadeUp(0.4)} initial="initial" animate="animate">
                Your small contribution can make a big difference.
              </motion.p>
              <div className="space-x-4">
                <motion.button
                  variants={FadeUp(0.6)}
                  initial="initial"
                  animate="animate"
                  className="btn-primary"
                  onClick={() => navigate("/banner")}
                >
                  Get Started
                </motion.button>

                <motion.button
                  variants={FadeUp(0.8)}
                  initial="initial"
                  animate="animate"
                  className="btn-outline"
                  onClick={() => navigate("/login")}
                >
                  Login
                </motion.button>
              </div>
            </div>

            {/* Donation Form */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="w-[90%] md:w-[400px] mx-auto p-4 bg-white dark:bg-black text-black dark:text-white rounded-2xl shadow-md"
            >
              <div>
                <h1 className="text-lg text-center font-semibold">Quick Donation Form</h1>
                <div className="flex items-center justify-center gap-4 py-4">
                  {[1, 5, 10, 99].map((amt) => (
                    <button
                      key={amt}
                      onClick={() => setData({ ...data, amount: amt })}
                      className="button-square"
                    >
                      ${amt.toString().padStart(2, "0")}
                    </button>
                  ))}
                </div>

                <div className="space-y-6">
                  <input
                    type="number"
                    name="amount"
                    onChange={handleClick}
                    value={data.amount}
                    min={1}
                    max={1000}
                    placeholder="Amount"
                    className="w-full border dark:border-gray-800 px-4 py-2 rounded-lg dark:bg-black"
                  />
                  <input
                    type="text"
                    name="name"
                    onChange={handleClick}
                    placeholder="Name"
                    className="w-full border dark:border-gray-800 px-4 py-2 rounded-lg dark:bg-black"
                  />
                  <input
                    type="email"
                    name="email"
                    onChange={handleClick}
                    placeholder="Email"
                    className="w-full border dark:border-gray-800 px-4 py-2 rounded-lg dark:bg-black"
                  />

                  {/* PayPal Buttons */}
                  <PayPalScriptProvider options={{ "client-id": "AVLqkjGW8FCI6m59SUB1lndaSF28VE2lnvQPOprb6CxpRhBpVmdhYuYMFxejNwc5S3Nrq8bOUqy__h6V", currency: "USD" }}>
                    <PayPalButtons
                      style={{ layout: "vertical" }}
                      createOrder={async () => {
                        const response = await fetch("http://localhost:8091/api/payment/create-order", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({ amount: data.amount }),
                        });
                        const order = await response.json();
                        return order.id;
                      }}
                      onApprove={async (data) => {
                        const response = await fetch(`http://localhost:8091/api/payment/capture-order/${data.orderID}`, {
                          method: "POST",
                        });
                        const details = await response.json();
                        alert(`Thank you, ${details.payer.name.given_name}, for your donation of $${data.amount}!`);
                      }}
                    />
                  </PayPalScriptProvider>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
