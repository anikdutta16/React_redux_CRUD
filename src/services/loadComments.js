import comments from '../api/commentsMockApi'

export function getAllComments(){
	return new Promise((resolve,reject)=>{
		let commentArr = []

		for(let i in comments){
			let obj={}
			obj['id'] = i
			obj['commentlist']=comments[i]
			commentArr.push(obj)
		}
		setTimeout(()=>{
			//resolve(Object.values(comments))
			resolve(commentArr)
		},1000)
	})
}