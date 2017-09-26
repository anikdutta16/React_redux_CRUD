import {createStore, applyMiddleware} from 'redux'
import rootReducer from '../reducers'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'

export default function configureStore(initialState){
	return createStore(
		rootReducer,
		initialState,
		applyMiddleware(reduxImmutableStateInvariant(),thunk,promiseMiddleware())
	)
}