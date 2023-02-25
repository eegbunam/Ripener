import React from "react";
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

  return (
    <div className="waitlist-screen">
      <div className="waitlist-content">
        <h1>Be the first to Join Ripener</h1>
        <p>The first product to comercialise contributions to open source!</p>

        <div className="input-group">
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="eg:test@gmail.com"
          />
          <button type="submit">Join Waitlist</button>
        </div>
        <div className="animation-container">
          <Lottie options={animationOptions} height={400} width={400} />
        </div>
        <form>
          <div className="form-group"></div>
        </form>
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
