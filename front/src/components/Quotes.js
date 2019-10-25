import React from 'react';

const Quotes = ({quotes}) => {
	const styles = {
		customFont: {
            fontSize: '20px',
            borderRadius: '4px',
            marginBottom: '15px',
            boxShadow: '0px 1px 5px #ddd'
        }
	}
  return (
    	quotes.map((quote, key) => (
			<div className="col-lg-5 col-xs-12" style={styles.customFont} key={key}>
	    		<p>{quote.quoteText}<br/><i>{quote.quoteAuthor !== "" ? quote.quoteAuthor : "Unknown"}</i></p>
			</div>
		)
	)
  )
}

export default Quotes;