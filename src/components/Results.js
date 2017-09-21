import React, { Component } from 'react'
import { connect } from 'react-redux'
import MovieDB from 'moviedb'
import { Row, Col, PageHeader, Well, Image, Pagination } from 'react-bootstrap'
import TextTruncate from 'react-text-truncate'
import { Link } from 'react-router-dom'

import searchAction from '../actions/searchAction'

const mdb = MovieDB('bb1a087efcf138ae57a0fdb10c961bf5')

class Results extends Component {
  constructor (props) {
    super(props)
    this.state = {
      keyword: props.match.params.keyword,
      activePage: props.match.params.page
    }
  }

  componentDidMount (prevProps) {
    mdb.searchMovie({ query: this.state.keyword, page: this.state.activePage }, (err, res) => {
      if (err) console.error(err)
      if(res !== null) {
        this.props.setResults(res)
      }
    })
  }

  handleSelect(eventKey) {
    this.props.history.push(`/results/${this.state.keyword}/${eventKey}`)
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      keyword: nextProps.match.params.keyword,
      activePage: nextProps.match.params.page
    })
  }

  render() {
    let state = this.props.state
    console.log(this.state.activePage)
    console.log(state)
    return (
      <div><div className="container">
        <PageHeader>Search results for "{this.state.keyword}"</PageHeader>
        <Pagination
            className={state.total_pages === 1 ? 'hidden':'shown'}
            prev
            next
            first
            last
            ellipsis
            boundaryLinks
            items={state.total_pages}
            maxButtons={5}
            activePage={ parseInt(this.state.activePage, 10)}
            onSelect={this.handleSelect.bind(this)} />
        <h3 className={state.total_results === 0 ? 'shown' : 'hidden'}>"We know you’re looking for water, but sorry dude, this is a desert!"</h3>
        <Row className="clearfix">
            {
              state.results.map(result => {
                return (
                  <Col md={6} key={result.id}>
                  <Well><Row className="clearfix">
                      <Col md={4} className="text-center">
                        <Image src={`https://image.tmdb.org/t/p/w640${result.poster_path}`} alt={result.title} style={{width:185, height:225}} thumbnail responsive />
                      </Col>
                      <Col md={8}>
                        <h4>{result.title} ({new Date(result.release_date).getFullYear()})</h4>
                        <TextTruncate
                            line={6}
                            truncateText='...'
                            text={result.overview}
                            textTruncateChild={<Link to="/">Read on</Link>}
                            className='text-justify'
                        />
                      </Col>
                    </Row></Well>
                  </Col>
                )
              })
            }
          </Row>
      </div>
      <Link to='/' className="btn btn-primary" style={{
            position: 'fixed',
            float: 'top',
            top: '45px',
            left: '0px',
            margin: '0'
          }}><span className="glyphicon glyphicon-search"></span></Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({state: state.search.results})

const mapDispatchToProps = (dispatch) => ({
  setResults: (results) => {
    return dispatch(searchAction(results))
  }
})

export default connect (mapStateToProps, mapDispatchToProps) (Results)