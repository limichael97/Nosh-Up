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


    const { loading, data } =useQuery(QUERY_SINGLE_USER, {
        variables: {username: comment.username}
    })

    const temp = data?.user || {};
    const CurUser = temp.avatar;


/*
    var CurUser = []
    if(comment)
    {
        for(var i = 0; i <comment.length; i++) {
            console.log(comment[i].username);
            CurUser.push(comment[i].username);
            const { loading, data } =useQuery(QUERY_SINGLE_USER, {
                variables: {username: CurUser[i]}
            })
            const temp = data?.user || {};
            CurUser[i] = temp.avatar;
        }
        console.log(CurUser)
    }

*/




/*
    if(comment){
    console.log(UserName)
      const { loading, data } =useQuery(QUERY_SINGLE_USER, {
        variables: {username: UpdateState}
     })
     const userData = data?.me || {}
     console.log(userData.avatar);
    }
*/
    // const { loading, data } =useQuery(QUERY_SINGLE_USER, {
    //     variables: {username: comment.[comments].username}
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



    

                        <div key ={comment._id} className="d-flex text-muted pt-3">
                            {
                             
                            }
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