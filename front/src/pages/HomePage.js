import React, { useEffect, useState } from 'react';

// Files/Components
import Quotes from '../components/Quotes';
import DataList from '../components/DataList';
import Autocomplete from 'react-autocomplete';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Jumbotron, Form } from 'react-bootstrap';
// Data
import authorList from '../data/authorNames.json';


const HomePage = (props) => {
	const [query, setQuery] = useState('');
	const [quotes, setQuotes] = useState([]);
	const [searchType, setSearchType] = useState('Keyword');
    const [authorName, setAuthorName] = useState('');
  	useEffect(() => {
        const fetchKeywordData = async () => {
            const result = await fetch(`/quotes/keyword/search`, {
            	method: 'post',
            	body: JSON.stringify({keyword: query}),
            	headers: {
                	'Content-Type': 'application/json',
            	}
            });
            const body = await result.json();
            if (query !== '') {
	            if (body.count > 0) {
                    setQuotes([]);
	            	setQuotes(body.results);
	            }
            } else {
            	setQuotes([]);
            }
        }
        if (searchType === 'Keyword') {
        	fetchKeywordData();
        }
    }, [query]);
	

	function handleSearchTypeChange(type) {
		setSearchType(type)
		setQuotes([])
		setQuery('')
	}

	const styles = {
		navBar: {
			background: '#ffffff'
		},
		searchBar: {
            fontSize: '24px',
			display: 'flex',
		    alignItems: 'stretch',
		    height: '70px',
		    boxShadow: 'rgba(56, 86, 122, 0.1) 0px 6px 15.98px 1.02px',
		    borderRadius: '10px',
		    borderColor: 'rgb(244, 245, 247)',
            marginBottom: '15px'
		},
        keywordOption: {
            textAlign: 'center',
            margin: 'auto'
        },
        jumbotronCS: {
            background: '#ffffff'
        }
	};
  	
  return (
    <>
    <Jumbotron style={styles.jumbotronCS} fluid>
    <Container className={styles.jumbotron} fluid>
    <Row>
    <Col md={{ span: 6, offset: 3 }}>
    <Form>
    {
    	searchType === 'Keyword' ? <Form.Control type="text" style={styles.searchBar} value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search Keyword"/> : <Form.Control type="text" style={styles.searchBar} value={query} id="authorField" onChange={(e) => setQuery(e.target.value)} list="authorList" placeholder="Search Author"/>
    }
    <DataList authornames={authorList}/>
    <div styles={styles.keywordOption.margin}>
  	<Form.Check custom inline label="Keyword" value="Keyword" name="radio" type="radio" id={`inline-radio-1`} onChange={(e) => handleSearchTypeChange(e.target.value)}/>
  	<Form.Check custom inline label="Author" value="Author" name="radio" type="radio" id={`inline-radio-2`} onChange={(e) => handleSearchTypeChange(e.target.value)}/>
    </div>
    </Form>
    </Col>
    </Row>
    </Container>
    </Jumbotron>
    <div className="container-fluid">
        <div className="row justify-content-around">
    	   <Quotes quotes={quotes}/>
        </div>
    </div>
    <Autocomplete className="form-control" styles={styles.searchBar}
          getItemValue={(item) => item.label}
          items={authorList}
          renderItem={(item, isHighlighted) =>
            <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
              {item.label}
            </div>
          }
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          onSelect={(val) => setAuthorName(val)}
    />
    </>
  )
}



export default HomePage;
