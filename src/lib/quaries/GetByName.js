import { gql } from "@apollo/client";

export const GET_BY_NAME = gql`
query GetPokemonByName($name: String!) {
    pokemon(name: $name) {
      id
      name
      sprites{
        front_default
      }
    }
  }`;