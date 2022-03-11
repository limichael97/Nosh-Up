import { gql } from '@apollo/client';

export const QUERY__ME = gql`
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
}
`;  

export const QUERY_USERS = gql`
  query getUsers {
    user {
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
  }
`;

export const QUERY_EVENTS = gql`
  query getEvents($username: String) {
    user(username: $username) {
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
    }}
`;

export const  QUERY_SINGLE_EVENT = gql`
    query getSingleEvent($_id: ID!) {
        event(_id: $_id){
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