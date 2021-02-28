const { ApolloServer } = require('apollo-server-express')
const { makeSqlmancerSchema, createSqlmancerClient } = require('sqlmancer')
const express = require('express')
require('dotenv').config()

const { typeDefs, resolvers } = require('./schema')

const app = new express()
const PORT = process.env.PORT || 4000

const server = new ApolloServer({
    schema: makeSqlmancerSchema({ typeDefs, resolvers })
})

server.applyMiddleware({ app })

app.listen({ port: PORT }, () => {
    console.log(`Server at http:localhost:${PORT + server.graphqlPath}`)
})