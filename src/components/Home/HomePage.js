import React, {PropTypes} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as commentActions from '../../actions/commentActions'

class HomePage extends React.Component {
	constructor(props,context){
		super(props)
		this.editComment = this.editComment.bind(this)
		this.state = {editable:false}
	}

	componentDidMount(){
	//	this.props.actions.loadComments()
	}

	editComment(e){
		e.preventDefault()
		//this.props.actions.editComment()
	}

	renderComments(){
		return this.props.comments.map((comment)=>{
			return (
				<div>
					<div className="col-xs-12">
						<Link to={'/'+comment.id}>Edit</Link>
						{comment.commentlist.map((el)=><p>{el.text}</p>)}
					</div>
					<hr></hr>
				</div>
			)
		})
	}

	render(){
		console.log(this.state)
		return (
				<div>
					<h1>Home</h1>
					{this.renderComments()}
				</div>
			)
	}
}

HomePage.propTypes={
	comments: PropTypes.array.isRequired
}

function mapStateToProps(state,ownProps){
	console.log(state)
	console.log('+++++++++++++++++++++=')
	return{
		comments: state.comments
	}
}

function mapDispatchToProps(dispatch){
	return{
		actions: bindActionCreators(commentActions,dispatch)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(HomePage)