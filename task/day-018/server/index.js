const { ApolloServer, gql } = require("apollo-server")
const axios = require("axios")

const db = require('./db.json');

const typeDefs = gql`
type Task {
  id: Int
  nama: String
  alamat: String
  no_hp: Int
  pekerjaan: String
}

  type Query {
    tasks: [Task]
  }
`
  const resolvers = {
    Query: {
        tasks: () => db,
      },
  };

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({ url }) => console.log(`Server ready at ${url}`))