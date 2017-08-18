import React from 'react'
import {connect} from 'react-redux'
import MealForm from '../meal-form'

class MealList extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    let {meal} = this.props
    console.log('meal-list meal', meal)
    return(
      <div className="meal-card">
        <img src={meal.photoURL} />
        <div>
          <p className="meal-price">{meal.price}</p>
          <p className="meal-title">{meal.title}</p>
        </div>
        <div>
          <p className="meal-date">{meal.endDate}</p>
          <p className="meal-date">{meal.endDate}</p>
        </div>
        <p> {meal.description} </p>
      </div>
    )
  }
}

let mapStateToProps = (state) => ({})

let mapDispatchToProps = () => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(MealList)
