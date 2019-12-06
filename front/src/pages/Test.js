import React, { useEffect, useState } from 'react';

const Test = (props) => {
	const [quotes, setQuotes] = useState([]);
	const [query, setQuery] = useState('');
	  	
  	useEffect(() => {
        const fetchData = async () => {
        	console.log("This is " + query)
            const result = await fetch(`/test`, {
            	method: 'post',
            	body: JSON.stringify({keyword: query}),
            	headers: {
                	'Content-Type': 'application/json',
            	}
            });
            const body = await result.json();
            if (query !== '') {
	            if (body.count > 0) {
	            	console.log(body)
	            	setQuotes(body.results);
	            } else {
	            	setQuotes([]);
	            }
            } else {
            	setQuotes([]);
            }
        }
        fetchData();
    }, [query]);
	

	const searchBar = {
		height: '35px',
		width: '300px'
	}
  	
  return (
    <>
    <h4>Test</h4>
    <input type="text" style={searchBar} value={query} id="authorField" onChange={(e) => setQuery(e.target.value)}/><br/>
    	{console.log(quotes)}
    	{quotes.map((quote, key) => (
			<div key={key}>
	    		<p>{quote.quoteText}</p>
	    		<p>{quote.quoteAuthor}</p>
			</div>
	    		))
    	
    	}
    
    </>
  )
}



export default Test;
