// "use strict"
//
// // function Test(thing){
// //   this.test = 'test'
// //   this.things = []
// //   this.things.push(thing)
// // }
// var Test = {}
//
// Test.prototype.addThings = function(thingToAdd){
//   this.things.push(thingToAdd)
//   console.log(thingToAdd)
// }
//
// var container = Object.create(Test.prototype, {
//
// })
//
// console.log(container)

// container.addThings('bing')

// using defineProperty method


var newContainer = {}

Object.defineProperty(newContainer, "test", {
  value: 35,
  writable: true,
  enumerable: false,
  configurable: true
})

Object.defineProperty(newContainer, "zest", {
  value: 36,
  writable: true,
  enumerable: true,
  configurable: true
})

Object.defineProperty(newContainer, "best", {
  value: 37,
  writable: true,
  enumerable: true,
  configurable: false
})

delete newContainer.best

newContainer.best = 48;

// value is the property value
// writable determines whether or not it can be updated later
// enumerable determines whether or not it can be iterated through
// configurable determines whether or not the value can be deleted

// newContainer["test"] = 35

console.log(newContainer)
