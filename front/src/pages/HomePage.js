import React, { Component } from 'react';

// Files/Components
import Quotes from '../components/Quotes';
import DataList from '../components/DataList';
import Autocomplete from 'react-autocomplete';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Jumbotron, Form } from 'react-bootstrap';
// Data
import authorList from '../data/authorNames.json';



class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: '',
            quotes: [],
            placeHolder: 'Search Keyword'
        }
        this.handleQueryChange = this.handleQueryChange.bind(this);
        this.fetchKeywordData = this.fetchKeywordData.bind(this);
        this.handleSearchTypeChange = this.handleSearchTypeChange.bind(this);
    }

    handleQueryChange(e) {
        e.preventDefault();
        this.setState({
            query: e.target.value,
            quotes: [],
            searchType: 'keyword',
        })
        console.log(this.state.query)
        

        this.fetchKeywordData()
        
    }
     
          
   fetchKeywordData = async () => {
        const result = await fetch(`/quotes/keyword/search`, {
            method: 'post',
            body: JSON.stringify({keyword: this.state.query}),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const body = await result.json();
        console.log(body.results)
        this.setState({quotes: body.results});
    
    }

    handleSearchTypeChange(e) {
        this.setState({
            searchType: e.target.value,
            placeHolder: 'Search ' + e.target.value
        })

    }

    

    render() {
        return (
             <>
    <Jumbotron style={styles.jumbotronCS} fluid>
    <Container className={styles.jumbotron} fluid>
    <Row>
    <Col md={{ span: 6, offset: 3 }}>
    <Form>
        <input className="form-control" type="text" style={styles.searchBar} value={this.state.query} onChange={this.handleQueryChange} placeholder={this.state.placeHolder}/>
        <Form.Check custom inline label="Keyword" value="Keyword" name="radio" type="radio" id={`inline-radio-1`} onChange={this.handleSearchTypeChange}/>
        <Form.Check custom inline label="Author" value="Author" name="radio" type="radio" id={`inline-radio-2`} onChange={this.handleSearchTypeChange}/>

    {this.state.query.length}
    {}

    </Form>
    </Col>
    </Row>
    </Container>
    </Jumbotron>
    <div className="container-fluid">
        <div className="row justify-content-around">
        {this.state.query.length > 0 ? <Quotes quotes={this.state.quotes}/>: '' }
        </div>
    </div>
    
    </>
    );
    }
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





export default HomePage;
