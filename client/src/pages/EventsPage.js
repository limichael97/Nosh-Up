// import React, { useState } from 'react';
// import Login from '../components/Login';
// import SignUp from '../components/SignUp';
// import AddEvent from '../components/AddEvent';
// import SingleEvent from './SingleEvent';
// import { Modal, Button } from 'react-bootstrap';




import React, { useState } from 'react';
// import Login from '../components/Login';
// import SignUp from '../components/SignUp';
// import AddEvent from '../components/AddEvent';
// import SingleEvent from './SingleEvent';
// import { Modal, Button } from 'react-bootstrap';
import EventList from '../components/EventList'
// import EventListTest from '../components/EventListTest'


const EventsPage = () => {
  return (
    <EventList />
  )
}

export default EventsPage;


// const EventsPage = () => {
//     return (
//         <>
//         <div className="container">
//             <div className="row mb-2">
//                 <div className="col-md-12">
//                   <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
//                     <div className="col-auto d-none d-lg-block featured-img-3">

//                     </div>
//                     <div className="col p-4 d-flex flex-column position-static">
//                       <strong className="d-inline-block mb-3 color-four">Dinner</strong>
//                       <h3 className="mb-0"><span class="material-icons">restaurant</span> Mulvaney's B&L</h3>
//                       <div className="mb-1"><span class="material-icons adjust-icons">place</span> 1215 19th St, Sacramento, CA 95811</div>
//                       <hr></hr>
//                       <p className="my-3"><span class="material-icons adjust-icons color-two">today</span> March 20th, 2022</p>
//                       <p className="mb-auto"><span className="color-one fw-bold">4</span> Noshers Attending</p>

//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="row mb-2">
//                 <div className="col-md-12">
//                   <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
//                     <div className="col-auto d-none d-lg-block featured-img-3">

//                     </div>
//                     <div className="col p-4 d-flex flex-column position-static">
//                       <strong className="d-inline-block mb-3 color-four">Dinner</strong>
//                       <h3 className="mb-0"><span class="material-icons">restaurant</span> Mulvaney's B&L</h3>
//                       <div className="mb-1"><span class="material-icons adjust-icons">place</span> 1215 19th St, Sacramento, CA 95811</div>
//                       <hr></hr>
//                       <p className="my-3"><span class="material-icons adjust-icons color-two">today</span> March 20th, 2022</p>
//                       <p className="mb-auto"><span className="color-one fw-bold">4</span> Noshers Attending</p>

//                     </div>
//                   </div>
//                 </div>
//               </div>
//         </div>
//         </>
//     )
// }

// export default EventsPage;