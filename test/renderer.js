const { ApolloClient, InMemoryCache } = require("@apollo/client")
const { ElectronLink } = require("../dist")
const gql = require("graphql-tag")

const client = new ApolloClient({
  link: new ElectronLink({ channel: "apollo-link-electron-test" }),
  cache: new InMemoryCache(),
})

const QUERY = gql`
  query {
    hello
  }
`

client
  .query({ query: QUERY })
  .then(data => console.log(data))
  .catch(error => console.error(error))
