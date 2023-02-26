import React from "react";
import ProjectList from "./DashBoardComponents/ProjectLists/ProjectLists";

import User from "./DashBoardComponents/User/User";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <User
        name="New User"
        icon="https://i.imgur.com/3Ux3xUe.png"
        skills={["Machine Learning", "iOS Development", "Backend Development"]}
        interests={[
          "Artificial Intelligence",
          "Mobile Development",
          "Data Science",
        ]}
        github="https://github.com/eegbunam"
        project="Building a machine learning model to predict stock prices."
      />

      <ProjectList />
    </div>
  );
};

export default Dashboard;
