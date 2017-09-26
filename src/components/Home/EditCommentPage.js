import React, {PropTypes} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as commentActions from '../../actions/commentActions'
import EditableComponent from './EditableComponent'
import CommentBlock from './CommentBlock'
import AddCommentBox from './AddCommentBox'


class EditCommentPage extends React.Component {
	constructor(props,context){
		super(props)
		this.editSpecificCommment= this.editSpecificCommment.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.saveChange = this.saveChange.bind(this)
		this.addComment = this.addComment.bind(this)
		this.handleAddComment = this.handleAddComment.bind(this)
		this.state={editable:false,index:'', id:'', text:'',actualIndex:'', showCommentBox:false, newComment:''}
	}

	editSpecificCommment(e){
		e.preventDefault()
		console.log('-----------------')
		console.log(this.props)
		const index = e.target.getAttribute('data-index')
		const id = e.target.getAttribute('data-id')
		const actualIndex = e.target.getAttribute('data-actualIndex')
		const filteredComment = this.props.comments.find((comment)=>comment.id === this.props.params.id)
		const text = filteredComment.commentlist[index].text

		this.setState({
			editable:true,
			showCommentBox: false,
			index: Number(index),
			id,
			text,
			actualIndex
		})
	}
	renderCommentSpecificToUser(){
		const filteredComment = this.props.comments.find((comment)=>comment.id === this.props.params.id)
		const actualIndex = this.props.comments.findIndex((comment)=>comment.id === this.props.params.id)
		return filteredComment.commentlist.map((el,i)=> <CommentBlock {...el} 
															index={i} id={this.props.params.id}
															actualIndex={actualIndex}
															editSpecificCommment={this.editSpecificCommment}/>)
	}

	handleChange(e){
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	saveChange(){
		console.log(this.state)
		const commentObj = {
			text: this.state.text,
			id: this.state.id,
			index: this.state.index,
			actualIndex: Number(this.state.actualIndex)
		}
		this.props.actions.saveComment(commentObj)
		this.context.router.push('/');
	}

	addComment(){
		this.setState({
			showCommentBox:true
		})
	}

	handleAddComment(e){
		const actualIndex = this.props.comments.findIndex((comment)=>comment.id === this.props.params.id)

		this.props.actions.addNewComment({
			actualIndex: Number(actualIndex),
			newComment: this.state.newComment
		})
	}

	render(){
		console.log(this.props)
		const setContent = this.state.editable?
							<EditableComponent {...this.state} handleChange={this.handleChange} 
								saveChange={this.saveChange}/>
							:<div><a href="#" onClick={this.addComment}>Add comment</a>{this.renderCommentSpecificToUser()}</div>
		const addTextBox = this.state.showCommentBox?
							<AddCommentBox {...this.state} handleAddComment={this.handleAddComment}
								handleChange={this.handleChange} />
							:null

		return (
				<div>
					<h1>EditComment</h1>
					{setContent}
					{addTextBox}
				</div>
			)
	}
}

EditCommentPage.propTypes={
}

function mapStateToProps(state,ownProps){
	return{
		comments: state.comments
	}
}

EditCommentPage.contextTypes = {
  router: PropTypes.object
};

function mapDispatchToProps(dispatch){
	return{
		actions: bindActionCreators(commentActions,dispatch)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(EditCommentPage)