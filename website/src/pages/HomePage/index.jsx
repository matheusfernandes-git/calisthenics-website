import Posts from "../../components/Posts";
import dados from "../../components/json/dados.json";
import "./HomePage.css";
import { benefitsData } from "../../components/BenefitsData/index";
import imgBenefit from "../../../src/assets/benefits.jpg";
import imgContact from "../../../src/assets/contact.jpg";
import { contactData } from "../../components/ContactData";
import Button from "../../components/Button/index";
import Footer from "../../components/Footer";

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
        <div>
          <div className="container-imgBenefit">
            <img src={imgBenefit} alt="benefits" />
          </div>
          <ul>
            <h2>Alguns benefícios da calistenia</h2>
            {benefitsData.map((benefit) => (
              <li key={benefit.id}>
                {benefit.icon}
                <span>{benefit.benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="contact">
        <div className="div-content">
          <h2 className="title-contact">
            Faça parte dos nossos grupos de treino!
          </h2>
          <ul>
            {contactData.map((data, index) => (
              <li key={index}>
                {data.icon}
                <span>{data.title}</span>
              </li>
            ))}
            <Button children="Fale conosco" />
          </ul>
        </div>
        <div className="img-contact">
          <img src={imgContact} alt="calistenia em grupo" />
        </div>
      </section>
      <Footer />
    </div>
    
  );
}
