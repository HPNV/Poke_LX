import { gql } from "@apollo/client";

export const GET_POKEMON = gql`
    query GetPokemons($limit: Int!, $offset: Int!) {
        pokemons(limit: $limit, offset: $offset) {
            results {
                id
                name
                image
            }
        }
    }
`;