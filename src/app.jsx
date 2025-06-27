import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Cocktails from "./components/cocktails";
import About from "./components/about";

const app = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
    </main>
  );
};

export default app;
