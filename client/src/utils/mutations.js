import { gql } from '@apollo/client';


export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!,  $password: String!) {
  addUser(username: $username email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`;



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




export const ADD_EVENT = gql`
mutation addEvent($input: EventInput) {
  addEvent(input: $input){
    _id
    title
    host
    cuisineType
    description
    createdAt
    eventDate
    time
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
            description
            createdAt
            eventDate
            time
            guests
            countNoshers
            maxNoshers
            comment
            vacancy
        } 
        myJoinedEvent {
            _id
            title
            host
            cuisineType
            description
            createdAt
            eventDate
            time
            guests
            countNoshers
            maxNoshers
            comment
            vacancy
        } 
        comment {
            _id
            commentText
            username
            createdAt
  }
}
`;

export const UPDATE_EVENT = gql`
mutation updateEvent($eventId: ID!, $input: EventInput!) {
  updateEvent(eventId: $eventId, input: $input ) {
    _id
    title
    host
    cuisineType
    description
    createdAt
    eventDate
    time
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

export const REMOVE_EVENT = gql`
mutation removeEvent($eventId: ID!) {
  removeEvent(eventId: $eventId) {
    _id
    title
    host
    cuisineType
    description
    createdAt
    eventDate
    time
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
export const ADD_COMMENT = gql`
mutation addComment($eventId: ID!, $commentText: String!) {
  addComment(eventId: $eventId, commentText: $commentText) {
    _id
    title
    host
    cuisineType
    description
    createdAt
    eventDate
    time
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





