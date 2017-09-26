import {LOAD_COMMENT, SAVE_CHANGE, ADD_NEW_COMMENT} from '../actions/commentActions'

export default function commentFunction(state=[],action){
	switch(action.type){
		case `${LOAD_COMMENT}_FULFILLED`:
			return action.payload

		case 'SAVE_CHANGE':
			//const data = [...state]
			console.log('))))))))))))))))))))')
						console.log( [
				...state.slice(0,action.payload.actualIndex),
				{
					id: state[action.payload.actualIndex].id,
					commentlist:[
						...state[action.payload.actualIndex].commentlist.slice(0,action.payload.index),
						
						...state[action.payload.actualIndex].commentlist.slice(action.payload.index+1)
					]
				},
				...state.slice(action.payload.actualIndex+1),
			])

			return [
				...state.slice(0,action.payload.actualIndex),
				{
					id: state[action.payload.actualIndex].id,
					commentlist:[
						...state[action.payload.actualIndex].commentlist.slice(0,action.payload.index),
						{
							text:action.payload.text
						},
						...state[action.payload.actualIndex].commentlist.slice(action.payload.index+1)
					]
				},
				...state.slice(action.payload.actualIndex+1),
			]

		case 'ADD_NEW_COMMENT':
			return [
				...state.slice(0,action.payload.actualIndex),
				{
					id: state[action.payload.actualIndex].id,
					commentlist:[
						...state[action.payload.actualIndex].commentlist,
						{
							text: action.payload.newComment
						}
					]
				},
				...state.slice(action.payload.actualIndex+1),
			]

		default:
			return state
	}
}