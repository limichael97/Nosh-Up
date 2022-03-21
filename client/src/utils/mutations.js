import { gql } from '@apollo/client';

//addUser(username: String!, email: String!, password: String!): Auth
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;



//login(email: String!, password: String!): Auth
export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`;

//updateUser(input: UserInput!): User
export const UPDATE_USER = gql`
mutation updateUser($input: UserInput!) {
  updateUser(input: $input){
        _id
        username
        email
        password
        avatar
        bioText
        favoriteCuisine
  }
}
`;


//addEvent(input: EventInput!): Event
export const ADD_EVENT = gql`
mutation addEvent($input: EventInput!) {
  addEvent(input: $input){
    _id
    title
    host
    cuisineType
    city
    description
    createdAt
    eventDate
    guests
    countNoshers
    maxNoshers
    comment {
       _id
      commentText
      username
      createdAt
     }
    vacancy
  }
}
`;

//joinEvent(eventId: ID!): User
export const JOIN_EVENT = gql`
mutation joinEvent($eventId: ID!) {
  joinEvent(eventId: $eventId){
        _id
        username
        email
        password
        avatar
        bioText
        favoriteCuisine
        totalCount
        myCurrentEvent {
            _id
            title
            host
            cuisineType
            city
            description
            createdAt
            eventDate
            guests
            countNoshers
            maxNoshers
          
            vacancy
        } 
        myJoinedEvent {
            _id
            title
            host
            cuisineType
            city
            description
            createdAt
            eventDate
            guests
            countNoshers
            maxNoshers

            vacancy
        } 
        comment {
            _id
            commentText
            username
            createdAt
        }
  }
}
`;

//joinEvent(eventId: ID!): User
export const REMOVE_JOINEVENT = gql`
mutation removeJoined($eventId: ID!) {
  removeJoined(eventId: $eventId){
        _id
        username
        email
        password
        avatar
        bioText
        favoriteCuisine
        totalCount
        myCurrentEvent {
            _id
            title
            host
            cuisineType
            city
            description
            createdAt
            eventDate
        
            guests
            countNoshers
            maxNoshers
          
            vacancy
        } 
        myJoinedEvent {
            _id
            title
            host
            cuisineType
            city
            description
            createdAt
            eventDate
      
            guests
            countNoshers
            maxNoshers

            vacancy
        } 
        comment {
            _id
            commentText
            username
            createdAt
        }
  }
}
`;

//updateEvent(eventId: ID!, input: EventInput!): Event
export const UPDATE_EVENT = gql`
mutation updateEvent($eventId: ID!, $input: EventInput!) {
  updateEvent(eventId: $eventId, input: $input ) {
    _id
    title
    host
    cuisineType
    city
    description
    createdAt
    eventDate
    guests
    countNoshers
    maxNoshers
    comment {
       _id
      commentText
      username
      createdAt
     }
    vacancy
  }
}
`;


//removeEvent(eventId: ID!): Event
export const REMOVE_EVENT = gql`
mutation removeEvent($eventId: ID!) {
  removeEvent(eventId: $eventId) {
    _id
    title
    host
    cuisineType
    city
    description
    createdAt
    eventDate
    guests
    countNoshers
    maxNoshers
    comment {
       _id
      commentText
      username
      createdAt
     }
    vacancy
  }
}
`

//addComment(eventId: ID!, username: String!, commentText: String!)
export const ADD_COMMENT = gql`
mutation addComment($eventId: ID!, $commentText: String!) {
  addComment(eventId: $eventId, commentText: $commentText) {
    _id
    title
    host
    cuisineType
    city
    description
    createdAt
    eventDate
    guests
    countNoshers
    maxNoshers
    comment {
       _id
      commentText
      username
      createdAt
     }
    vacancy
  }
}
`;
