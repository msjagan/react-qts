import React from 'react';
import { Link } from 'react-router-dom';
const Quotes = ({quotes}) => {
	const styles = {
		customFont: {
            fontSize: '20px',
            borderRadius: '4px',
            marginBottom: '15px',
            boxShadow: '0px 1px 5px #ddd'
        },
        linkColor: {
        	color: '#000000',
        	textDecoration: 'none'
        }
	}
  return (
    	quotes.map((quote, key) => (
			<div className="col-lg-5 col-xs-12" style={styles.customFont} key={key}>
	    		<p><Link style={styles.linkColor} to={{
						  pathname: '/quotedetail',
						  state: {
						    singleQuote: quote
						  }}}>
				  {quote.quoteText}</Link><br/><i>{quote.quoteAuthor !== "" ? quote.quoteAuthor : "Unknown"}</i></p>
			</div>
		)
	)
  )
}

export default Quotes;