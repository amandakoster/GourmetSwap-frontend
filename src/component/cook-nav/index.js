import React from 'react'
import {connect} from 'react-redux'
import {MemoryRouter, Link, Switch, Route} from 'react-router-dom'
import Dropdown from 'react-simple-dropdown'
var DropdownTrigger = Dropdown.DropdownTrigger
// var DropdownContent = Dropdown.DropdownContent

import * as util from '../../lib/util.js'
import * as route from  '../../action/route.js'
import * as auth from '../../action/auth.js'
import '../../style/main.scss'

import CookProfileForm from '../cook-profile-form'
import MealForm from '../meal-form'

export class CookNav extends React.Component{
  render(){
    return (
      <div>
        <h1>test1</h1>
        <Dropdown>
          <DropdownTrigger>test</DropdownTrigger>
          <DropdownContent>
            <ul>
              <li><a href='/cook-profile-form'>Cook Profile</a></li>
              <li><a href='meal-form'>Meal Form</a></li>
            </ul>
          </DropdownContent>
        </Dropdown>
      </div>
    )
  }
}

export default CookNav
