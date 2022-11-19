import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './frontend/App'
import store from './frontend/store'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './index.css'

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
 document.getElementById('root'))
