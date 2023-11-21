/*import ApolloClient from 'apollo-boost';
/*
...
*/
// components
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import AddProject from './components/AddProject';
// apollo client setup
/*
...
*/
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const cors = require{ cors }

app.use(cors());

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>GraphQL App</h1>
        <TaskList />
        <AddProject />
        <AddTask />
      </div>
    </ApolloProvider>
  );
}

export default App;
