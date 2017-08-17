import React from 'react'
import {connect} from 'react-redux'
import MealForm from '../meal-form'

class MealList extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    let {meal} = this.props
    return(
      <div>
        {meal}
      </div>
    )
  }
}

let mapStateToProps = () => ({})

let mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(MealList)
