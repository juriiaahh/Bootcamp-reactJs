const { ApolloServer, gql } = require("apollo-server")

const data = require('./db.json');

const typeDefs = gql`
type Task {
  id: ID
  nama: String
  alamat: String
  no_hp: String
  pekerjaan: String
}

  type Query {
    tasks: [Task]
    task(id:ID!): Task
  }

  type Mutation {
    addTask(nama: String, alamat: String, no_hp: String, pekerjaan: String): [Task]
  }
`
  const resolvers = {
    Query: {
        tasks: () => data,
        task: (_, {id}) => {
          return data.find( task => task.id == id)
        }
      },

      Mutation: {
        addTask(_, payload){
          console.log(payload);
          const storeTask = {
            id:234324,
            ...payload
          }
          data.push(storeTask)
          return storeTask
        }
      }
  };

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({ url }) => console.log(`Server ready at ${url}`))