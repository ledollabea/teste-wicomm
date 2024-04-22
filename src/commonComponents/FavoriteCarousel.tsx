import { useState } from "react";
import ItemCarousel from "./ItemCarousel";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import "../styles/FavoriteCarousel.css";
import {
  plataforma_caramelo,
  tenis_branco,
  sandalia_preta,
  sapatilha_fundo,
} from "../imgs";
const FavoriteCarousel = () => {
  const [state, setState] = useState({
    previous: false,
    next: false,
  });
  console.log(state)
  return (
    <div className="background">
      <div className="porCima">
        <div className="emvolta">
          <CaretLeft
            className="setas"
            size={20}
            onClick={() => setState({ previous: true, next: false })}
          />
        </div>
        <div className="emvolta">
          <CaretRight
            className="setas"
            size={20}
            onClick={() => setState({ previous: true, next: false })}
          />
        </div>
      </div>
      <div className="carrossel-sessao">
        <div className="carrossel">
          <ItemCarousel
            alt=""
            favorite={false}
            maxSize={38}
            minSize={34}
            src={tenis_branco}
            titulo="Tênis Clean Urbano - Branco"
            preco="RS 169,90"
            antigoPreco="R$ 209,90"
            parcelas="ou 6x de R$ 28,31 sem juros"
          />
          <ItemCarousel
            alt=""
            favorite={false}
            maxSize={38}
            minSize={34}
            src={sandalia_preta}
            titulo="Sandália Soft Metalizado - Preta"
            preco="RS 169,90"
            antigoPreco="R$ 209,90"
            parcelas="ou 6x de R$ 28,31 sem juros"
          />
          <ItemCarousel
            alt=""
            favorite={false}
            maxSize={38}
            minSize={34}
            src={sapatilha_fundo}
            titulo="Sapatilha Elegance - Rose"
            preco="RS 169,90"
            antigoPreco="R$ 209,90"
            parcelas="ou 6x de R$ 28,31 sem juros"
          />
          <ItemCarousel
            alt=""
            favorite={false}
            maxSize={38}
            minSize={34}
            src={plataforma_caramelo}
            titulo="Plataforma em Nobuck - Whisky"
            preco="RS 169,90"
            antigoPreco="R$ 209,90"
            parcelas="ou 6x de R$ 28,31 sem juros"
          />
        </div>
      </div>
    </div>
  );
};

export default FavoriteCarousel;
