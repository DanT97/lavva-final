import React from 'react'
import {Router, Route, browserHistory } from 'react-router'

import Main from '../containers/main.jsx'
import Sec from '../containers/sec/sec.jsx'

export default props => (
    <Router history={browserHistory}>
        <Route path='/' component={Main}></Route>
        <Route path='/sec' component={Sec}></Route>
    </Router>
)    