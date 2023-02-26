import React from "react";
import { motion } from "framer-motion";
import { AiOutlineArrowDown } from "react-icons/ai";
import "./ProjectLists.css";
const recommendedProjects = [
  {
    id: 1,
    name: "Project A",
    description:
      "This project is recommended for you because it uses the technologies you are interested in learning.",
    link: "https://example.com",
  },
  {
    id: 2,
    name: "Project B",
    description:
      "This project is recommended for you because it is a beginner-friendly open source project.",
    link: "https://example.com",
  },
  {
    id: 3,
    name: "Project C",
    description:
      "This project is recommended for you because it has a good community and you can learn a lot from other contributors.",
    link: "https://example.com",
  },
];

const ProjectList = () => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="project-list-container"
    >
      <h2 className="project-list-title">Recommended Projects</h2>
      <div className="project-list">
        {recommendedProjects.map((project) => (
          <div key={project.id} className="project">
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-link-container">
              <a href={project.link} className="project-link">
                <button className="contribute-btn">Contribute</button>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="see-all-btn-container">
        <button className="see-all-btn">
          See All Available Projects
          <AiOutlineArrowDown className="see-all-icon" />
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectList;
