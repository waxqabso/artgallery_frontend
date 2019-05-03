import React from "react";
import "./App.css";
import Header from "./components/layout/Header";
import Showcase from "./components/home/showcase";
import About from "./components/about/About";
import Artist from "./components/home/artsts";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Showcase />
        <About />
        <Artist />
      </div>
    </div>
  );
}

export default App;
