var superHeros = [];
superHeros = [1, 2, 3];
superHeros.unshift(0);
superHeros.push(4);
superHeros.shift();
superHeros.pop();
console.log(superHeros);
var superWomen = ["Mummy", "Mother", "sister"];
for (var index in superWomen) {
    console.log(index);
}
var superWomen = [123, 456, 789];
for (var _i = 0, superWomen_1 = superWomen; _i < superWomen_1.length; _i++) {
    var value = superWomen_1[_i];
    console.log(value);
}
var people = [];
people.push({ name: "shiva", city: "Hyderabad" });
people.push({ name: "kumar", city: "Hyderabad" });
people.push({ name: "Dhoni", city: "Jharkand" });
people.push({ name: "Sachin", city: "Mumbai" });
console.log(people);
for (var i = 0; i <= people.length - 1; i++) {
    console.log(people[i]);
}
var sum = 123;
