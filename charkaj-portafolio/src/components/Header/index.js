import React from "react";
import Nav from "../Nav";

const Header = ({ pages, currentPage, setCurrentPage }) => {
  return (
    <header>
      Header
      {/* <image src="./assets/images/logo.png" alt="logo" /> */}
      <div className="container">
        <h1>Charkaj</h1>
        <Nav
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </header>
  );
};

export default Header;
