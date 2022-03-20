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
        guests: [String]
        countNoshers: String
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
        LookUpEvents(cuisineType: String, city: String): [Event]
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
        countNoshers: String
        maxNoshers: String
        comment: [ String ]
        vacancy: Boolean
    }

    input UserInput {
        avatar: String
        bioText: String
        favoriteCuisine: String
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        updateUser(input: UserInput!): User
        addEvent(input: EventInput!): Event
        joinEvent(eventId: ID!): User
        removeJoined(eventId: ID!): User
        updateEvent(eventId: ID!, input: EventInput!): Event
        removeEvent(eventId: ID!): Event
        addComment(eventId: ID!, commentText: String!) : Event
    }

    type Auth {
        token: ID!
        user: User
    }
`;

module.exports = typeDefs