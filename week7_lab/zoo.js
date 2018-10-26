function Narwhal(name, age) {
  this.name = name;
  this.age = age;
  this.type = “Narwhal”;
  this.image = “noun_Narwhal.png”;
}

function Deer(name, age) {
  this.name = name;
  this.age = age;
  this.type = “Deer”;
  this.image = “noun_Deer.png”;
}

function Dog(name, age) {
  this.name = name;
  this.age = age;
  this.type = “Dog”;
  this.image = “noun_Dog.png”;
}

var animal = [new Narwahl(),new Deer(),new Dog()];
var name = ["Lucy","Judy","Pao Pao"];

function generateRandomIndex(maxIndex){
  return Math.floor(Math.random()*maxIndex);
}

function generateRandomAge(){
  var randomIndx = generateRandomIndex(5);
  return randomIndx;
}

function generateRandomAnimal(){
  var randomIndx = generateRandomIndex(animal.length);
  var randomAnimal = animal[randomIndx];
}