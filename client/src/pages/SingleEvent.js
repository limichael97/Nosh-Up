import React from 'react';

const SingleEvent = () => {
    return (
    <>
    <div className="d-flex align-items-center p-3 my-5 text-white bg-primary rounded shadow-sm">
        <span className="material-icons fs-1 me-2">
            restaurant
        </span>
      <div className="lh-1">
        <h1 className="h6 mb-0 text-white lh-1">Bootstrap</h1>
        <small>Since 2011</small>
      </div>
    </div>

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
                      <h6 className="mb-0">Mulvaney's B&L</h6>
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
                      <h6 className="mb-0">Join this event</h6>
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
    
    <main className="container py-5">
    <div className="my-3 p-3 bg-body rounded shadow-sm">
      <h6 className="border-bottom pb-2 mb-0">Event Conversation</h6>
      <div className="d-flex text-muted pt-3">
        <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
  
        <p className="pb-3 mb-0 small lh-sm border-bottom">
          <strong className="d-block text-gray-dark">@username</strong>
          Some representative placeholder content, with some information about this user. Imagine this being some sort of status update, perhaps?
        </p>
      </div>
      <div className="d-flex text-muted pt-3">
        <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#e83e8c"/><text x="50%" y="50%" fill="#e83e8c" dy=".3em">32x32</text></svg>
  
        <p className="pb-3 mb-0 small lh-sm border-bottom">
          <strong className="d-block text-gray-dark">@username</strong>
          Some more representative placeholder content, related to this other user. Another status update, perhaps.
        </p>
      </div>
      <div className="d-flex text-muted pt-3">
        <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#6f42c1"/><text x="50%" y="50%" fill="#6f42c1" dy=".3em">32x32</text></svg>
  
        <p className="pb-3 mb-0 small lh-sm border-bottom">
          <strong className="d-block text-gray-dark">@username</strong>
          This user also gets some representative placeholder content. Maybe they did something interesting, and you really want to highlight this in the recent updates.
        </p>
      </div>
      <small className="d-block text-end mt-3">
        <a href="/">All updates</a>
      </small>
    </div>
  
    <div className="my-3 p-3 bg-body rounded shadow-sm">
      <h6 className="border-bottom pb-2 mb-0">Events I'm Hosting</h6>
      <div className="d-flex text-muted pt-3">
        <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
  
        <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
          <div className="d-flex justify-content-between">
            <strong className="text-gray-dark">Full Name</strong>
            <a href="/">Follow</a>
          </div>
          <span className="d-block">@username</span>
        </div>
      </div>
      <div className="d-flex text-muted pt-3">
        <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
  
        <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
          <div className="d-flex justify-content-between">
            <strong className="text-gray-dark">Full Name</strong>
            <a href="/">Follow</a>
          </div>
          <span className="d-block">@username</span>
        </div>
      </div>
      <div className="d-flex text-muted pt-3">
        <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
  
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