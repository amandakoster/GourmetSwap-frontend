import React from 'react'
import {connect} from 'react-redux'
import MealForm from '../meal-form'
import {mealCreateRequest} from '../../action/meal.js'

class MealContainer extends React.Component {
  constructor(props){
    super(props)
    this.handleMealCreate = this.handleMealCreate.bind(this)
  }

  handleMealCreate(meal){
    return this.props.mealCreate(meal)
      .catch(console.error)
  }
  render(){
    return(
      <div className='meal-container'>
        <h1>Your Meals</h1>
        <MealForm
          onComplete={this.handleMealCreate} />
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
})

let mapDispatchToProps = (dispatch) => ({
  mealCreate: (meal) => dispatch(mealCreateRequest(meal)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MealContainer)
