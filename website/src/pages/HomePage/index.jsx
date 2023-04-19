import Posts from "../../components/Posts";
import dados from '../../components/json/dados.json'
import './HomePage.css'

export default function HomePage() {
  return (
    <div>
      <h2>Conheça 3 dos principais exercícios da calistenia</h2>
      <ul className="posts">
        {dados.map(dado => (
            <li key={dado.id}>
                <Posts post={dado}/> 
            </li>
        ))}
      </ul>
    </div>
  );
}
