import { GraphQLClient } from "graphql-request";

//if Server side rendered page, then we should not send a token
const isClient = typeof window !== "undefined";


export const graphQLClient = new GraphQLClient("http://localhost:8000/", {
  headers: () => ({
    Authorization: isClient
      ? `Bearer ${window.localStorage.getItem("__twitter_token")}`
      : "",
  }),
});
