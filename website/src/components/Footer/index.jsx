import { footerData } from "./FooterData/index";
import "./footer.css";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <h2>LOGO</h2>
      <ul className="footer-list">
        {footerData.map((data) => {
          return <li>
            <Link className="link">{data.icon}</Link>
        </li>;
        })}
      </ul>
    </footer>
  );
}
