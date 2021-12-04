import React from 'react';
import {PokemonCard} from "../PokemonCard/PokemonCard";
import {FullPokemon, SimplePokemon} from "../../react-app-env";
import '../../styles/main.scss';
import './PokemonList.scss';

interface Props {
    pokemons: SimplePokemon[],
    onItemClick: (url: string | null) => void,
    fullPokemon: FullPokemon | null,
}

export const PokemonsList: React.FC<Props> = (props) => {
    const { pokemons, onItemClick, fullPokemon } = props;

    return (
        <div className="pokemons grid__wrapper grid__wrapper--mobile">
            {pokemons.map(pokemon => {
                if (fullPokemon && pokemon.name === fullPokemon.name) {
                    return (
                        <PokemonCard
                            pokemon={pokemon}
                            key={pokemon.name}
                            onItemClick={onItemClick}
                            fullPokemon={fullPokemon}
                        />
                    )
                } else {
                    return (
                        <PokemonCard
                            pokemon={pokemon}
                            key={pokemon.name}
                            onItemClick={onItemClick}
                        />
                    )
                }
            })}
        </div>
    );
};
