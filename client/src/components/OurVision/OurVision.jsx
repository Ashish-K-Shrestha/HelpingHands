import { motion } from "framer-motion";

const fadeAnimation = (delay) => {
  return {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};
const OurVision = () => {
  return (
    <div className="container my-16 bg-white dark:bg-gray-900 dark:text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        <motion.div
          variants={fadeAnimation(0.2)}
          initial="initial"
          whileInView="animate"
          className="mx-5 md:mx-8 px-6 py-10 space-y-4 shadow-lg border-t-8 border-green-800 dark:bg-slate-800"
        >
          <h1 className="text-xl font-semibold">Our vision</h1>
          <p>
            HelpingHands aims to become a trusted digital platform that bridges the gap between donors and charitable causes, offering a seamless, transparent, and emotionally engaging donation experience that encourages regular giving and community impact.
          </p>
          <a
            href="#"
            className="inline-block hover:text-primary border-b hover:border-primary"
          >
            Learn More
          </a>
        </motion.div>
        <motion.div
          variants={fadeAnimation(0.4)}
          initial="initial"
          whileInView="animate"
          className="mx-5 md:mx-8 px-6 py-10 space-y-4 shadow-lg border-t-8 border-yellow-500 dark:bg-slate-800"
        >
          <h1 className="text-xl font-semibold">Our vision</h1>
          <p>
            The vision of HelpingHands is to empower individuals and organizations to create meaningful change by providing a user-friendly, secure, and accessible donation environment where generosity meets real-world needs through technology-driven solutions.
          </p>
          <a
            href="#"
            className="inline-block hover:text-primary border-b hover:border-primary"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default OurVision;
