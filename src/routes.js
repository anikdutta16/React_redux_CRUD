import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './components/App'
import HomePage from './components/Home/HomePage'
import EditCommentPage from './components/Home/EditCommentPage'
import AboutPage from './components/AboutUs/AboutPage'
import CoursesPage from './components/Course/CoursesPage'

export default (
	<Route path='/' component={App}>
		<IndexRoute component={HomePage}/>
		<Route path="courses" component={CoursesPage}/>
		<Route path="about" component={AboutPage}/>
		<Route path="/:id" component={EditCommentPage} />
	</Route>
)	