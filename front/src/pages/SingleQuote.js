import React from 'react';

const SingleQuote = (props) => {
	const {singleQuote} = props.location.state;
  return (
    <div>
    <p>{singleQuote.quoteText}</p>
    <p>{singleQuote.quoteAuthor}</p>
    <p></p>
    </div>
  )
}

export default SingleQuote;