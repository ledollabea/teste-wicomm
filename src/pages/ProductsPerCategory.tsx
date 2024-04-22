import Category from "../commonComponents/Category";
import PaymentBar from "../commonComponents/PaymentBar";
import {
  bolsas,
  botas,
  plataformas,
  rasteiras,
  sapatilhas,
  tenis,
} from "../imgs";
import "../styles/ProductsPerCategory.css";
const ProductsPerCategory = () => {
  return (
    <div className="produtosPorCategoria">
      <PaymentBar />
      <h2 className="titleSession alinhamento">Compre por categoria</h2>
      <div className="categorias">
        <Category alt="Bolsas" imagem={bolsas} texto="Bolsas" />
        <Category alt="Tênis" imagem={tenis} texto="Tênis" />
        <Category alt="Rasteiras" imagem={rasteiras} texto="Rasteiras" />
        <Category alt="Plataformas" imagem={plataformas} texto="Plataformas" />
        <Category alt="Botas" imagem={botas} texto="Botas" />
        <Category alt="Sapatilhas" imagem={sapatilhas} texto="Sapatilhas" />
      </div>
    </div>
  );
};

export default ProductsPerCategory;
