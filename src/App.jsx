import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Creation from "./Components/Latest_creation/Creation";
import Edition from "./Components/Edition/Edition";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Creation />
      <Edition />
    </>
  );
}

export default App;
