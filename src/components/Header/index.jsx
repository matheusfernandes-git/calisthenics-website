import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.png";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import { useState } from "react";
import { Links } from "./Links/index";

export default function Header() {
  const [open, setOpen] = useState(false);
  const showBurger = () => setOpen(!open);

  return (
    <header>
      <div className="div_img">
        <a href="#home" alt="home">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="nav_bar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showBurger} />
        </Link>
      </div>
      <nav className={open ? "nav_menu active" : "nav_menu"}>
        <ul className="nav_menu_itens" onClick={showBurger}>
          <li className="navbar_toggle">
            <Link to="#" className="menu-bars-closed">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {Links.map((link, index) => {
            return (
              <li key={index} className={link.cName}>
                <a href={link.to}>{link.name}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
