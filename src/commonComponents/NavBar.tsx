import "../styles/Navbar.css";
import {
  MagnifyingGlass,
  User,
  Heart,
  ShoppingCart,
} from "@phosphor-icons/react";
const NavBar = () => {
  return (
    <nav className="nav">
      <h1>sapatella</h1>
      <section className="navLinks">
        <a href="#">
          <span className="link">Novidades</span>
        </a>
        <a href="#">
          <span className="link">Sapatos</span>
        </a>
        <a href="#">
          <span className="link">Sandálias</span>
        </a>
        <a href="#">
          <span className="link">Tênis</span>
        </a>
        <a href="#">
          <span className="link">Bolsas & Acessórios</span>
        </a>
        <a href="#">
          <span className="link">OFF</span>
        </a>
      </section>
      <form className="campoBusca">
        <input type="text" placeholder="Buscar" />
        <button>
          <MagnifyingGlass size={18} />
        </button>
      </form>
      <section className="navLinks">
        <User size={24} />
        <Heart size={24} />
        <ShoppingCart size={24} />
      </section>
    </nav>
  );
};

export default NavBar;
