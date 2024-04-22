import "./App.css";
import NavBar from "./commonComponents/NavBar";
import HomePage from "./pages/HomePage";
import ProductsPerCategory from "./pages/ProductsPerCategory";
import SandalsBirkens from "./pages/SandalsBirkens";
import SummerBright from "./pages/SummerBright";
import WeekFavorites from "./pages/WeekFavorites";

function App() {
  return (
    <>
      <NavBar />
      <HomePage />
      <ProductsPerCategory/>
      <SummerBright/>
      <WeekFavorites/>
      <SandalsBirkens/>
    </>
  );
}

export default App;
