import { ItemPagamento } from "../types/types";
import "../styles/ItemPaymentBar.css";
const ItemPaymentBar = ({ texto, icone }: ItemPagamento) => {
  return (
    <div className="item">
      <div>{icone}</div>
      <span>{texto}</span>
    </div>
  );
};

export default ItemPaymentBar;
