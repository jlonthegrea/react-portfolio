import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contacts from "./pages/Contactinfo";
import Footer from "./components/Footer";
import "./App.css"


function App() {
  const [currentPage, setCurrentPage] = useState("About");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer/>
    </>
  );
}

export default App;