import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as courseActions from '../../actions/courseActions'

class CoursesPage extends React.Component{
	constructor(props,context){
		super(props)
		this.handleTitleChange = this.handleTitleChange.bind(this)
		this.handleClick = this.handleClick.bind(this)
		this.state={
			course: {title:''}
		}
	}

	componentDidMount(){
		this.props.actions.loadCourses()
	}

	handleTitleChange(e){
		const course = this.state.course
		course.title = e.target.value
		this.setState({course:course})
	}

	handleClick(){
		console.log(this.state.course.title)
		this.props.actions.createCourse(this.state.course)
	}

	renderCourse(){
		return this.props.courses.map((course,i)=>{
			return (
				<div key={i}>{course.title}</div>
			)
		})
	}

	render(){
		return (
			<div>
				<h1>Courses</h1>
				{this.renderCourse()}
				<h2>Add Course</h2>
				<input type="text" onChange={this.handleTitleChange} value={this.state.course.title} />
				<input type="submit" onClick={this.handleClick} value="Submit" />
			</div>
		)
	}
}

CoursesPage.propTypes = {
	actions: PropTypes.object.isRequired,
	courses: PropTypes.array.isRequired
}

function mapStateToProps(state,ownProps){
	return {
		courses: state.courses
	}
}

function mapDispatchToProps(dispatch){
	return {
		actions: bindActionCreators(courseActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage)