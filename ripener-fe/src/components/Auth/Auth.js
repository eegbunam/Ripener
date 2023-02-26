import React from "react";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import animationData from "../../animations/Ripe_Banana";
import "./Auth.css";

const Auth = ({ setIsAuthenticated }) => {
  // Define Lottie animation options
  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // Handle GitHub logi
  const notavailableyet = () => {
    alert("Coming Soon");
  };

  return (
    <div className="auth-screen">
      <motion.div
        className="animation-container"
        animate={{ opacity: [0, 1], scale: [0.5, 1] }}
        transition={{ duration: 1 }}
      >
        <Lottie options={animationOptions} />
      </motion.div>
      <div class="flex flex-row">
        <h1>Welcome to Ripener</h1>
        <h3>
          {" "}
          The best site to level up your skill or find the best verified
          engineers!{" "}
        </h3>
      </div>

      <div className="auth-content flex flex-row">
        <button className="github-login-button" onClick={notavailableyet}>
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="GitHub logo"
            className="github-logo"
          />
          Get Ripened!
        </button>

        <button className="harvester" onClick={notavailableyet}>
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="GitHub logo"
            className="github-logo"
          />
          Havrvest!
        </button>
      </div>
      <h3> Harvert is for recruiters and compnaies looking new talent</h3>
      <h3>
        {" "}
        If you are an engineer looking to get better then try Get Ripened
      </h3>
    </div>
  );
};

export default Auth;
