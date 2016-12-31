/**
 * Created by eliebuff on 10/25/16.
 */

import '../style/main.scss';

import React from 'react';
import {render} from 'react-dom';
import { Router, hashHistory } from 'react-router';
import {Provider} from 'react-redux';

import configureStore from './store/configureStore';

import Game from './components/game.js';
import {getAllRiddles} from './actions/contentActions.js';

const store = configureStore();
store.dispatch(getAllRiddles());

render(
	<Provider store={store}>
	  <Game/>
	</Provider>,
    document.getElementById('app')
);
