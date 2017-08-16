import React from 'react'
import {connect} from 'react-redux'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import * as route from '../../action/route.js'
import * as util from '../../lib/util.js'
import auth from '../../action/auth.js'
import Landing from '../landing'
import Signup from '../signup'
import Signin from '../signin'

import MealContainer from '../meal-container'
import CookForm from '../cook-container'


export class App extends React.Component{
  componentDidMount(){
    console.log('Comp Did Mount', this.props)
  }

  render() {
    console.log('HIT APP', this.props)
    return(

      <BrowserRouter>
        <div className='nav'>
          <div className='user-nav'>
            <ul>
              <li><Link to='/landing'> Landing </Link></li>
              <li><Link to='/signup'> Signup </Link></li>
              <li><Link to='/signin'> Signin </Link></li>
            </ul>

            <Route exact path='/landing'
              component={Landing} />
            <Route exact path='/signup'
              component={Signup} />
            <Route exact path='/signin'
              component={Signin} />
          </div>


          <div className='cook-nav'>
            <ul>
              <li><Link to='/cook-form'>Apply to Cook With Us!</Link></li>
              <li><Link to='/meal-container'>Meals</Link></li>
            </ul>
            <Route exact path='/cook-form'
              component={CookForm} />
            <Route exact path='/meal-container'
              component={MealContainer} />

          </div>
        </div>
      </BrowserRouter>

    )
  }
}

let mapStateToProps = (state) => ({})

let mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
