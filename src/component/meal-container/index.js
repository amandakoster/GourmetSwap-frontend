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
    // this.props.cookFetch(token)
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
    console.log('this.props', this.props)
    console.log('this.state', this.state)

    return(

      <div className='main-nav'>
        <button onClick={this.toggleForm}>Create a meal</button>
        {util.renderIf(this.state.form === true,
          <div className='meal-form'>
            <MealForm
              onComplete={this.handleMealCreate} />
          </div>
        )}

        <h2>Your profile!</h2>
        <p>{this.props.profiles}</p>

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
  cookFetch: (token) => dispatch(cookFetch(token)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MealContainer)
