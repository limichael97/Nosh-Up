import React, { useState } from 'react';
import { QUERY_SINGLE_USER } from '../utils/queries';
import { useQuery } from '@apollo/client';

import { Link } from 'react-router-dom';


const CommentList = ( {comment} ) => {

    const { loading, data } =useQuery(QUERY_SINGLE_USER, {
        variables: {username: comment.username}
    })

    const temp = data?.user || {};
    const CurUser = temp.avatar;

    return(
        <div key ={comment._id} className="d-flex text-muted pt-3">

            <span class={`avatar avatar-${CurUser} me-2`}></span>

            <p className="pb-3 mb-0 small lh-sm border-bottom">
                <Link to ={`/profiles/${comment.username}`}>
                    <strong className="d-block text-gray-dark">{comment.username}</strong>
                </Link>
                <p >{comment.commentText}</p> 
            </p>
        </div>


    )
}

export default CommentList
