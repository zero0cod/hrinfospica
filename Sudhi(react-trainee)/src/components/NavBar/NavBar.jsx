import React, { useState } from "react";
import "./navbar.css";
const NavBar = () => {
  const [search, setSearch] = useState();
  const handleClick = () => {
    localStorage.setItem("search", JSON.stringify({ search }));
  };

  return (
    <div className="nav-container">
      <h3>Developer Sudhi</h3>
    </div>
  );
};

export default NavBar;
