console.log(2+4);
var x, y;
x = 3;
y = 4;
console.log(x+y);
var text = "What a ";
text += "nice day";
console.log(text);
console.log(16 + 4 + "Volvo");
console.log("Volco" + 16 + 4);
//JS array
var aArray = ["Dog", "Cat", "Bunny"];
//JS object
var person = {firstName:"Xiner", lastName:"Zhang", age:"24"};

//typeof
console.log(typeof 120);

function addTwo(a, b) {
    return a + b;
}
console.log(addTwo(x,y));

//Objects
var car = {
  brand: "Fiat",
  year: 1998,
  color: "Yellow",
  getInfo: function() {
    return this.brand + " " + this.year + " " + this.color;
  }
};
console.log(car.brand);
console.log(car.year);
console.log(car.getInfo());

//Scope: the set of variable you have access to
//Local variable
function localVar() {
  var car2 = "Fiat"
  return car2;
}
//var insideCar = car2;
console.log(localVar());
//Below wont work
//console.log(insideCar);

//Do NOT create global variables unless you intend to.

console.log(car.brand.length);

//Below wont work, how to make it help
/*
var student = {firstName, gender};
var s1 = new student("Xiner", "Female");
console.log(s1.firstName);
*/

//String Methods
var s1 = "This is a very long string";
console.log(s1.length);
console.log("==========");
console.log(s1.indexOf("This"));
console.log(s1.indexOf("is"));
console.log(s1.indexOf("a"));
console.log(s1.indexOf("very"));
console.log(s1.indexOf("long"));
console.log(s1.indexOf("string"));
console.log("==========");
//Why???
console.log(s1.search("is"));
console.log(s1.search("This"));

var s2 ="Apple, Banana, Watermelon";
var sliceS2 = s2.slice(6,12);
var sliceS22 = s2.slice(0,-10);
console.log(sliceS2);
console.log(sliceS22);

//substring work the same way but can not accept negative values
//substr also works similar
var subS2 = s2.substr(7,6);
console.log(subS2);

var s3 = "I want to replace this, because I dont like replace";
var newS3 = s3.replace("replace","Haha");
console.log(newS3);
var newS32 = s3.replace(/replace/g, "Haha");
console.log(newS32);
console.log(newS3.concat(" ", newS32));
var s4 = "Hello";
console.log(s4.charAt(0));
var s5 = "a,b,c,d,e";
console.log(s5.split("|"));
console.log(s5.split(","));
console.log(s5.split(" "));


//Number Methods
var z = 100/"Apple";
console.log(isNaN(z));
var x1 = 9.656;
console.log(x1.toExponential(4));
console.log(x1.toFixed(2));
console.log(x1.toPrecision(2));
var x2 = new Date();
console.log(Number(x2));
var x3 = true;
console.log(Number(x3));
console.log(parseInt("10 years"));
console.log(parseInt("Year 10"));

//Math
console.log(Math.PI);
console.log(Math.round(4.3));
console.log(Math.pow(3,3));
console.log(Math.sqrt(4));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.9));
console.log(Math.min(9,4,6,3,6));

function getRandom(min,max) {
  return Math.floor((Math.random()*(max-min))+min);
}
console.log(getRandom(20,50));
console.log(getRandom(20,50));
console.log(getRandom(20,50));

//Come back to Date later

//array
var fruit, i, text;
fruit = ["Apple", "Mango", "Orange", "Pear"];
text = "<ul>";
for (i = 0; i < fruit.length; i++) {
  text += "<li>" + fruit[i] + "</li>";
}
console.log(text);
fruit.push("Lemon");
console.log(fruit.toString());
console.log(fruit.join(" + "));
fruit.pop();
console.log(fruit.toString());
fruit.shift();
console.log(fruit.toString());
fruit.unshift("Banana");
console.log(fruit.toString());
fruit.splice(1,0, "Kiwi");
console.log(fruit.toString());
fruit.splice(1,2, "Melon", "Pineapple");
console.log(fruit.toString());
var f2=fruit.slice(2);
console.log(f2.toString());//***

//Array sort
var a1 = ["Banana", "Mango", "Apple", "Grape"];
console.log(a1.sort());
console.log(a1.reverse());
var n1 = [12,34,100,4,83];
console.log(n1.sort()); // Incorrect because sort by array
console.log(n1.sort(function(a,b){return a-b}));
console.log(n1.sort(function(a,b){return b-a}));
console.log(n1.sort(function(a,b){return 0.5-Math.random()})); // sort in random
var cars = [{model: "Volvo", year: 2008},
           {model: "BMW", year: 2016},
           {model: "Mini Cooper", year: 2013}];
console.log(cars.sort(function(a,b){return a.year - b.year}));
console.log(cars.sort(function(a,b){var x = a.model.toLowerCase();
  var y = b.model.toUpperCase();
  if(x<y){return -1;}
  if(x>y){return 1}
}));
function isArray(myArray){
  return myArray.constructor === Array;
}
console.log(isArray(a1));
// Bitwise Operators works in JS as well (in 32 bit)

//try ... catch ...
