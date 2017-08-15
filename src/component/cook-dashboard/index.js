import React from 'react'
import {connect} from 'react-redux'
import {MemoryRouter, Link, Switch, Route} from 'react-router-dom'
// import reactDropdown  from 'react-simple-dropdown'
import * as util from '../../lib/util.js'
import * as route from  '../../action/route.js'
import * as auth from '../../action/auth.js'

import CookProfileForm from '../cook-profile-form'
import MealForm from '../meal-form'

class CookDashboard extends React.Component {
  render(){
    console.log('HIT COOK DASH')
    return(
      <div className='cook-dashboard'>
        <h2>cook dashboard</h2>
        <ul>
          <li><a onClick={this.props.goToCookProfileForm}>cook profile form</a></li>
          <li><a onClick={this.prop.goToMealForm}>meal form</a></li>
        </ul>
        <MemoryRouter>
          <Switch ocation={{pathname: this.props.route}}>
            <Route path='/cook-profile-form' component={CookProfileForm} />
            <Route path='meal-form' component={MealForm} />
          </Switch>
        </MemoryRouter>
      </div>
    )
  }
}

let mapStateToProps = (state) => ({route: state.route})

let mapDispatchToProps = (dispatch) => ({
  goTocookProfileForm: () => dispatch(route.switchRoute('/cook-profile-form')),
  goTomealForm: () => dispatch(route.switchRoute('/meal-form')),
})

export default connect(mapStateToProps, mapDispatchToProps)(CookDashboard)
