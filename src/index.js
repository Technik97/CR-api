const { ApolloServer, gql, makeExecutableSchema } = require('apollo-server')
const { makeSqlmancerSchema, createSqlmancerClient } = require('sqlmancer')
const express = require('express')
require('dotenv').config()

const knex = require('./database/mysql')

const app = new express()
const PORT = process.env.PORT || 4000

const server = new ApolloServer({
    schema: makeExecutableSchema({ typeDefs, resolvers })
})

server.applyMiddleware({ app })

app.listen({ port: PORT }, () => {
    console.log(`Server at http:localhost:${PORT + server.graphqlPath}`)
})