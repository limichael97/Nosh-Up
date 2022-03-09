const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');
const { authMiddleware } = require('./utils/auth');
// import ApolloServer
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');
const app = express();
const PORT = process.env.PORT || 3001;

// create a new Apollo server and pass in our schema data
const server = new ApolloServer({ 
  typeDefs, 
  resolvers, 
  context: authMiddleware,
});
// Initialize the Apollo server

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}
// app.use(routes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/'));
});

const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };

startApolloServer(typeDefs, resolvers)


// const express = require('express');
// const path = require('path');
// const { authMiddleware } = require('./utils/auth');
// // import ApolloServer
// const { ApolloServer } = require('apollo-server-express');
// // const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');
// // import our typeDefs and resolvers
// const { typeDefs, resolvers } = require('./schemas');
// const db = require('./config/connection');

// const PORT = process.env.PORT || 3001;
// const app = express();

// const startServer = async () => {
//   // create a new Apollo server and pass in our schema data
//   const server = new ApolloServer({ 
//     typeDefs, 
//     resolvers, 
//     context: authMiddleware,
//     // plugins: [
//     //   ApolloServerPluginLandingPageGraphQLPlayground({
//     //     // options
//     //   })
//     // ]
//   });

//   // Start the Apollo server
//   await server.start();

//   // integrate our Apollo server with the Express application as middleware
//   server.applyMiddleware({ app });

//   // log where we can go to test our GQL API
//   console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
// };

// // Initialize the Apollo server
// startServer();

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// // Serve up static assets
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

// db.once('open', () => {
//   app.listen(PORT, () => {
//     console.log(`API server running on port ${PORT}!`);
//   });
// });
