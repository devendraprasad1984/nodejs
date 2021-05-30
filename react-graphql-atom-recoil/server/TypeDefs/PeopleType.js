import { GraphQLObjectType, GraphQLInt, GraphQLString } from 'graphql';

const PeopleType = new GraphQLObjectType({
    name: "people",
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
    }),
});

// module.exports = DogsType;
export default PeopleType
