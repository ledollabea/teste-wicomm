import FavoriteCarousel from "../commonComponents/FavoriteCarousel";
import "../styles/WeeksFavorite.css";
const WeekFavorites = () => {
  return (
    <div className="weeksFavorite">
      <h2 className="titleSession alinhamento">Favoritos da semana</h2>
      <FavoriteCarousel />
    </div>
  );
};

export default WeekFavorites;
