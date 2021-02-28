const { gql } = require('apollo-server')
const { createSqlmancerClient } = require('sqlmancer')

const knex = require('../database/mysql')

const {
    models: { Cards }
} = createSqlmancerClient(__filename, knex)

const typeDefs = gql`
    type Query @sqlmancer(dialect: MYSQL){
        hello: String!
    }
`;

const resolvers = {
    Query: {
        hello: (root, args, ctx, info) => "Hello"
    }
}

module.exports = { typeDefs, resolvers }