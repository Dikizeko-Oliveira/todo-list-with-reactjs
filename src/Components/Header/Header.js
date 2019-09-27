import React from "react";

import "./Style.css";

const Header = () => (
  <header id="main-header">
    <div className="logo">
      <h1>
        Dev<span>Todos.</span>
      </h1>
    </div>
    <nav className="navbar-menu">
      <div className="user-likes">
        <strong> Development</strong>
      </div>
      <div className="user-perfil">
        <strong> Naruto Uzumaki</strong>
      </div>
    </nav>
  </header>
);

export default Header;
