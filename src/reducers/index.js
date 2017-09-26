import {combineReducers} from 'redux'
import courses from './courseReducers'
import comments from './commentReducers'

const rootReducer = combineReducers({
	courses,
	comments
})

export default rootReducer