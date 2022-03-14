import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_COMMENT } from '../utils/mutations';

const Comment = ({ eventId }) => {

    const [commentText, setComment] = useState('');
    const [characterCount, setCharacterCount] = useState(0);

    const [addComment, { error }] = useMutation(ADD_COMMENT);


    const handleChange = event => {
    if (event.target.value.length <= 280) {
      setComment(event.target.value);
        setCharacterCount(event.target.value.length);
    }
    };

    const handleFormSubmit = async event => {
    event.preventDefault();
    console.log(eventId)
    console.log(commentText)

    try {
        await addComment({
            variables: { commentText:commentText, eventId: eventId}
        });

        setComment('');
        setCharacterCount(0);

    } catch (e) {
        console.error(e);
      }


    };

  return (
    <div>
      <p className="m-0">
        Character Count: {characterCount}/280
        {error && <span className="ml-2">Something went wrong...</span>}

      </p>
      <form className="flex-row justify-center justify-space-between-md align-stretch" onSubmit={handleFormSubmit}>
        <textarea
          placeholder="Leave a reaction to this thought..."
          value = {commentText}
          className="form-input col-12 col-md-9"
          onChange={handleChange}

        ></textarea>

        <button className="btn col-12 col-md-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Comment;