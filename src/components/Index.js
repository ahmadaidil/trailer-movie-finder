import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Search from './Search'
import Results from './Results'

export default function Index() {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Search} />
        <Route exact path='/results/:keyword' component={Results} />
      </div>
    </Router>
  )
}