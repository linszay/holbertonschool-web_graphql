const express = require('express');
const graphql = require('graphql');
const {graphqlHTTP} = require('express-graphql');
const{ GraphQLObjectType, GraphQLString, GraphQLInt}=graphql;
// import the TaskType from the schema.js file
const TaskType = require('./schema');
const _=require('lodash');

const app = express();


const TaskType = new GraphQLObjectType({
    name: 'Task',
    fields: () => ({
      id: { type: GraphQLString },
      title: { type: GraphQLString },
      weight: { type: GraphQLInt },
      description: { type: GraphQLString },
  })
});

// define a root query with task field
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      task: {
        type: TaskType,
        args: {
          id: { type: GraphQLString },
            },
        resolve(parent, args) {
          // define how to resolve the task data updated
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

app.listen(4000, () => {
  console.log('now listening for request on port 4000');
});

app.use('/graphql', graphqlHTTP({
  schema
}));


module.exports = new GraphQLSchema({
    query: RootQuery,
  });
  