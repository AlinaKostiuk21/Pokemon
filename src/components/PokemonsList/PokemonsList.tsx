import React from 'react';
import {PokemonCard} from "../PokemonCard/PokemonCard";
import {SimplePokemon} from "../../react-app-env";

interface Props {
    pokemons: SimplePokemon[],
}

export const PokemonsList: React.FC<Props> = (props) => {
    const { pokemons } = props;

    return (
        <div className="pokemons">
            {pokemons.map(pokemon => (
                <PokemonCard pokemon={pokemon}/>
            ))}
        </div>
    );
};
