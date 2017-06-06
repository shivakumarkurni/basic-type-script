class Animal{
	name:string;
	type:string;

	constructor(name:string,type:string){
		this.name=name;
		this.type:type;
	}

	food(message:string){
		return message;
	}
}

var cow= new Animal("Cow","Domestic");
console.log(cow)
console.log(cow.food(1))