"use strict"

// function Test(thing){
//   this.test = 'test'
//   this.things = []
//   this.things.push(thing)
// }
var Test = {}

Test.prototype.addThings = function(thingToAdd){
  this.things.push(thingToAdd)
  console.log(thingToAdd)
}

var container = Object.create(Test.prototype, {

})

console.log(container)

// container.addThings('bing')
