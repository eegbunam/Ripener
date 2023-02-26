import React, { useState } from "react";
import Auth from "./components/Auth/Auth";
import Dashbord from "./components/Dashboard/Dashboard";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      {isAuthenticated ? (
        <Dashbord />
      ) : (
        <Auth setIsAuthenticated={setIsAuthenticated} />
      )}
    </div>
  );
}

export default App;
