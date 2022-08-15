var countries = ["India", "USA", "Japan" , "Paris"];

var states = new Array("Maharashtra", "Delhi", "Assam",".");

console.log(states[4]);

console.log(states.length);
states[2] = "Punjab";
console.log(states);

var user = ["So", "so2@gmail.com", 6, 2002 , true]
console.log(user);

user.pop();

console.log(user);

user.shift("Intro");
console.log(user);
user.shift();
console.log(user);

console.log(user.indexOf("swar"));

console.log(Array.from("So"));
