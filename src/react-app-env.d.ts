/// <reference types="react-scripts" />
export interface SimplePokemon {
    name: string,
    url: string,
}

export interface SimplePokemonsResponse {
    next: string,
    results: SimplePokemon[],
}
// types of FullPokemon
// start "sprites".
interface OtherSpritesDreamWorldDefault {
    front_default: string,
}

interface OtherSpritesDreamWorld {
    dream_world: OtherSpritesDreamWorldDefault,
}

interface OtherSprites {
    other: OtherSpritesDreamWorld,
}
// end "sprites".
// start "types".
interface PokemonType {
    name: string,
}

interface PokemonTypes {
    type: PokemonType,
}
// end "types".
// start "stats".
interface PokemonStat {
    name: string,
}

interface PokemonStats {
    base_stat: number,
    stat: PokemonStat,
}
// end "stats".
export interface FullPokemon {
    name: string,
    weight: number,
    height: number,
    sprites: OtherSprites,
    types: PokemonTypes[],
    moves: any[],
    stats: PokemonStats[],
}
