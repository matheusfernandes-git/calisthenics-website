import Posts from "../../components/Posts";
import dados from "../../components/json/dados.json";
import "./HomePage.css";
import benefits from "../../components/json/benefits.json";
import imgBenefit from "../../../src/assets/benefits.jpg";
import imgContact from "../../../src/assets/contact.jpg";
import { contactData } from "../../components/ContactData";

export default function HomePage() {
  return (
    <div className="container">
      <h2 className="title-exercices">
        Conheça 3 dos principais exercícios da calistenia
      </h2>
      <ul className="posts">
        {dados.map((dado) => (
          <li key={dado.id}>
            <Posts post={dado} />
          </li>
        ))}
      </ul>
      <section className="container-benefits">
        <img src={imgBenefit} alt="benefits" />
        <ul>
          <h2>Alguns benefícios da calistenia</h2>
          {benefits.map((benefit) => (
            <li key={benefit.id}>{benefit.benefit}</li>
          ))}
        </ul>
      </section>
      <section className="container-contact">
        <ul>
          <h2 className="title-contact">
            Faça parte dos nossos grupos de treino!
          </h2>
          {contactData.map((data, index) => (
            <li key={index}>
              {data.icon}
              <span>{data.title}</span>
            </li>
          ))}
        </ul>
        <img src={imgContact} alt="calistenia em grupo" />
      </section>
    </div>
  );
}
