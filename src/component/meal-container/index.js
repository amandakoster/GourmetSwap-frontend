import React from 'react'
import {connect} from 'react-redux'
import MealForm from '../meal-form'
import mealCreate from '../../action/meal.js'

class MealContainer extends React.Component {
  render(){
    return(
      <div className='meal-container'>
        <h1>Your Meals</h1>
        <MealForm
          onComplete={this.props.mealCreate} />
      </div>
    )
  }
}
