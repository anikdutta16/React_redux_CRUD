import React from 'react'

const CommentBlock = (props)=>{
	console.log(props.actualIndex)
	return (
		<div>
			<p key={props.index}>{props.text}<a href="#" 
				data-index={props.index} data-id={props.id}  data-actualIndex={props.actualIndex} onClick={props.editSpecificCommment}>Edit</a></p>
		</div>
	)
}

export default CommentBlock