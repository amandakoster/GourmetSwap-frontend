import React from 'react'
import {connect} from 'react-redux'
import MealForm from '../meal-form'
import {mealCreateRequest} from '../../action/meal.js'
import MealList from '../meal-list'

class MealContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      meals: [],
    }
    this.handleMealCreate = this.handleMealCreate.bind(this)
  }

  handleMealCreate(meal){
    console.log('meal', meal)
    return this.props.mealCreate(meal)
      .catch(console.error)
  }
  render(){
    console.log(this.state.meals)
    return(
      <div className='main-nav'>
        <MealForm
          onComplete={this.handleMealCreate} />
        <footer> </footer>
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  meals: state.meals,
})

let mapDispatchToProps = (dispatch) => ({
  mealCreate: (meal) => dispatch(mealCreateRequest(meal)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MealContainer)
