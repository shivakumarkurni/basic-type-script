var superHeros:number[]=[];

superHeros=[1,2,3];

superHeros.unshift(0);
superHeros.push(4);

superHeros.shift();
superHeros.pop();

console.log(superHeros);

var superWomen : string[]=["Mummy","Mother","sister"];

for (var index in superWomen){
	console.log(index);
}
var superWomen : number[]=[123,456,789]
for (var value of superWomen){
	console.log(value)
}

var people:any[]=[];

people.push({name:"shiva",city:"Hyderabad"})
people.push({name:"kumar",city:"Hyderabad"})
people.push({name:"Dhoni",city:"Jharkand"})
people.push({name:"Sachin",city:"Mumbai"})
console.log(people)
for(var i=0;i<=people.length-1;i++){
	console.log(people[i])
}


var sum=123;

