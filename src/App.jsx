import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Creation from "./Components/Latest_creation/Creation";
import Edition from "./Components/Edition/Edition";
import Favourite from "./Components/Favourite/Favourite";
import Categories from "./Components/Categories/Categories";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Creation />
      <Edition />
      <Favourite />
      <Categories />
    </>
  );
}

export default App;
