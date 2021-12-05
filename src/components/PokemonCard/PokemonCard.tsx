import React from 'react';
import {FullPokemon, SimplePokemon} from "../../react-app-env";
import '../../styles/main.scss';

interface Props {
    pokemon: SimplePokemon,
    fullPokemon?: FullPokemon,
    onItemClick: (url: string | null) => void,
}

type KindPokemon = SimplePokemon | FullPokemon;

export const PokemonCard: React.FC<Props> = (props) => {
    const { pokemon, fullPokemon, onItemClick } = props;

    const getPokemonImage = (Pokemon: KindPokemon) => {
        if ("sprites" in Pokemon && Pokemon.sprites) {
            return Pokemon.sprites.other.dream_world.front_default;
        }

        return "images/no-pokemon.png"
    }

    const getPokemonTypes = (aPokemon: KindPokemon) => {
        if ("types" in aPokemon && aPokemon.types) {
            return aPokemon.types.map(item => item.type.name);
        }

        return "???";
    }

    const getPokemonMoves = (aPokemon: KindPokemon) => {
        if ("moves" in aPokemon && aPokemon.moves) {
            return aPokemon.moves.length;
        }

        return "???";
    }

    const getPokemonStat = (aPokemon: KindPokemon, stat: string) => {
        if ("stats" in aPokemon && aPokemon.stats) {
            const findStat = aPokemon.stats.find(item => item.stat.name === stat);
            if (findStat) {
                return findStat.base_stat;
            }
        }

        return "???";
    }

    const aPokemon = fullPokemon || pokemon;
    const pokemonImage = getPokemonImage(aPokemon);
    const pokemonTypes = getPokemonTypes(aPokemon);
    const pokemonMoves = getPokemonMoves(aPokemon);
    const pokemonHp = getPokemonStat(aPokemon, "hp");
    const pokemonAttack = getPokemonStat(aPokemon, "attack");
    const pokemonDefence = getPokemonStat(aPokemon, "defense");
    const pokemonSpAttack = getPokemonStat(aPokemon, "special-attack");
    const pokemonSpDefence = getPokemonStat(aPokemon, "special-defense");
    const pokemonSpeed = getPokemonStat(aPokemon, "speed");


    return (
        <div
            className="pokemon-card"
            onClick={() => {
            if ("url" in aPokemon) {
                onItemClick(aPokemon.url)
            } else {
                onItemClick(null)
            }
        }}>
            <figure className="">
                <img
                    src={pokemonImage}
                    alt="Pokemon"
                    className="pokemon-card__image"
                />
            </figure>
            <div className="pokemon-card__content">
                <h4 className="pokemon-card__title">{aPokemon.name}</h4>
                <div className="pokemon-card__description">
                    <div className="pokemon-card__types types">
                        {typeof pokemonTypes !== "string"
                            ? pokemonTypes?.map(item => (<button className="button-type types__button">{item}</button>))
                            : (<p className="types__not">???</p>)
                        }
                    </div>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>HP</td>
                                <td>{pokemonHp}</td>
                                <td>Weight</td>
                                <td>{"weight" in aPokemon ? aPokemon.weight : "???"}</td>

                            </tr>
                            <tr>
                                <td>Attack</td>
                                <td>{pokemonAttack}</td>
                                <td>SP Attack</td>
                                <td>{pokemonSpAttack}</td>
                            </tr>
                            <tr>
                                <td>Defence</td>
                                <td>{pokemonDefence}</td>
                                <td>SP Defence</td>
                                <td>{pokemonSpDefence}</td>
                            </tr>
                            <tr>
                                <td>Speed</td>
                                <td>{pokemonSpeed}</td>
                                <td>Total moves</td>
                                <td>{pokemonMoves}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
