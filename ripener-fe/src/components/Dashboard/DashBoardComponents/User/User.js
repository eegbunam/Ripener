import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import "./User.css";

const User = ({ name, skills, interests, github, project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="user"
      style={{ "--main-color": "#FFD46F" }}
    >
      <div className="user-header">
        <div className="user-icon">
          <motion.img
            src="https://www.f6s.com/content-resource/profiles/3103729_th1.jpg"
            alt="user icon"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
        </div>
        <div className="user-info">
          <h2 className="user-name">{name}</h2>
          <div className="user-skill">{skills.join(", ")}</div>
          <div className="user-interest">{interests.join(", ")}</div>
        </div>
      </div>
      <div className="user-github">
        <FaGithub />
        <a href={`https://github.com/${github}`}>{github}</a>
      </div>
    </motion.div>
  );
};

export default User;
