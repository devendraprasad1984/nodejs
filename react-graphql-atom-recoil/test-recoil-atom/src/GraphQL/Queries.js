import { gql } from "@apollo/client";

export const LOAD_USERS = gql`
  query {
    getAllUsers {id,firstName,lastName,email,password}
  }
`;

export const GET_ALL_DOGS = gql`
  query {
    getDogs {id,name,age,breed}
  }
`;
