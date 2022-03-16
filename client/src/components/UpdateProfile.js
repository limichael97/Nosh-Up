import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { UPDATE_USER } from '../utils/mutations';
import Auth from '../utils/auth'

const UpdateProfile = () => {

    const [UpdateState, setUpdateState] = useState({ avatar: '1', bioText:'', favoriteCuisine: ''});

    const [updateUser,{ error }] = useMutation(UPDATE_USER);
    console.log(UpdateState)
    
    const handleUserChange = (event) => {
        const { name, value } = event.target;
   
        setUpdateState({
          ...UpdateState,
          [name]: value,
        });
    };
 
    const handleUserSubmit = async event => {
        event.preventDefault();

        const token = Auth.loggedIn() ? Auth.getToken() : null;
        console.log(token)

        if (!token) {
            console.log('No token')
            return false;
        }
    
        try { 
            console.log(UpdateState)

            const {data} = await updateUser({
            variables: { input:{...UpdateState} }
          });
          window.location= '/dashboard';
        } catch (e) {
          console.error(e);
        }
    };


    return (
      <>
        <form className="container py-3" onSubmit={handleUserSubmit}>
        <img className="mb-3" src={require(`../img/avatar-${UpdateState.avatar}.jpg`)} />
        <div className="form-group mb-3">
              <label for="exampleFormControlSelect1">Select Avatar:</label>
              <select class="form-control" name="avatar" onChange = {handleUserChange} value={UpdateState.avatar}>
              <option value ="1">1</option>
              <option value ="2">2</option>
              <option value ="3">3</option>
              <option value ="4">4</option>
              <option value ="5">5</option>
              <option value ="6">6</option>
              <option value ="7">7</option>
              <option value ="8">8</option>
              <option value ="9">9</option>
              <option value ="10">10</option>
              </select>
          </div>

      <div className="form-group mb-3">
              <label className="d-block" for="exampleFormControlSelect1">Favorite Cuisine:</label>
              <select className='form-input form-control mb-3' name ='favoriteCuisine' onChange = {handleUserChange} value={UpdateState.favoriteCuisine}> 
                  <option id="0">---</option>
                  <option value= 'American' id="1">American</option>
                  <option value= 'Mexican' id="2">Mexican</option>
                  <option value= 'Italian' id="3">Italian</option>
                  <option value= 'Chinese' id="4">Chinese</option>
                  <option value= 'Indian' id="5">Indian</option>
                  <option value= 'Japanese' id="6">Japanese</option>
              </select>
          </div>
          <div class="form-group mb-3">
              <label for="exampleFormControlTextarea1">Bio</label>
              <textarea
                  className='form-input form-control mb-3'
                  placeholder='Let other noshers learn more about you'
                  name='bioText'
                  type='text'
                  id='bioText'
                  rows='4'
                  value={UpdateState.bioText}
                  onChange={handleUserChange}>
                  </textarea>
          </div>
          <button 
              className="btn btn-color-four my-1"
              type='submit'
              variant='success'>
              Submit
          </button>
          </form>
      </>
    );
  };

export default UpdateProfile;
/*

    const handleUserChange = (event) => {
        const { name, value } = event.target;
        console.log(selectedImage);
        setUpdateState({
          ...UpdateState,
          [name]: value,
          avatar: selectedImage
        });
    };
      <div>
<label className="mt-3" htmlfor="exampleFormControlSelect1">Upload Image</label>
        {selectedImage && (
          <div className="mt-2">
          <img alt="not found" width={"250px"} src={URL.createObjectURL(selectedImage)} />
        
          <button className="btn-color-one" onClick={()=>setSelectedImage(null)}>Remove</button>
          </div>
        )}
  
        <input
          className="form-control mb-3"
          type="file"
          name="myImage"
          onChange={(event) => {
            console.log(event.target.files[0]);
            setSelectedImage(event.target.files[0]);
          }}
        />
      </div>

*/