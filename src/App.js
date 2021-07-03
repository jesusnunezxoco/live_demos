import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Pokecard from "./components/Pokecard";
import Pokeheader from "./components/Pokeheader";
import Pokeresult from "./components/Pokeresult";
import Pokesearch from "./components/Pokesearch";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [pokecards, setPokecards] = useState([
    {
      name: "bulbasaur",
      id: 1,
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    },
    {
      name: "ivysaur",
      id: 2,
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    },
  ]);

  useEffect(() => {
    let endpoint = "https://pokeapi.co/api/v2/pokemon?limit=151";

    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setPokecards(
          data.results.map((pokemon, i) => ({
            name: pokemon.name,
            id: i + 1,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              i + 1
            }.png`,
          }))
        );
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Router>
      <div className="App">
        <Pokeheader />
        <Pokesearch />
        <Switch>
          {/* multi-line route */}
        <Route path="/" exact>
        {pokecards.map((pokecard) => (
          <Pokecard
            name={pokecard.name}
            id={pokecard.id}
            image={pokecard.image}
            key={pokecard.id}
          />
        ))}
        </Route>
        {/* single-line route */}
        <Route path="/pokemon/:id" component={Pokeresult}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
