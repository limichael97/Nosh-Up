import React from 'react';
import EventList from "../components/EventList";
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';


const SearchEvent = () => {

    const { loading2, data } =useQuery(QUERY_ME)
    const meData = data?.me || {}

    var meUsername = meData.username
  
    return (
        <>
            <EventList username = {meUsername} />
        </>
    )
};

export default SearchEvent;