let trainer = { 
	name :  "Stefan",
	lastName: "Stefanovski",
	academy: "SEDC",
	lecture: "Objects",

}

trainer.getFullName = function getName(){
	return `First name : ${trainer.name} Last Name :${trainer.lastName}`

}

delete trainer.lecture
console.log(trainer)