# holbertonschool-web_graphql
# Learning Objectives

At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

- What GraphQL means
- What is Graphiql
- How to test queries using Graphiql
- What is Apollo
- How to connect to MongoDB
- How to make queries from React
- How to make a GraphQL server accept requests from another server

## Requirements

- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files will be interpreted/compiled on Ubuntu 18.04 LTS using node (version 12.x.x)
- All your files should end with a new line
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the .js extension

## Setup

### Install NodeJS

In your home directory:

```bash
$ sudo apt install nodejs
$ node -v
v12.x.x
$ npm -v
...

Setup Express and GraphQL

In your server folder of the GraphQL server:

1. Add `package.json` using: `npm init`
2. Install Express in the directory and save it in the dependencies list using: `npm install express --save`
3. Set up GraphQL using: `npm install graphql express-graphql`
