var picts = ["taro.png", "bun2.jpg", "bunny.jpg"]
var names = ["Steve", "Finn", "Jake", "Taro", "Luna"]
var ages = [2, 3, 89, 680, 1, 0]



class Animal{

  constructor(k, name, age)
  {
    this.pic = k
    this.name = name
    this.age = age
  }
}

function random(length){
return Math.floor(Math.random()*length)}

$(document).ready(()=>{
  console.log("ready")

  var animal = new Animal(picts[random(3)], names[random(5)], ages[random(6)])
  console.log(animal)
  $("#animal-img").attr("src", animal.pic);
  $("#animal-name").html(animal.name);
  $("#animal-age").html(animal.age+" years old");
})
