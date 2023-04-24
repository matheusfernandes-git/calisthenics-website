import { footerData } from "./FooterData/index";
import "./footer.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AiOutlinePhone } from "react-icons/ai";

export default function Footer() {
  return (
    <footer>
      <img src={logo} alt="" />
      <ul>
        {footerData.map((data) => {
          return (
            <li>
              <Link className="link">{data.icon}</Link>
            </li>
          );
        })}
      </ul>
      <ul className="list-phone">
        <li>
          <AiOutlinePhone size={20} />
          <span>99:99999999</span>
        </li>
      </ul>
      <hr />
      <p>
        <span>Calisthenics &copy; 2023 </span> <br />
        <span className="span-2">Todos os direitos reservados</span>
      </p>
    </footer>
  );
}
