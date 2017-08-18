import React from 'react'
import {connect} from 'react-redux'
import MealForm from '../meal-form'
import './_meal-list.scss'
import moment from 'moment'

class MealList extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    let {meal} = this.props
    meal.startDateFormatted = moment(meal.startDate).format('MMM Do, YYYY')
    meal.endDateFormatted = moment(meal.endDate).format('MMM Do, YYYY')
    console.log('meal-list meal', this.props)
    return(
      <div className="meal-card">
        <img className="meal-image" src={meal.photoURL} />
        <div className="meal-text">
        <div>
          <p className="meal-price">${meal.price}  </p>
          <p className="meal-title">{meal.title}</p>
        </div>
        <div>
          <span className="to-from-dates">from:</span><p className="meal-date">{meal.startDateFormatted}</p>
          <span className="to-from-dates">to:</span><p className="meal-date">{meal.endDateFormatted}</p>
          <br/>
        </div>
          <p> {meal.description} </p>
          <div className="order-button">
            Order
          </div>
        </div>
      </div>
    )
  }
}

let mapStateToProps = (state) => ({

})

let mapDispatchToProps = () => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(MealList)
