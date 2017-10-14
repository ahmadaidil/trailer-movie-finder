import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { Row, Col, PageHeader } from 'react-bootstrap'

import logo from '../logo.svg'
import '../App.css';

export default class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      keyword: ''
    }

    this.updateKeyword = this.updateKeyword.bind(this);
  }

  updateKeyword (event) {
    this.setState({keyword: event.target.value});
  }

  searchNow (event) {
    if(event.key === 'Enter') this.props.history.push(`/results/${this.state.keyword}`)
  }

  render() {
    return (
      <div className="container" style={{marginTop: '5%'}}>
        <Row>
          <Col md={6} mdOffset={3}>
            <Col lg={12} className="text-center"><img src={logo} className="App-logo" alt="logo" /></Col>
            <PageHeader className="text-center">Good Trailer Well Played <small>beta</small></PageHeader>
            <div className="form-group has-success has-feedback">
              <input className="form-control" type="text" placeholder="search trailer movie here..." value={this.state.keyword} onChange={this.updateKeyword} onKeyPress={this.searchNow.bind(this)} required />
              <span className="glyphicon glyphicon-search form-control-feedback"></span>
            </div>
            <p className="text-center" style={{marginTop: '30px'}}>&copy; 2017. Ahmad Aidil Fitri MT</p>
          </Col>
        </Row>
      </div>
    );
  }
}
