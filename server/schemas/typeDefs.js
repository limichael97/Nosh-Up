const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID
        username: String
        email: String
        password: String
        avatar: String
        bioText: String
        favoriteCuisine: String
        totalCount: Int
        myCurrentEvent: [Event]
        myJoinedEvent: [Event]
        comment: [ Comment ]
    }

    type Event {
        _id: ID
        title: String
        username: String
        cuisineType: String
        description: String
        createdAt: String
        eventDate: String
        time: String
        countNoshers: Int
        maxNoshers: Int
        comments: [ Comment ]
        vacancy: Boolean
    }
    type Comment {
        _id: ID
        commentText: String
        username: String
        createdAt: String
    }
    
    type Query {
        me: User
        users: [User]
        user(username: String!): User
        events(username: String): [Event]
        event(_id: ID!): Event
    }

    input EventInput {
        _id: ID
        title: String
        username: String
        cuisineType: String
        description: String
        createdAt: String
        eventDate: String
        time: String
        countNoshers: Int
        maxNoshers: Int
        comments: [ String ]
        vacancy: Boolean
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addEvent(input: EventInput!): Event
        joinEvent(input: EventInput!): Event
        updateEvent(eventId: ID!, input: EventInput!): Event
        removeEvent(_id: ID!): Event
    }

    type Auth {
        token: ID!
        user: User
    }
`;

module.exports = typeDefs