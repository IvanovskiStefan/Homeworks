let animal = {

    typeOfAnimal : "dog",
    nameOfAnimal : "Churchill",

    talkingAnimal : function talkingDog (animal){
        return `${this.nameOfAnimal} says : ${animal} `
        
    }

}


console.log(animal.talkingAnimal(prompt("Please tell what should the dog say :")))

