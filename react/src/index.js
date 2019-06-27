import React from 'react';
import { render } from 'react-dom';
import App from './App';
import reducers from './components/reducers'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

const store=createStore(reducers)

render(<Provider store={store}><App /></Provider>, document.getElementById('root'));