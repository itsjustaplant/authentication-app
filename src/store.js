/* eslint-disable require-jsdoc, max-len */

import {createStore, applyMiddleware} from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;
