import React, { useState } from "react";
import "./App.css";
import CLogic from "./Components/Cards/CLogic";
// import CardItem from "./Components/UI/CardItem";

function App() {
  return (
    <div className="app">
      <CLogic/>
    </div>
  );
}

export default App;

// title: "Карточка 1",
// title: "Карточка 2",
// title: "Карточка 3",
// title: "Карточка 4", <CardItem card={card} /> {console.log("Я тут")} <div className="name">{card.title}</div>
