import React, { Component } from "react";
import "./header.css";
import logo from "../../../images/logo.png";

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <img src={logo} width={250} />
        <nav>
          <ul>
            <li>
              <a href="/" activeClassName="is-selected">
                Inicio
              </a>
            </li>
            <li>
              <a href="/videos" activeClassName="is-selected">
                Videos
              </a>
            </li>
            <li>
              <a href="/contacto" activeClassName="is-selected">
                Contacto
              </a>
            </li>
            <li>
              <a href="/perfil" activeClassName="is-selected">
                Perfil
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
