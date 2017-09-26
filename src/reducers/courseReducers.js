import {CREATE_COURSE, LOAD_COURSES} from '../actions/courseActions'

export default function courseFunction(state=[],action){
	switch(action.type){
		case 'CREATE_COURSE':
			return [
				...state,
				Object.assign({},action.course)
			]

		case `${LOAD_COURSES}_FULFILLED`:
			console.log(action.payload)
			return action.payload
		default:
			return state
	}
}