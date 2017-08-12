import React from 'react'
import ReactDom from 'react-dom'
import App from './component/app'


let AppContainer = () => (
  <div>
    <App/>
  </div>
)

ReactDom.render( <AppContainer/>, document.getElementById('root'))
