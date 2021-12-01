import React from 'react';
import {SimplePokemon} from "../../react-app-env";

interface Props {
    pokemon: SimplePokemon,
}

export const PokemonCard: React.FC<Props> = (props) => {
    const { pokemon } = props;

    return (
        <div className="card">
            <div className="card__image">
                <img src="" alt=""/>
            </div>
            <div className="card__content">
                <h4>{pokemon.name}</h4>
            </div>
        </div>
    )
}
