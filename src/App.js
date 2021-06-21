import React from "react";
import "./App.css";
import MainPage from "./MainPage";
import Nav from "./components/Navbar/Nav";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <MainPage />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
