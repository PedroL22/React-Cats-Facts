import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';

export default function Facts() {
  const [randomFact, setRandomFact] = useState([]);
  const [teste, setTeste] = useState(1);

  const switchFact = () => {
    setTeste(teste + 1);
  };

  const turnFact = () => {
    setRandomFact(randomFact === null);
  };

  const showFact = useEffect(() => {
    const apiFetch = () => {
      axios.get('https://catfact.ninja/fact').then((response) => {
        setRandomFact(response.data);
      });
    };
    apiFetch();
  }, [teste]);

  return (
    <div className="main-div">
      <img className="cat-image" src="https://cataas.com/cat" alt="random cat image" />

      <button className="cat-button" onClick={switchFact}>
        Show a random fact
      </button>
      <button className="cat-button" onClick={turnFact}>
        Hide fact
      </button>
      <h3 className="cat-fact">{randomFact.fact}</h3>
    </div>
  );
}
