import React from 'react'

const EditableComponent = ({index,id,text,handleChange,saveChange})=>{
	return(
		<div>
			<input type="text" name="text" value={text} onChange={handleChange}/>
			<button onClick={saveChange}>Save</button>
		</div>
	)
}

export default EditableComponent