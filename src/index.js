import React from 'react';
import ReactDOM from 'react-dom';
import {Root} from './Root';
import {store} from './redux/store';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import './index.css';

console.log(store.getState())
store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={Root}/>
        </Router>
    </Provider>,
    document.getElementById('root')
);