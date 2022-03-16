import React from 'react';
import { QUERY_SINGLE_USER } from '../utils/queries';
import { useQuery } from '@apollo/client';

import { Link } from 'react-router-dom';

const GuestList = ( { guests} ) => {
    console.log(guests)

    const { loading, data } =useQuery(QUERY_SINGLE_USER, {
        variables: {username: guests}
    })

    const user = data?.user || {};
    const avatar = user.avatar;

    return (

            <div  className="d-flex text-muted pt-3">
                <span className={`avatar avatar-${avatar} me-2`}></span>

                <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                    <div className="d-flex justify-content-between">
                        <strong className="text-gray-dark"></strong>
                        {/* <a href="/">Follow</a> */}
                    </div>
                    <Link to ={`/profiles/${guests}`}>
                        <span className="d-block">{guests}</span>
                    </Link>
                </div>
            </div>

    )

}


export default GuestList
