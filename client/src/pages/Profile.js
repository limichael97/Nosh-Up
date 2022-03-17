import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { UPDATE_USER } from '../utils/mutations';
import Auth from '../utils/auth'
import { QUERY_SINGLE_USER } from '../utils/queries';

const Profile = () => {

    const { username: urlUser } = useParams();

    const {loading, data} = useQuery(QUERY_SINGLE_USER, {
        variables: {username: urlUser},
    });

    const user = data?.user || { avatar: '1', bioText:'', favoriteCuisine: ''};



  return (
    <div className="container mt-2 py-5">
          <div className="row align-items-md-stretch">
          <div className="col">
                <img className="avatar-img" src={require(`../img/avatar-${user.avatar}.jpg`)} />
              <h2 className="mt-2">Name: {user.username}</h2>
              <p className="mb-1">Here's my bio: {user.bioText}</p>
              <p>My favorite cuisine: {user.favoriteCuisine}</p>
            </div>
            </div>
          </div>
  );
};

export default Profile;

/*
        
        <div className="container mt-2">
          <div className="row align-items-md-stretch">
            <div className="col">
              <p>Name: {user.username}</p>
              <p>Avatar (in text): {user.avatar}</p>
              <p>Here's my bio: {user.bioText}</p>
              <p>My favoriate cuisine: {user.favoriteCuisine}</p>
          </div>
          </div>
*/
