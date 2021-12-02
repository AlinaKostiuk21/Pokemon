import React from 'react';
import {SimplePokemon} from "../../react-app-env";
import '../../styles/main.scss';
import './PokemonCard.scss';

interface Props {
    pokemon: SimplePokemon,
}

export const PokemonCard: React.FC<Props> = (props) => {
    const { pokemon } = props;

    return (
        <div className="pokemon-card">
            <div className="pokemon-card__image">
                <img src="" alt="Pokemon"/>
            </div>
            <div className="pokemon-card__content">
                <h4 className="pokemon-card__title">{pokemon.name}</h4>
                <div className="pokemon-card__abilities">About</div>
            </div>
        </div>
    )
}
