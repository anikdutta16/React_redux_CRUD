export const CREATE_COURSE = 'CREATE_COURSE'
export const LOAD_COURSES = 'LOAD_COURSES'
import {getAllCourses} from '../services/loadCourses'

export function createCourse(course){
	return {
		type: 'CREATE_COURSE',
		course
	}
}

export function loadCourses(course){
	return {
		type: 'LOAD_COURSES',
		payload: getAllCourses()
	}
}