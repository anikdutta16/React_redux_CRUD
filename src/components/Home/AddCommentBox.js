import React from 'react'

const AddCommentBox = ({newComment,handleAddComment, handleChange})=>{
	return (
		<div>
			<input type="text" name="newComment" value={newComment} onChange={handleChange} />
			<button onClick={handleAddComment}>Add</button>
		</div>
	)
}

export default AddCommentBox