import React, { Component } from 'react'
import { connect } from 'react-redux'
import MovieDB from 'moviedb'
import { Grid, Row, Col, PageHeader, Well } from 'react-bootstrap'

import searchAction from '../actions/searchAction'

const mdb = MovieDB('bb1a087efcf138ae57a0fdb10c961bf5')

class Results extends Component {
  constructor (props) {
    super(props)
    this.state = {
      keyword: props.match.params.keyword
    }
  }

  componentDidMount () {
    mdb.searchMovie({ query: this.state.keyword }, (err, res) => {
      if (err) console.error(err)
      console.log('-------',res)
      if(res !== null) {
        this.props.setResults(res.results)
      }
    })
  }

  render() {
    let results = this.props.results.search.results
    console.log(results)
    return (
      <div className="container">
        <PageHeader><h1>Search results for "{this.state.keyword}"</h1></PageHeader>
        <Grid>
          <Row>
            {
              results.map(result => {
                return (
                  <Col sm={6} md={6} key={result.id}>
                    <div className="container-fluid"><Well><Grid><Row>
                      <Col sm={2} md={2}>
                        <img src={`https://image.tmdb.org/t/p/w640${result.poster_path}`} alt={result.title} style={{width:185, height:278}} />
                      </Col>
                      <Col sm={3} md={3}>
                        <h4>{result.title}</h4><hr />
                        <p className="text-justify" style={{fontSize: '0.9em'}}>{result.overview}</p>
                      </Col>
                    </Row></Grid></Well></div>
                  </Col>
                )
              })
            }
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({results: state})

const mapDispatchToProps = (dispatch) => ({
  setResults: (results) => {
    return dispatch(searchAction(results))
  }
})

export default connect (mapStateToProps, mapDispatchToProps) (Results)