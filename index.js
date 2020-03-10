const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const schema = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const app = express();

const server = new ApolloServer({
	typeDefs: schema,
	resolvers
});

server.applyMiddleware({ app, path: "/graphql" });

app.listen({ port: 5000 }, () => {
	console.log("Listening at port " + 5000);
});
