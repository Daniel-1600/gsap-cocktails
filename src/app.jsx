import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";

const app = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="h-dvh bg-black"></div>
    </main>
  );
};

export default app;
