const { gql } = require('apollo-server')
const { createSqlmancerClient } = require('sqlmancer')

const knex = require('../database/mysql')

const {
    models: { Card, Attribute, Type, Rarity, Stat }
} = createSqlmancerClient(__filename, knex)

const typeDefs = gql`
    type Query @sqlmancer(dialect: MYSQL){
        cards: [Card!]!
    }

    type Card @model(table: "cards" , pk: "id"){
        id: ID @col(name: "id")
        name: String!
        released: String!
        image: String!

        attribute_id: Int!
        attributes: Attribute! @relate(
            on: [{from: "attribute_id", to: "id" }]
        )

        stat_id: Int!
        stats: Stat! @relate(
            on: [{from: "stat_id", to: "id"}]
        )
    }

    type Attribute @model(table: "attributes", pk: "id"){
        id: ID! @col(name: "id")
        cost: Int!
        target: String!
        count: Int
        transport: String!
        type_id: Int!
        type: Type! @relate(
            on: [{from: "type_id", to: "id"}]
        )
        rarity_id: Int!
        rarity: Rarity! @relate(
            on: [{from: "rarity_id", to: "id"}]
        )
    }

    type Stat @model(table: "stats", pk: "id"){
        id: ID! @col(name: "id")
        hitpoints: Int!
        damage: Int 
        crown_tower_damage: Int 
        area_damage: Int 
        spawn_damage: Int 
        jump_damage: Int 
        dps: Float
        building_dps: Int
        slowdown: Int
        duration: Float
        radius: Float
        hit_speed: Float
        speed: Int!
        deploy_time: Float!
        spawn_speed: Float
        life_time: Float
        range: String!
        jump_range: String
        death_damage: Int
        production_speed: Float
    }

    type Type @model(table: "card_types", pk: "id"){
        id: ID!
        card_type: String!
    }

    type Rarity @model(table: "card_rarities", pk: "id"){
        id: ID!
        card_rarity: String!
    }
`;

const resolvers = {
    Query: {
        cards: (root, args, ctx, info) => {
            return Card.findMany()
                        .resolveInfo(info)
                        .execute()
        }
    }
}

module.exports = { typeDefs, resolvers }