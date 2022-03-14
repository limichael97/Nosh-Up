import { gql } from '@apollo/client';

 export const QUERY_ME = gql`
 {
     me {
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

export const QUERY_USERS = gql`
  query getUsers {
    users {
        _id
        username
        email
        password
        avatar
        bioText
        favoriteCuisine
        totalCount
        myCurrentEvent
        myJoinedEvent
        comment
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query getSingleUser($username: String!) {
    user(username: $username) {
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
            time
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
            time
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

export const QUERY_EVENTS = gql`
  query events($username: String) {
    events(username: $username) {
        _id
        host
        title
        cuisineType
        city
        description
        createdAt
        eventDate
        time
        guests
        countNoshers
        maxNoshers
        # comment
        vacancy
    }
    }
`;

export const  QUERY_SINGLE_EVENT = gql`
    query getSingleEvent($id: ID!) {
        event(_id: $id){
            _id
            title
            host
            cuisineType
            city
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