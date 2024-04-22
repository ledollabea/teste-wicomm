import "../styles/PaymentBar.css";
import { CreditCard, PixLogo, Ticket, Truck } from "@phosphor-icons/react";
import ItemPaymentBar from "./ItemPaymentBar";
const PaymentBar = () => {
  return (
    <div className="paymentBar">
      <ItemPaymentBar
        icone={<Truck size={28} />}
        texto="Frete Grátis p/ Sudeste"
      />
      <ItemPaymentBar
        icone={<Ticket size={28} />}
        texto="R$ 20 off na 1º compra"
      />
      <ItemPaymentBar icone={<PixLogo size={28} />} texto="Pague via PIX" />
      <ItemPaymentBar
        icone={<CreditCard size={28} />}
        texto="Parcele em até 6x sem juros"
      />
    </div>
  );
};

export default PaymentBar;
