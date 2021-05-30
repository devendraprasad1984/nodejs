import { GraphQLObjectType, GraphQLInt, GraphQLString } from 'graphql';

const DogsType = new GraphQLObjectType({
    name: "dog",
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        age: { type: GraphQLString },
        bread: { type: GraphQLString },
    }),
});

// module.exports = DogsType;
export default DogsType
