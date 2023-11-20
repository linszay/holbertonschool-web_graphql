const express = require('express');
const graphql = require('graphql');
const {graphqlHTTP} = require('express-graphql');
const{ GraphQLObjectType, GraphQLString, GraphQLInt}=graphql;
// import the TaskType from the schema.js file
const TaskType = require('./schema');
const _=require('lodash');

const app = express();


const tasks = [
  {
    id: '1',
    title: 'Create your first webpage',
    weight: 1,
    description: 'Create your first HTML file 0-index.html with: -Add the doctype on the first line (without any comment) -After the doctype, open and close an html tag Open your file in your browser (the page should be blank)',
  },
  {
    id: '2',
    title: 'Structure your webpage',
    weight: 1,
    description: 'Copy the content of 0-index.html into 1-index.html Create the head and body sections inside the html tag, create the head and body tags (empty) in this order',
  },
];

const TaskType = new GraphQLObjectType({
    name: 'Task',
    fields: {
      id: { type: GraphQLString },
      title: { type: GraphQLString },
      weight: { type: GraphQLInt },
      description: { type: GraphQLString },
  },
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
          return _.find(tasks, { id: args.id });
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

module.exports = TaskType;
