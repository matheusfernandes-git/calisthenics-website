import { Link } from "react-router-dom";
import './Header.css'

export default function Header() {
  const Links = [
    {
      name: "HOME",
      to: "/",
      cName: 'nav_text'
    },
    {
      name: "ABOUT",
      to: "/about",
      cName: 'nav_text'
    },
    {
      name: "CONTACT",
      to: "/contact",
      cName: 'nav_text'
    },
  ];
  
  return (
    <header>
      <h1>LOGO</h1>
      <div>
        <ul>
          {Links.map((link) => (
            <li>
              <Link to={link.to} className={link.cName}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
