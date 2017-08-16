import React from 'react'
import {connect} from 'react-redux'
import MealForm from '../meal-form'
import {mealCreate} from '../../action/meal.js'

class MealContainer extends React.Component {
  render(){
    return(
      <div className='meal-container'>
        <h1>Your Meals</h1>
        <MealForm
          onComplete={(data) => { this.props.mealCreate(data)}} />
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
})

let mapDispatchToProps = (dispatch) => ({
  mealCreate: (meal) => dispatch(mealCreate(meal)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MealContainer)
