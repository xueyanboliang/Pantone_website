import React from 'react'
import ReactDOM from 'react-dom'
import { Provider} from 'react-redux'
import store from './redux/store/configureStore'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './style/style.css'
import 'antd/dist/antd.css'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById("root"))
registerServiceWorker()