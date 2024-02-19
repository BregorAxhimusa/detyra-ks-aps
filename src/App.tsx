import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


import UserView from "./components/UserView";
import UserList from "./components/UserList";


const App: React.FC = () => {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark d-flex justify-content-center">
        <a href="/" className="navbar-brand">
          KS Aps Assignement
        </a>
      </nav>

      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<UserList/>} />
          <Route path="/users" element={<UserList/>} />
          <Route path="/user/:id" element={<UserView/>} />
        </Routes>
      </div>

      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"></a>
            <span className="mb-3 mb-md-0 text-muted">© 2024</span>
          </div>
        </footer>
      </div>

    </div>
  );
}

export default App;