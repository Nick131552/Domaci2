/* CHALLENGE 1 */

function sayHowdy() {
    console.log('Howdy');
  }
  
  function testMe() {
    setTimeout(sayHowdy, 0);
    console.log('Partnah');
  }
  // After thinking it through, uncomment the following line to check your guess!
  // testMe(); // what order should these log out? Howdy or Partnah first?
  // 'Partnah' will log out first.
  
  /* CHALLENGE 2 */
  
  function delayedGreet() {
    setTimeout(function(){ console.log("welcome"); }, 3000)
  }
  // Uncomment the following line to check your work!
  // delayedGreet(); // should log (after 3 seconds): welcome
  
  
  /* CHALLENGE 3 */
  
  function helloGoodbye() {
    console.log('hello');
    setTimeout(() => console.log('good bye'), 2000);
  }
  // Uncomment the following line to check your work!
  // helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye
  
  
  /* CHALLENGE 4 */
  
  function brokenRecord() {
    setInterval(() => console.log('hi again'), 1000);
  }
  // Uncomment the following line to check your work!
  // brokenRecord(); // should log (every second): hi again
  
  
  /* CHALLENGE 5 */
  
  function limitedRepeat() {
    const intervalId = setInterval(() => console.log('hi for now'), 1000);
    setTimeout(() => clearInterval(intervalId), 5000);
  }
  // Uncomment the following line to check your work!
  // limitedRepeat(); // should log (every second, for 5 seconds): hi for now
  
  
  /* CHALLENGE 6 */
  
  function everyXsecsForYsecs(func, interval, duration) {
    const intervalId = setInterval(func, interval * 1000);
    setTimeout(() => clearInterval(intervalId), duration * 1000);
  }
  // Uncomment the following lines to check your work!
  // function theEnd() {
  //   console.log('This is the end!');
  // }
  // everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!
  
  
  /* CHALLENGE 7 */
  
  function delayCounter(target, wait) {
    let intervalId;
    let counter = 0;
    return function inner() {
      if (counter === 0) {
        counter++;
        intervalId = setInterval(() => console.log(inner()), wait);
      } else if (counter === target) {
        clearInterval(intervalId);
        return counter;
      } else {
        return counter++;
      }
    }
  }
  
  // UNCOMMENT THESE TO TEST YOUR WORK!
  // const countLogger = delayCounter(3, 1000)
  // countLogger();
  // After 1 second, log 1
  // After 2 seconds, log 2
  // After 3 seconds, log 3
  
  /* CHALLENGE 8 */
  
  function promised (val) {
    return new Promise(resolve => {
    setTimeout(() => resolve(val), 2000);
      });
  }
  
  
  
  
  // UNCOMMENT THESE TO TEST YOUR WORK!
  // const createPromise = promised('wait for it...');
  // createPromise.then((val) => console.log(val)); 
  // will log "wait for it..." to the console after 2 seconds
  
  /* CHALLENGE 9 */
  
  class SecondClock {
    constructor(cb) {
      this.cb = cb;
    }
    start(){
      let sec = 0
        this.cb = setInterval(function(){
          if (sec < 60){sec++}
          else{sec = 0}
          console.log(sec)
        }, 1000)
      }
    
    reset(){
      clearInterval(this.cb)
    }
  }
  
  // UNCOMMENT THESE TO TEST YOUR WORK!
  // const clock = new SecondClock((val) => { console.log(val) });
  // console.log("Started Clock.");
  // clock.start();
  // setTimeout(() => {
  //     clock.reset();
  //     console.log("Stopped Clock after 6 seconds.");
  // }, 6000);
  /* CHALLENGE 10 */
  
  function debounce(callback, interval) {
    let timer = false
    let Timer
    function newFunc(){
      if (timer == false){
        timer = true;
        Timer = setTimeout(() =>{timer = false}, interval)
        return callback()
      }
      else {
        clearTimeout(Timer)
        Timer = setTimeout(() =>{timer = false}, interval)
      }
    }
    return newFunc
  }
  
  // UNCOMMENT THESE TO TEST YOUR WORK!
  // function giveHi() { return 'hi'; }
  // const giveHiSometimes = debounce(giveHi, 3000);
  // console.log(giveHiSometimes()); // -> 'hi'
  // setTimeout(function() { console.log(giveHiSometimes()); }, 2000); // -> undefined
  // setTimeout(function() { console.log(giveHiSometimes()); }, 3000); // -> undefined
  // setTimeout(function() { console.log(giveHiSometimes()); }, 8000); // -> 'hi'
  
  
  