import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
} from 'graphql';
import DB from './connect'


import userData from "./MOCK_DATA.json";
// const dogsData = require("../DOGS.json");

import UserType from "./TypeDefs/UserType";
import DogsType from "./TypeDefs/DogsType";
import PeopleType from "./TypeDefs/PeopleType";


const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        getAllUsers: {
            type: new GraphQLList(UserType),
            args: {id: {type: GraphQLInt}},
            resolve(parent, args) {
                return userData;
            },
        },
        getDogs: {
            type: new GraphQLList(DogsType),
            args: {id: {type: GraphQLInt}},
            resolve(parent, args) {
                return DB.models.dogs.findAll({where: args});
            },
        },
        getPeople: {
            type: new GraphQLList(PeopleType),
            args: {id: {type: GraphQLInt}},
            resolve(parent, args) {
                return DB.models.person.findAll({where: args});
            },
        }
    },
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: {
            type: UserType,
            args: {
                firstName: {type: GraphQLString},
                lastName: {type: GraphQLString},
                email: {type: GraphQLString},
                password: {type: GraphQLString},
            },
            resolve(parent, args) {
                userData.push({
                    id: userData.length + 1,
                    firstName: args.firstName,
                    lastName: args.lastName,
                    email: args.email,
                    password: args.password,
                });
                return args;
            },
        },
    },
});

// module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation, graphiql:true });
const Schema = new GraphQLSchema({query: RootQuery, mutation: Mutation});
export default Schema
