import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_SINGLE_EVENT } from '../utils/queries';
import { JOIN_EVENT, ADD_COMMENT } from '../utils/mutations';
import Comment from "../components/Comment";
import Auth from '../utils/auth';
import CommentList from '../components/CommentList';

const SingleEvent = () => {

  const { id: eventId } = useParams();
  console.log(eventId)

  const { loading, data } = useQuery(QUERY_SINGLE_EVENT, {
    variables: { id: eventId }
  });
  const [joinEvent] = useMutation(JOIN_EVENT);
  const [addComment] = useMutation(ADD_COMMENT);

  const event = data?.event || {};

  console.log(data)
  console.log(event)

  
    const handleJoin = async () => {
        try {
          await joinEvent({
            variables: { eventId: {...event._id} }
          });
        } catch (e) {
          console.log('Does not work')
          console.error(e);
        }
    };

    // const handleComment = async () => {
    //   try {
    //     await addComment({
    //       variables: {eventId, commentText}
    //     })
    //   } catch (e) {
    //     console.log('Does not work')
    //     console.error(e);
    //   }
    // }

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
              {/* <h2>Add borders</h2>  */}

              <div className="list-group">
                <a href="/" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                  <span className="material-icons">
                    place
                  </span>
                  <div className="d-flex gap-2 w-100 justify-content-between">
                    <div>
                      <h6 className="mb-0">{event.title}</h6>
                      <p className="mb-0 opacity-75">1215 19th St, Sacramento, CA 95811</p>
                    </div>
                    <small className="opacity-50 text-nowrap">now</small>
                  </div>
                </a>
                <a href="/" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                  <span className="material-icons fs-3">
                    today
                  </span>
                  <div className="d-flex gap-2 w-100 justify-content-between">
                    <div>
                      <h6 className="mb-0">March 20th, 2022</h6>
                      <p className="mb-0 opacity-75">Never been here but I've heard it's delicious! Anyone wanna join me? Going for pulled pork.</p>
                    </div>
                    <small className="opacity-50 text-nowrap">3d</small>
                  </div>
                </a>
                <a href="/" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                  <span className="material-icons">
                    group_add
                  </span>
                  <div className="d-flex gap-2 w-100 justify-content-between">
                    <div>
                    {/* <button className="btn ml-auto" onClick={handleJoin}>
                      Join this Event
                    </button>                       */}
                    <p className="mb-0 opacity-75">And meet some fellow noshers!</p>
                    </div>
                    <small className="opacity-50 text-nowrap">1w</small>
                  </div>
                </a>
              </div>
              {/* <button className="btn btn-outline-secondary mt-3" type="button">CTA?</button>  */}
            </div>
          </div>
        </div>
      </div>
      <div>
      <button className="btn ml-auto" onClick={handleJoin}>
                      Join this Event
      </button>     
      </div>


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

          <div className="d-flex text-muted pt-3">
            <span class="avatar avatar-4 me-2"></span>

            <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
              <div className="d-flex justify-content-between">
                <strong className="text-gray-dark">Full Name</strong>
                <a href="/">Follow</a>
              </div>
              <span className="d-block">@username</span>
            </div>
          </div>
          <div className="d-flex text-muted pt-3">
            <span class="avatar avatar-5 me-2"></span>

            <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
              <div className="d-flex justify-content-between">
                <strong className="text-gray-dark">Full Name</strong>
                <a href="/">Follow</a>
              </div>
              <span className="d-block">@username</span>
            </div>
          </div>
          <small className="d-block text-end mt-3">
            <a href="/">All suggestions</a>
          </small>
        </div>
      </main>
    </>
  )
};

export default SingleEvent;