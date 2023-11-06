const express = require('express');
const { graphqlHTTP } = require('express-graphql');
// import GraphQLSchema and GraphQLObjectType
const { GraphQLSchema, GraphQLObjectType } = require('graphql');
// import the TaskType from the schema.js file
const TaskType = require('./schema');

const app = express();

// define a dummy root query with task field
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    task: {
      type: TaskType,
      resolve(parent, args) {
        // define how to resolve the task data placeholder for now
        return {
          id: '1',
          title: 'Sample Task',
          weight: 5,
          description: 'This is a sample task.',
        };
      },
    },
  },
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

app.listen(4000, () => {
  console.log('now listening for request on port 4000');
});
