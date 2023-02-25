import React from "react";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import animationData from "../../animations/Auth_Github.json";
import "./Auth.css";

const Auth = () => {
  // Define Lottie animation options
  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // Handle GitHub login
  const handleGithubLogin = () => {
    // TODO: Implement GitHub authentication logic
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
      <div className="auth-content">
        <h1>Welcome to Ripener /some_icon/ </h1>
        <button className="github-login-button" onClick={handleGithubLogin}>
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="GitHub logo"
            className="github-logo"
          />
          Log in with GitHub
        </button>
      </div>
    </div>
  );
};

export default Auth;
