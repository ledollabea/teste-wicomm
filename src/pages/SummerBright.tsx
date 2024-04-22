import { moca_carrinho } from "../imgs";
import "../styles/SummerBright.css";
const SummerBright = () => {
  return (
    <div className="summer">
      <div className="left-side">
        <div className="sem-ideia">
        <div className="white-rectangle">
          <div className="pink"></div>
        </div>
        <div className="white-rectangle"></div>
        </div>
        <h2 className="specific titleSession">Pra brilhar no verão</h2>
        <p className="paragraph">
          As Sandálias Birkens são uma escolha de calçado atemporal e icônica,
          conhecida por seu conforto, qualidade e design diferenciado.
        </p>
        <a href="#" className="pink-button">É a minha cara</a>
      </div>
      <img
        className="right-side"
        src={moca_carrinho}
        alt="Moça negra usando birkens rosa e roupa rosa, sorrindo, cabelo solto, sentada dentro de carrinho de compras localizado na calçada"
      />
    </div>
  );
};

export default SummerBright;
