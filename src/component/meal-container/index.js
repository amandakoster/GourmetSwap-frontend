import React from 'react'
import {connect} from 'react-redux'
import MealForm from '../meal-form'
import {mealCreateRequest, mealFetchRequest} from '../../action/meal.js'
import MealList from '../meal-list'
import {cookFetch} from '../../action/auth.js'
import * as util from '../../lib/util.js'

class MealContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      meals: [],
    }
    this.handleMealCreate = this.handleMealCreate.bind(this)
  }

  componentDidMount(){
    let token = util.cookieFetch('Gourmet-Swap-Token')
    // this.props.cookFetch(token)
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



      </div>
    )
  }
}

// <div className='meals'>
// {this.props.meals.map(meal =>
//   <MealList key={meal._id} meal={meal}
//   />
// )}
// </div>

let mapStateToProps = (state) => ({
  // meals: state.meals,
})

let mapDispatchToProps = (dispatch) => ({
  mealCreate: (meal) => dispatch(mealCreateRequest(meal)),
  // mealsFetch: () => dispatch(mealFetchRequest()),
  cookFetch: (token) => dispatch(cookFetch(token)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MealContainer)
