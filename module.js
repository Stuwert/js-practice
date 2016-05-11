var basicCounter = (function(){
  var counter = 0;

  return {

    incrementCounter : function(){
      return counter++
    },

    decrementCounter: function(){
      return counter--
    },

    resetCounter: function(){
      console.log('the value prior to reset is ', counter)
      counter = 0;
    },
    showCounter: function(){
      console.log('counter is ' + counter)
    }
  }


})();

console.log(basicCounter.incrementCounter());
basicCounter.showCounter();
