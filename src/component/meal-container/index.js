import React from 'react'
import {connect} from 'react-redux'
import MealForm from '../meal-form'
import {mealCreateRequest, mealFetchRequest} from '../../action/meal.js'
import MealList from '../meal-list'

class MealContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      meals: [],
    }
    this.handleMealCreate = this.handleMealCreate.bind(this)
  }

  componentDidMount(){
    this.props.mealsFetch()
  }

  handleMealCreate(meal){
    console.log('meal', meal)
    return this.props.mealCreate(meal)
      .catch(console.error)
  }
  render(){
    console.log('this.state.meals', this.props.meals)
    return(
      <div className='meal-container'>
        <h1>Post Your Meal</h1>
        <MealForm
          onComplete={this.handleMealCreate} />


        <div className='meals'>
        {this.props.meals.map(meal =>
          <MealList key={meal._id} meal={meal}
          />
        )}
        </div>
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  meals: state.meals,
})

let mapDispatchToProps = (dispatch) => ({
  mealCreate: (meal) => dispatch(mealCreateRequest(meal)),
  mealsFetch: () => dispatch(mealFetchRequest()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MealContainer)
