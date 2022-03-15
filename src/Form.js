import React from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import ContactFormComponent from "./Task3";

function App() {
  return (
    <div className="App">
      <div className="container mt-5">
        <ContactFormComponent />
      </div>
    </div>
  );
}

export default App;
