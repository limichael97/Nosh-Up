import React, { useEffect } from 'react';
import Data from "../../src/yelp-data.json"

const YelpTest = () => {
    return (
    <>  
    <div className="row align-items-md-stretch">
        <div className="col-md-6 restuarant-profile-pic">
          <div className="h-100 p-5 rounded-3">
          
          </div>
        </div>
        <div className="col-md-6">
          <div className="h-100 p-5 border rounded-3">
             { 
              Data.map(data => {
                  return (
                    console.log(data.businesses)
                    // <h4>{ data.title }</h4>
                  )
                }) 
              }
            
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
    </>
)
};

export default YelpTest;