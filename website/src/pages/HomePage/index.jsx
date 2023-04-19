import Posts from "../../components/Posts";
import dados from "../../components/json/dados.json";
import "./HomePage.css";
import benefits from "../../components/json/benefits.json";
import img from "../../../src/assets/benefits.jpg";

export default function HomePage() {
  return (
    <div className="container">
      <h2>Conheça 3 dos principais exercícios da calistenia</h2>
      <ul className="posts">
        {dados.map((dado) => (
          <li key={dado.id}>
            <Posts post={dado} />
          </li>
        ))}
      </ul>
      <div className="container-benefits">
        <img src={img} alt="benefits" />
        <ul>
        <h2>Alguns benefícios da calistenia</h2>
          {benefits.map((benefit) => (
            <li key={benefit.id}>{benefit.benefit}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
