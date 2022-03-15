import React, { useState } from 'react';

import { Link } from 'react-router-dom';

const GuestList = ( {guests} ) => {
    console.log(guests)
    // const results = guests.map(guest => )
    // console.log(results)
    return (
        <div className="my-3 p-3 bg-body rounded shadow-sm">
            <h6 className="border-bottom pb-2 mb-0">People Attending</h6>
            {/* {
                !guests || guests.length === 0 && <div>There are no Guests</div>
            }
            {
                    guests.map(guest => {
                    <div  className="d-flex text-muted pt-3">
                        <span class="avatar avatar-4 me-2"></span>
        
                        <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                            <div className="d-flex justify-content-between">
                                <strong className="text-gray-dark"></strong>
                                <a href="/">Follow</a>
                            </div>
                            <Link to ={`/profiles/${guest}`}>
                                <span className="d-block">{guest}</span>
                            </Link>
                        </div>
                    </div>

                })
            } */}

      </div>
    )

}


export default GuestList
