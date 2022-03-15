import React, { useState } from 'react';
import { QUERY_SINGLE_USER } from '../utils/queries';
import { useQuery } from '@apollo/client';

import { Link } from 'react-router-dom';


const CommentList = ( {comment} ) => {
    console.log(comment)

    // const usernames = comment.map(data => {
    //     const container = {};
    //     container.username = data.username;
    //     return container;
    // })

    // console.log(usernames)
    // const { loading, data } =useQuery(QUERY_SINGLE_USER, {
    //     variables: {username: comment.comments.username}
    // })
    // const userData = data?.me || {}

    // if(!userData.avatar){
    //     userData.avatar="1";
    // }

    // const avatars = userData.avatar

    // const avatarFunction=(comments) => {
    //     console.log(comments)
    // }



    return(

        <div className="my-3 p-3 bg-body rounded shadow-sm">
            <h6 className="border-bottom pb-2 mb-0">Join The Event Conversation</h6>

            {
                comment &&
                    comment.map((comments) => (
                        <div key ={comments._id} className="d-flex text-muted pt-3">
                            {

                            }
                            <span class={`avatar avatar-1 me-2`}></span>

                            <p className="pb-3 mb-0 small lh-sm border-bottom">
                                <Link to ={`/profiles/${comments.username}`}>
                                    <strong className="d-block text-gray-dark">{comments.username}</strong>
                                </Link>
                                <p >{comments.commentText}</p> 
                            </p>
                        </div>
                    ))
            }
        </div>
    )
}

export default CommentList

// {
//     // events &&
//         Object.keys(events).map((key) => {
//             return(
//                 <div key = {key} className="d-flex text-muted pt-3">
//                 <span class="avatar avatar-1 me-2"></span>

//                 <p className="pb-3 mb-0 small lh-sm border-bottom">
//                     <strong className="d-block text-gray-dark">{key.host}</strong>

//                     {
//                         events[key].map((data) => {
//                             return(
//                                 <p>{data.comment}</p> 
//                             )

                            
//                         })
                    
//                     }
//                 </p>
//                 </div>

//             )

//         }


//     )
// }