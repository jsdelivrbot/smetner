import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, browserHistory } from 'react-router';
import reducers from './reducers';
import routes from './routes';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();
const store = createStore(
    reducers,
    persistedState
);

store.subscribe(() => {
    if (!store.getState()) {
        return
    }
    saveState({
        lists: store.getState().lists
    });
});

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>
    , document.querySelector('.container'));


