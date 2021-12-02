import React from 'react';
import {PokemonCard} from "../PokemonCard/PokemonCard";
import {SimplePokemon} from "../../react-app-env";
import '../../App.scss'

interface Props {
    pokemons: SimplePokemon[],
}

export const PokemonsList: React.FC<Props> = (props) => {
    const { pokemons } = props;

    return (
        <div className="pokemons grid__item--1-6">
            {pokemons.map(pokemon => (
                <PokemonCard pokemon={pokemon}/>
            ))}
        </div>
    );
};
