import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Slogan from "./components/Slogan";
import Products from "./components/Products";
import About from "./components/About";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <Slogan />
      <Products />
      <About />
      <Menu />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
