import { Carousel } from "../types/types";
import SizeShoe from "./SizeShoe";
import "../styles/FavoriteCarousel.css";
import { Heart } from "@phosphor-icons/react";
import { useState } from "react";

const ItemCarousel = ({
  src,
  alt,
  favorite,
  minSize,
  maxSize,
  titulo,
  preco,
  antigoPreco,
  parcelas,
}: Carousel) => {
  const [classColor, setClassColor] = useState("");
  
  return (
    <div>
      <div className="item-carrossel">
        <img className="imagem-carrossel" src={src} alt={alt} />
        {favorite && <SizeShoe minSize={minSize} maxSize={maxSize} />}
      </div>
      <div className="seila">
        <small>36% OFF</small>{" "}
        <span>
          <Heart
            size={24}
            color={classColor=="pink"? "#cf215b": "#4f4f4f"}
            weight={classColor=="pink"? "fill": undefined}
          />
        </span>
      </div>
      <div className="info-item">
        <small>{titulo}</small>
        <p>
          <span>{preco} </span>
          <span>
            <s>{antigoPreco}</s>
          </span>
        </p>
        <small className="parcelas">{parcelas}</small>
      </div>
    </div>
  );
};

export default ItemCarousel;
