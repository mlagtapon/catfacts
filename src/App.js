import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import CatCard from "./components/CatCard";
import "./App.css";
import Axios from "axios";

function App() {
  const [facts, setFacts] = useState([]);
  const [onefact, setOnefact] = useState([]);

  const getCatFact = () => {
    setFacts([]);
    fetch("https://cat-fact.herokuapp.com/facts/random")
      .then((res) => res.json())
      .then((res) => setOnefact(res))
      .catch((err) => console.log(err));
  };

  const getCatFacts = () => {
    setOnefact([]);
    fetch("https://cat-fact.herokuapp.com/facts")
      .then((res) => res.json())
      .then((res) => setFacts(res.all))
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <button className="btn btn-primary" onClick={getCatFacts}>
        Get Cat Facts
      </button>
      <div className="d-flex justify-content-around flex-wrap p-5">
        {facts.map((f, i) => {
          return <CatCard key={i} fact={f} />;
        })}
      </div>
      
      <button className="btn btn-primary" onClick={getCatFact}>
        Get One Fact
      </button>
      <div className="d-flex justify-content-around flex-wrap p-5">
        <CatCard fact={onefact} />
      </div>
    </div>
  );
}

export default App;
