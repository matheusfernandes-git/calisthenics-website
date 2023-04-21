import { Link } from "react-router-dom";
import './Header.css'
import logo from '../../assets/logo.png';

export default function Header() {
  const Links = [
    {
      name: "Home",
      to: "/",
      cName: 'nav_text'
    },
    {
      name: "Benefícios",
      to: "/beneficios",
      cName: 'nav_text'
    },
    {
      name: "Contact",
      to: "/contact",
      cName: 'nav_text'
    },
  ];
  
  return (
    <header>
      <div className="container-logo">
        <img src={logo} alt="" />
      </div>
        <ul>
          {Links.map((link) => (
            <li className={link.cName}>
              <Link to={link.to}>{link.name}</Link>
            </li>
          ))}
        </ul>
    </header>
  );
}
