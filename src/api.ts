import {SimplePokemonsResponse} from "./react-app-env";

const BASE_URL = `https://pokeapi.co/api/v2/`;
const GET_POKEMONS = `pokemon?limit=12&offset=`;

export const request = (url: string) => {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`${response.status} - ${response.statusText}`);
            }

            return response.json();
        });
};

export const getPokemons = (offset: number):Promise<SimplePokemonsResponse> => {
    const url = `${BASE_URL}${GET_POKEMONS}${offset}`;

    return request(url);
}
