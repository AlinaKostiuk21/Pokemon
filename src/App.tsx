import {useEffect, useState} from 'react';
import './App.scss';
import './styles/main.scss';
import {PokemonsList} from "./components/PokemonsList/PokemonsList";
import {getPokemons, request} from "./api";
import {FullPokemon, SimplePokemon} from "./react-app-env";

function App() {
    const [pokemons, setPokemons] = useState<SimplePokemon[]>([]);
    const [nextPokemons, setNextPokemons] = useState<string>('');
    const [selectedPokemon, setSelectedPokemon] = useState<FullPokemon | null>(null);

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

    const selectPokemon = (url: string | null) => {
        if (url === null) {
            setSelectedPokemon(null);
            return;
        }

        request(url).then((fullPokemon) => {
            setSelectedPokemon(fullPokemon);
        })
    }

  return (
    <div className="app">
        <h1 className="app__title">Pokedex</h1>
        <div className="app__catalog">
            <div className="">
                <PokemonsList
                    pokemons={pokemons}
                    onItemClick={selectPokemon}
                    fullPokemon={selectedPokemon}
                />
            </div>
            <div className="">
                <button
                    className="button-main"
                    onClick={() => loadMore(nextPokemons)}
                >
                    Load More
                </button>
            </div>
        </div>
    </div>
  );
}

export default App;
