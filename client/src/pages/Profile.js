import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { UPDATE_USER } from '../utils/mutations';
import Auth from '../utils/auth'
import { QUERY_SINGLE_USER } from '../utils/queries';

const Profile = (userToCheck) => {

    const {loading, data} = useQuery(QUERY_SINGLE_USER, {
        variables: userToCheck,
    });

    const user = data?.user || {};


  return (
    <main>
        
        <div>
            <p>Name: {user.username}</p>
            <p>Avatar (in text): {user.avatar}</p>
            <p>Here's my bio: {user.bioText}</p>
            <p>My favoriate cuisine: {user.favoriteCuisine}</p>
        </div>

    </main>
  );
};

export default Profile;
