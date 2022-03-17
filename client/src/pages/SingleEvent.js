import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_SINGLE_EVENT, QUERY_ME } from '../utils/queries';
import { JOIN_EVENT, ADD_COMMENT } from '../utils/mutations';
import Comment from "../components/Comment";
import CommentList from '../components/CommentList';
import GuestList from '../components/GuestList';
import { Link } from 'react-router-dom';



const SingleEvent = (username) => {
  console.log(username)
  const { id: eventId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_EVENT, {
    variables: { id: eventId }
  });

  const event = data?.event || [];

  const [joinEvent] = useMutation(JOIN_EVENT);
  console.log(data)
  console.log(event.comment)
  var eventGuests = event.guests
  console.log(eventGuests)

  var CurUser = []
  if(eventGuests)
  {
      for(var i = 0; i <eventGuests.length; i++) {
          console.log(eventGuests[i]);
          CurUser.push(eventGuests[i]);

      }
      console.log(CurUser)
  }
  console.log(CurUser.length)

  const handleJoin = async event => {
    window.location.reload();
      try {
        await joinEvent({
          variables: { eventId: eventId }
        });
      } catch (e) {
        console.log('Does not work')
        console.error(e);
      }
  };


  
  return (
    // Title Location, Date, Creqated by, max noshers, current noshers, description, join this event
    <>
      <div className="container">
        <div className="row align-items-md-stretch">
          <div className="col-md-6 restuarant-profile-pic">
            <div className="h-100 p-5 rounded-3">

            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100 p-5 border rounded-3">
              <h2>{event.title}</h2> 

              <div className="list-group">
                <a href="/" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                  <span className="material-icons">
                    place
                  </span>
                  <div className="d-flex gap-2 w-100 justify-content-between">
                    <div>
                      <p className="mb-0 ">{event.city}</p>
                    </div>
                    {/* <small className="opacity-50 text-nowrap">now</small> */}
                  </div>
                </a>
                <a href="/" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                  <span className="material-icons fs-3">
                    today
                  </span>
                  <div className="d-flex gap-2 w-100 justify-content-between">
                    <div>
                      <h6 className="mb-0">{event.eventDate}</h6>
                    </div>
                    {/* <small className="opacity-50 text-nowrap">3d</small> */}
                  </div>
                </a>
                <a href="/" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                <span className="">
                    Details:
                  </span>
                  <div className="d-flex gap-2 w-100 justify-content-between">
                    <div>
                      <h6 className="mb-0 ">{event.description}</h6>
                    </div>
                    {/* <small className="opacity-50 text-nowrap">3d</small> */}
                  </div>
                </a>

                <a href="/" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                  <span className="">
                    Host:
                  </span>
                  <div className="d-flex gap-2 w-100 justify-content-between">
                    <div>
                      {/* <button className="btn ml-auto" onClick={handleJoin}>
                      Join this Event
                    </button>                       */}
                            <Link to={`/profiles/${event.host}`}>
                                <p className="">{event.host}</p>
                            </Link>                    </div>
                    {/* <small className="opacity-50 text-nowrap">1w</small> */}
                  </div>
                </a>
                
                <a href="/" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                  <span className="">
                    Total Noshers:
                  </span>
                  <div className="d-flex gap-2 w-100 justify-content-between">
                    <div>
                      {/* <button className="btn ml-auto" onClick={handleJoin}>
                      Join this Event
                    </button>                       */}
                    <p className="mb-0 ">{event.maxNoshers}</p>
                    </div>
                    {/* <small className="opacity-50 text-nowrap">1w</small> */}
                  </div>
                </a>

                  {
                    (event.maxNoshers == CurUser.length) ? (
                      <button className="btn ml-auto btn-danger" disabled="disabled">
                      This event is full
                    </button>  
                    ): 
                    // (event.host ) ? (
                    //   <button className="btn ml-auto btn-danger" disabled="disabled">
                    //   This is your event 
                    // </button>  

                    // ) :
                     (
                      <button className="btn ml-auto btn-primary" onClick={handleJoin}>
                        Join this Event
                      </button>     
                    )
                  }
              </div>
              {/* <button className="btn btn-outline-secondary mt-3" type="button">CTA?</button>  */}
            </div>
          </div>
        </div>
      </div>
      <p>{event.maxNoshers}</p>


      <main className="container py-5">
        <div className="d-flex align-items-center p-3 my-3 text-white bg-color-one rounded shadow-sm">
          <span className="material-icons fs-1 me-2">
            dinner_dining
          </span>
          <div className="lh-1">
            <h1 className="h6 mb-0 text-white lh-1">Meet Your</h1>
            <small>Fellow Noshers</small>
          </div>
        </div>
        <Comment eventId = {event._id}/>
        <div className="my-3 p-3 bg-body rounded shadow-sm">
            <h6 className="border-bottom pb-2 mb-0">Join The Event Conversation</h6>
            {
              event.comment &&
                event.comment.map((comments) => (
                  <CommentList comment= {comments}/>
              ))
            }
        </div>
        <div className="my-3 p-3 bg-body rounded shadow-sm">
            <h6 className="border-bottom pb-2 mb-0">People Attending</h6>

            {
              event.guests &&
                event.guests.map((guest) => (
                  <GuestList guests = {guest} /> 

                ))
            }

        </div>
      </main>
    </>
  )
};

export default SingleEvent;