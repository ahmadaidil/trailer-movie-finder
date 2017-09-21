import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'
// import MovieDB from 'moviedb'

// import resultAction from '../actions/resultAction'

// const mdb = MovieDB('bb1a087efcf138ae57a0fdb10c961bf5')

export default class Search extends Component {
  constructor () {
    super()
    this.state = {
      keyword: ''
    }

    this.updateKeyword = this.updateKeyword.bind(this);
  }

  // componentDidMount () {
  //   mdb.searchMovie({ query: this.state.keyword }, (err, res) => {
  //     if (err) console.error(err)
  //     console.log('-------',res)
  //   })
  // }
  updateKeyword (event) {
    this.setState({keyword: event.target.value});
  }

  render() {
    // let results = this.props.results
    // debugger
    return (
      <div>
        <h1>Good Trailer Well Played</h1>
        <input type="text" placeholder="search trailer movie here.." value={this.state.keyword} onChange={this.updateKeyword} />
        <Link to={{ pathname: `/results/${this.state.keyword}` }} className="btn btn-primary" role="button">Search</Link>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({results: results})

// const mapDispatchToProps = (dispatch) => ({
//   setResults: (results) => {
//     return dispatch(resultAction(results))
//   }
// })

// export default connect (mapStateToProps, mapDispatchToProps) (Search)