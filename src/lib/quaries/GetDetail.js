import { gql } from "@apollo/client";

export const GET_DETAIL = gql`
query GetPokemonByName($name: String!) {
    pokemon(name: $name) {
      name
      sprites{
        front_default
        back_default
      }
      abilities{
        ability{
          url
          name
        }
      }
      types{
        type{
          name
        }
      }
    }
  }
`;
