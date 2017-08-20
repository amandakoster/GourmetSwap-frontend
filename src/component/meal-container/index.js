import React from 'react'
import {connect} from 'react-redux'
import MealForm from '../meal-form'
import {mealCreateRequest, mealFetchRequest} from '../../action/meal.js'
import MealList from '../meal-list'
import {cookFetch} from '../../action/auth.js'
import * as util from '../../lib/util.js'
import createFragment from 'react-addons-create-fragment'


class MealContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      profile: null,
      meals: [],
      form: false,
    }
    this.handleMealCreate = this.handleMealCreate.bind(this)
    this.toggleForm = this.toggleForm.bind(this)
  }

  componentDidMount(){
    let token = util.cookieFetch('Gourmet-Swap-Token')
    this.props.cookFetch(token)
  }

  handleMealCreate(meal){
    console.log('meal', meal)
    return this.props.mealCreate(meal)
      .catch(console.error)
  }

  toggleForm(){
    if(this.state.form === false){
      this.setState({
        form: true,
      })
    } else if (this.state.form === true){
      this.setState({
        form: false,
      })
    }
  }

  render(){
    let test = Object.assign({}, this.props.profile)

    console.log('test', test._id)

    return(

      <div className='meal-form'>

        <h2>Bio</h2>
        <p>I have worked as a cook in {test.restaurantsCookedIn}restaurants</p>
        <p>I specialize in {test.cuisines}</p>
        <p>My Signature dishes are {test.signatureDishes}</p>
        <p>I am available to cook {test.mealsPerWeek} meals per week</p>
        <p>Check out my meals below!</p>

        {util.renderIf(this.state.form === true,
          <div>
            <MealForm
              onComplete={this.handleMealCreate} />
          </div>
        )}
        <button onClick={this.toggleForm}>Create a meal</button>

      </div>
    )
  }
}

let mapStateToProps = (state) => {
  console.log('mapStateToProps', state)
  return{
    profile: state.cookProfile,
  }
}

let mapDispatchToProps = (dispatch) => ({
  mealCreate: (meal) => dispatch(mealCreateRequest(meal)),
  // mealsFetch: () => dispatch(mealFetchRequest()),
  cookFetch: (token) => dispatch(cookFetch(token)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MealContainer)
