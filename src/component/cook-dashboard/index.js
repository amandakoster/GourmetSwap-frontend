<<<<<<< HEAD
// import React from 'react'
// import {connect} from 'react-redux'
// import {MemoryRouter, Link, Switch, Route} from 'react-router-dom'
// // import reactDropdown  from 'react-simple-dropdown'
// import * as util from '../../lib/util.js'
// import * as route from  '../../action/route.js'
// import * as auth from '../../action/auth.js'
//
// import CookApplication from '../cook-application'
// import MealForm from '../meal-form'
// import CookForm from '../cook-form'
//
// class CookDashboard extends React.Component {
//   render(){
//     console.log('HIT COOK DASH')
//     return(
//       <div className='cook-dashboard'>
//         <h2>cook dashboard</h2>
//         <ul>
//           <li><a onClick={this.props.goToCookApplication}>cook application</a></li>
//           <li><a onClick={this.prop.goToMealForm}>meal form</a></li
//                 <li><a onClick={this.props.goToCookApplication}>cook application</a></li>
//         </ul>
//
//         <MemoryRouter>
//           <Switch ocation={{pathname: this.props.route}}>
//             <Route path='/cook-application' component={CookApplication} />
//             <Route path='/meal-form' component={MealForm} />
//           </Switch>
//         </MemoryRouter>
//       </div>
//     )
//   }
// }
//
// let mapStateToProps = (state) => ({route: state.route})
//
// let mapDispatchToProps = (dispatch) => ({
//   goToCookApplication: () => dispatch(route.switchRoute('/cook-application')),
//   goTomealForm: () => dispatch(route.switchRoute('/meal-form')),
// })
//
// export default connect(mapStateToProps, mapDispatchToProps)(CookDashboard)
=======
import React from 'react'
import {connect} from 'react-redux'
import {MemoryRouter, Link, Switch, Route} from 'react-router-dom'
// import reactDropdown  from 'react-simple-dropdown'
import * as util from '../../lib/util.js'
import * as route from  '../../action/route.js'
import * as auth from '../../action/auth.js'

import CookApplication from '../cook-application'
import MealForm from '../meal-form'
import CookForm from '../cook-form'

class CookDashboard extends React.Component {
  render(){
    console.log('HIT COOK DASH')
    return(
      <div className='cook-dashboard'>
        <h2>cook dashboard</h2>
        <ul>
          <li><a onClick={this.props.goToCookApplication}>cook application</a></li>
          <li><a onClick={this.prop.goToMealForm}>meal form</a></li>
                <li><a onClick={this.props.goToCookApplication}>cook application</a></li>
        </ul>

        <MemoryRouter>
          <Switch ocation={{pathname: this.props.route}}>
            <Route path='/cook-application' component={CookApplication} />
            <Route path='/meal-form' component={MealForm} />
          </Switch>
        </MemoryRouter>
      </div>
    )
  }
}

let mapStateToProps = (state) => ({route: state.route})

let mapDispatchToProps = (dispatch) => ({
  goToCookApplication: () => dispatch(route.switchRoute('/cook-application')),
  goTomealForm: () => dispatch(route.switchRoute('/meal-form')),
})

export default connect(mapStateToProps, mapDispatchToProps)(CookDashboard)
