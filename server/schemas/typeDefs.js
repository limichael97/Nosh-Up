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
        host: String
        cuisineType: String
        city: String
        description: String
        createdAt: String
        eventDate: String
        time: String
        guests: [String]
        countNoshers: Int
        maxNoshers: String
        comment: [ Comment ]
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
        host: String
        cuisineType: String
        city: String
        description: String
        createdAt: String
        eventDate: String
        time: String
        countNoshers: Int
        maxNoshers: String
        comment: [ String ]
        vacancy: Boolean
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addEvent(input: EventInput!): Event
        joinEvent(eventId: ID!): User
        updateEvent(eventId: ID!, input: EventInput!): Event
        removeEvent(eventId: ID!): Event
        addComment(eventId: ID!, username: String!, commentText: String!) : Event
    }

    type Auth {
        token: ID!
        user: User
    }
`;

module.exports = typeDefs