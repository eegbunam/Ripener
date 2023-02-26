import React from "react";
import { motion } from "framer-motion";

import "./User.css";
import source from './profile-image.png'

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
            src={source}
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
    
    </motion.div>
  );
};

export default User;
