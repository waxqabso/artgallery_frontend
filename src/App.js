import React from "react";
import "./App.css";
import MrArtr from "./components/home/mrArt";
import Header from "./components/layout/Header";
import Layout from "./components/layout/Layout";
function App() {
  return (
    <div className="App">
      <Header />
      <Layout />
      <MrArtr />
    </div>
  );
}

export default App;
