const express = require('express');
const { graphqlHTTP, GraphQLSchema } = require('express-graphql');
const RootQuery = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

// connect to mongoDB atlas &  listen for connection
mongoose.connect('<your-mongodb-atlas-connection-string>', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
  console.log('Connected to database');
});

app.use('/graphql',graphqlHTTP({
}));
app.listen(4000,()=>{
  console.log('now listening for request on port 4000');
});

// create the GraphQL schema using a root query
const schema = new GraphQLSchema({
    query: RootQuery,
  });
  
  app.use(
    '/graphql',
    graphqlHTTP({
      schema,
      // select GraphiQL for testing
      graphiql: true,
    })
  );
