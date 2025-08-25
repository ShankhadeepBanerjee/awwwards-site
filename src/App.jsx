import React from "react";
import Hero from "./components/Hero.jsx";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero />
      <section className="h-dvh w-screen z-0" />
    </main>
  );
};

export default App;
