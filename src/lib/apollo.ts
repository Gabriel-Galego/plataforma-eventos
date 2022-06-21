import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4oa6h6j1ijr01xm8cs86bdx/master",
  cache: new InMemoryCache(),
});
