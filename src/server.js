require('dotenv').config()
import { ApolloServer, gql } from 'apollo-server-express'
import { resolvers, typeDefs } from './schema';
import { getUser } from './user/user.utils';
import express from 'express'
import { graphqlUploadExpress } from 'graphql-upload'

const PORT = process.env.PORT
async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req }) => {
      return {
        loggedUser: await getUser(req.headers.token),
      }
    },
  });
  await server.start();

  const app = express();

  app.use(graphqlUploadExpress());

  server.applyMiddleware({app});

  await new Promise(r => app.listen({ port: PORT }, r));

  console.log(`🚀 Server ready at http://localhost:${4000}${server.graphqlPath}`);
  
}
startServer();