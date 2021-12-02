import {useEffect, useState} from 'react';
import './App.scss';
import {PokemonsList} from "./components/PokemonsList/PokemonsList";
import {getPokemons, request} from "./api";
import {SimplePokemon} from "./react-app-env";

function App() {
    const [pokemons, setPokemons] = useState<SimplePokemon[]>([]);
    const [nextPokemons, setNextPokemons] = useState<string>('');

    useEffect(() => {
        getPokemons(0).then(({next, results}) => {
            setPokemons((prevState: SimplePokemon[]) => [...prevState, ...results]);
            setNextPokemons(next);
        });
    }, [])

    const loadMore = (url: string) => {
        request(url).then(({next, results}) => {
            setPokemons((prevState: SimplePokemon[]) => [...prevState, ...results]);
            setNextPokemons(next);
        })
    }

  return (
    <div className="App">
        <h1 className="app__title">Pokedex</h1>
        <div className="app__catalog grid">
            <PokemonsList pokemons={pokemons} />
            <button onClick={() => loadMore(nextPokemons)}>Load More</button>
        </div>
    </div>
  );
}

export default App;
