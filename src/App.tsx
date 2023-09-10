import "./App.css";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Brands from "./components/Brands";
import Features from "./components/Features";
import Products from "./components/Products";
import Footer from "./components/Footer";
import { Cart } from "./components/Cart";
import Categories from "./components/Categories";
import Banner from "./components/Banner";
import Offer from "./components/Offer";
function App() {
  return (
    <>
      <Banner />
      <NavBar />
      <Hero />
      <Cart />
      <Brands />
      <Features />
      <Products />
      <Categories />
      <Offer />
      <Footer />
    </>
  );
}

export default App;
