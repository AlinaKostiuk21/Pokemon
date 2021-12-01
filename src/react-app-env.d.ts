/// <reference types="react-scripts" />
export interface SimplePokemon {
    name: string,
    url: string,
}

export interface SimplePokemonsResponse {
    next: string,
    results: SimplePokemon[],
}
