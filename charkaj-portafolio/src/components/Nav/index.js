import React from "react";

const Nav = ({ pages, currentPage, setCurrentPage }) => {
  return (
    <nav className="nav d-flex justify-content-between align-items-center">
      Nav
      {pages.map((page) => (
        <a href="/#" key={page} className="nav-link">
          {page}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
