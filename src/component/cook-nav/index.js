import React from 'react'
import {connect} from 'react-redux'
import { render } from 'react-dom'
import {MemoryRouter, Link, Switch, Route} from 'react-router-dom'

import * as util from '../../lib/util.js'
import * as route from  '../../action/route.js'
import * as auth from '../../action/auth.js'
import CookApplication from '../cook-application'
import MealForm from '../meal-form'
import CookRegister from '../cook-register'

class CookNav extends React.Component{
  constructor(props){
    super(props)
    this.state = {value: 'meal-form'}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({value: e.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  render() {
    // return (
    //   <form onSubmit={this.handleSubmit}>
    //
    //     <select value={this.goToMealForm} onChange={this.handleChange}>
    //       <option value="meal-form">Meal Form</option>
    //     </select>
    //     <input type="submit" value="Submit" />
    //   </form>
    //
    // )

    return (
      <form onSubmit={ this.handleSubmit }>
        <ul onChange={ this.handleChange }>
          <li onClick={ this.goToMealForm }> bring me to meal form </li>
        </ul>
      </form>
    )
  }
}

let mapStateToProps = (state) => ({
  route: state.route,
})

let mapDispatchToProps = (dispatch) => ({
  goToCookApplication: () => dispatch(route.switchRoute('/cook-application')),
  goToMealForm: () => dispatch(route.switchRoute('/meal-form')),
  goToCookRegister: () => dispatch(route.switchRoute('/cook-register')),
})

export default connect(mapStateToProps, mapDispatchToProps)(CookNav)
