let info = [
	{
		"id": 1,
		"user": 1,
		"title": "clean house",
		"completed": false
	},
	{
		"id": 2,
		"user": 2,
		"title": "wash dishes",
		"completed": false
	},
	{
		"id": 3,
		"user": 3,
		"title": "do homework",
		"completed": true
	}
]
info.map(data =>{
	if(data.id === 2){
		console.log(data)
	}
})
