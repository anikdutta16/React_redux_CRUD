export const LOAD_COMMENT = 'LOAD_COMMENT'
export const SAVE_CHANGE = 'SAVE_CHANGE'
export const ADD_NEW_COMMENT = 'ADD_NEW_COMMENT'
import {getAllComments} from "../services/loadComments"

export function loadComments(){
	return {
		type: 'LOAD_COMMENT',
		payload: getAllComments()
	}
}

export function saveComment(payload){
	return {
		type: 'SAVE_CHANGE',
		payload 
	}
}

export function addNewComment(payload){
	console.log(1)
	return {
		type: 'ADD_NEW_COMMENT',
		payload
	}
}