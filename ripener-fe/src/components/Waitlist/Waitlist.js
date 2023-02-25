import React, { useState } from "react";
import Lottie from "react-lottie";
import animationData from "../../animations/Waitlist2.json";
import "./Waitlist.css";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import ReactLoading from "react-loading";

const Waitlist = () => {
  // Define Lottie animation options
  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // Declare state for form values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    // do something with the email
  };

  // Handle email input change
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  return (
    <div className="waitlist-screen">
      <div className="waitlist-content">
        <h1>Be the first to Join Ripener</h1>
        <p>The first product to comercialise contributions to open source!</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Enter your email:</label>
            <div className="input-group">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={email}
                onChange={handleEmailChange}
              />
              <button type="submit">Join Waitlist</button>
            </div>
          </div>
        </form>
        <div className="input-group"></div>
        <div className="animation-container">
          <Lottie options={animationOptions} height={400} width={400} />
        </div>
        <form>
          <div className="form-group"></div>
        </form>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
        >
          <img src="https://assets.codepen.io/35984/star.svg" alt="star" />
        </motion.div>
        <div className="additional-animations">
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            recycle={false}
            numberOfPieces={100}
          />
          <ReactLoading
            type={"spinningBubbles"}
            color={"#ffffff"}
            height={50}
            width={50}
          />
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
