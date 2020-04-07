// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');

// CHALLENGE 1
function createFunction() {
  function printHello() {
    console.log("hello");
  }
  return printHello;
}

// /*** Uncomment these to check your work! ***/
// const function1 = createFunction();
// function1(); // => should console.log('hello');


// CHALLENGE 2
function createFunctionPrinter(input) {
  function printInput() {
    console.log(input);
  }
  return printInput;
}

// /*** Uncomment these to check your work! ***/
// const printSample = createFunctionPrinter('sample');
// printSample(); // => should console.log('sample');
// const printHello = createFunctionPrinter('hello');
// printHello(); // => should console.log('hello');


// CHALLENGE 3
function outer() {
  var counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter() {
    counter++;
    console.log("counter", counter);
  }
  return incrementCounter;
}

var willCounter = outer();
var jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();


function addByX(x) {
  function add(num) {
    return x + num;
  }
  return add;
}


// /*** Uncomment these to check your work! ***/
// const addByTwo = addByX(2);
// addByTwo(1); // => should return 3
// addByTwo(2); // => should return 4
// addByTwo(3); // => should return 5

// const addByThree = addByX(3);
// addByThree(1); // => should return 4
// addByThree(2); // => should return 5

// const addByFour = addByX(4);
// addByFour(4); // => should return 8
// addByFour(5); // => should return 9


// CHALLENGE 4
function once(func) {
  let counter = 0;
  let result;
  function callCallback(num) {
    counter++;
    return counter < 2 ? (result = func(num)) : result;
  }
  return callCallback;
}

// /*** Uncomment these to check your work! ***/
// const onceFunc = once(addByTwo);
// console.log(onceFunc(4));  // => should log 6
// console.log(onceFunc(10));  // => should log 6
// console.log(onceFunc(9001));  // => should log 6


// CHALLENGE 5
function after(count, func) {
  let counter = 0;
  function executeCallback() {
    counter++;
    if (counter >= count) {
      return func();
    }
  }
  return executeCallback;
}

// /*** Uncomment these to check your work! ***/
// const called = function() { console.log('hello') };
// const afterCalled = after(3, called);
// afterCalled(); // => nothing is printed
// afterCalled(); // => nothing is printed
// afterCalled(); // => 'hello' is printed


// CHALLENGE 6
function delay(func, wait) {
  setTimeout(() => func(), wait);
}

delay(function printHi() {
  console.log("Hi");
}, 1000);


// CHALLENGE 7
function rollCall(names) {
	var counter = -1; 
  function incrementCounter() {
    counter++;
    if (names.length > counter){
    console.log(names[counter]);
    }
    else {
      console.log("Everyone accounted for")
    }
  }
  return incrementCounter;
}

// /*** Uncomment these to check your work! ***/
 //const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
 //rollCaller() // => should log 'Victoria'
 //rollCaller() // => should log 'Juan'
 //rollCaller() // => should log 'Ruth'
 //rollCaller() // => should log 'Everyone accounted for'


// CHALLENGE 8
function saveOutput(func, magicWord) {
  let obj = {}
  let password = magicWord
	function newFunc(magicWord){
    if (password == magicWord){
      return obj
    }
    else {
    obj[magicWord] = func(magicWord)
      return func(magicWord);
    }
  }
  return newFunc
}

// /*** Uncomment these to check your work! ***/
 //const multiplyBy2 = function(num) { return num * 2; };
 //const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
 //console.log(multBy2AndLog(2)); // => should log 4
 //console.log(multBy2AndLog(9)); // => should log 18
 //console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }


// CHALLENGE 9
function cycleIterator(array) {
  let index = -1;
  function iterate(){
    if (index < array.length-1){
      index++
      return array[index]
    }
    else{
      index = 0;
      return array[0]
    }
  }
	return iterate;
}

// /*** Uncomment these to check your work! ***/
 //const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
 //const getDay = cycleIterator(threeDayWeekend);
 //console.log(getDay()); // => should log 'Fri'
 //console.log(getDay()); // => should log 'Sat'
 //console.log(getDay()); // => should log 'Sun'
 //console.log(getDay()); // => should log 'Fri'


// CHALLENGE 10
function defineFirstArg(func, arg) {
	function newFunc(newArg){

    return func(arg, newArg)
  }
  return newFunc;
}

// /*** Uncomment these to check your work! ***/
//const subtract = function(big, small) { return big - small; };
//const subFrom20 = defineFirstArg(subtract, 20);
//console.log(subFrom20(5)); // => should log 15


// CHALLENGE 11
function dateStamp(func) {
  let numOfArgs = 0;
	function newFunc(...arg){
		var today = new Date();
		var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let obj = {}
    obj["date"] = date
    obj["output"] = func(...arg)
    return obj
  }
  return newFunc
}

// /*** Uncomment these to check your work! ***/
//const stampedMultBy2 = dateStamp(n => n * 2);
//console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
//console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }


// CHALLENGE 12
function censor() {
  let obj = {}
	function newFunc(...arg){
    if (arguments.length == 2){
      obj[arg[0]] = arg[1]
    }
    else if (arguments.length == 1){
      Object.keys(obj).forEach(key => {
      	arg[0] = arg[0].replace(key, obj[key]);
      })
      return arg[0];
    }
  }
  return newFunc
}

// /*** Uncomment these to check your work! ***/
//const changeScene = censor();
//changeScene('dogs', 'cats');
//changeScene('quick', 'slow');
//console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'

// CHALLENGE 13
function createSecretHolder(secret) {
	let obj = {
  Secret: secret,
  getSecret: function() {
    return this.Secret
  },
  setSecret: function(arg) {
    this.Secret = arg;
  }
}
  return obj
}

// /*** Uncomment these to check your work! ***/
// var obj = createSecretHolder(5)
// console.log(obj.getSecret()) // => returns 5
// obj.setSecret(2)
// obj.getSecret() // => returns 2


// CHALLENGE 14
function callTimes() {
	let counter = 0;
  function increaseCounter(){
    counter++
    return counter;
  }
  return increaseCounter
}

// /*** Uncomment these to check your work! ***/
// let myNewFunc1 = callTimes();
// let myNewFunc2 = callTimes();
// myNewFunc1(); // => 1
// myNewFunc1(); // => 2
// myNewFunc2(); // => 1
// myNewFunc2(); // => 2


// CHALLENGE 15
function russianRoulette(num) {
  let counter = 0;
	function newFunc(){
    if (counter < num-1){
      counter++
      return "click"
    }
    else if(counter == num-1){
      counter++
      return "bang"
    }
    else {
      return "reload to play again"
    }
  }
  return newFunc
}

// /*** Uncomment these to check your work! ***/
// const play = russianRoulette(3);
// console.log(play()); // => should log 'click'
// console.log(play()); // => should log 'click'
// console.log(play()); // => should log 'bang'
// console.log(play()); // => should log 'reload to play again'
// console.log(play()); // => should log 'reload to play again'


// CHALLENGE 16
function average() {
  let sum = 0
  let counter = 0
	function newFunc(...num){
    if (num.length === 1){
      sum += num[0]
      counter++
      return (sum/counter)
    }
    else if(num.length === 0){
      if (counter === 0){return 0}
      else {return (sum/counter)}
    }
  }
  return newFunc
}

// /*** Uncomment these to check your work! ***/
// const avgSoFar = average();
// console.log(avgSoFar()); // => should log 0
// console.log(avgSoFar(4)); // => should log 4
// console.log(avgSoFar(8)); // => should log 6
// console.log(avgSoFar()); // => should log 6
// console.log(avgSoFar(12)); // => should log 8
// console.log(avgSoFar()); // => should log 8


// CHALLENGE 17
function makeFuncTester(arrOfTests) {
  function newFunc(callback){
    let result = true
    arrOfTests.forEach(arr => {
      if (callback(arr[0]) === arr[1]){
        result = true&&result
      }
      else {
        result = false&&result
      }
    })
    return result
  }
  return newFunc
  
}

// /*** Uncomment these to check your work! ***/
// const capLastTestCases = [];
// capLastTestCases.push(['hello', 'hellO']);
// capLastTestCases.push(['goodbye', 'goodbyE']);
// capLastTestCases.push(['howdy', 'howdY']);
// const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
// const capLastAttempt1 = str => str.toUpperCase();
// const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
// console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
// console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true


// CHALLENGE 18
function makeHistory(limit) {
  let arr = []
	function newFunc(str){
    if (arr.length == limit && str != "undo"){
      arr.shift()
    }
    if(str == "undo" && arr.length != 0){
			arr.reverse()
      let tempArr = arr.filter(val => val.indexOf("undone")== -1)
      arr.reverse()
      if (tempArr.length != 0){
        function isEqual(val){
          return val == tempArr[0]
        }
        let index = arr.findIndex(isEqual)
      arr[index] = (tempArr[0].replace("done", "undone"))
      return arr[index]
      }
      else {
        arr[arr.length-1] = "nothing to undo"
        return arr[arr.length-1]
      }
      
    }
    else if (str === "undo" && arr.length === 0){
      arr.push('nothing to undo')
      return arr[arr.length-1]
    }
    else {
      arr.push(str+" done")
      return arr[arr.length-1]
    }
  }
  return newFunc 
}

// /*** Uncomment these to check your work! ***/
// const myActions = makeHistory(2);
// console.log(myActions('jump')); // => should log 'jump done'
// console.log(myActions('undo')); // => should log 'jump undone'
// console.log(myActions('walk')); // => should log 'walk done'
// console.log(myActions('code')); // => should log 'code done'
// console.log(myActions('pose')); // => should log 'pose done'
// console.log(myActions('undo')); // => should log 'pose undone'
// console.log(myActions('undo')); // => should log 'code undone'
// console.log(myActions('undo')); // => should log 'nothing to undo'


// CHALLENGE 19
function blackjack(array) {
  let cardCount = 0;
  function DEALER(num1, num2){
    let firstTurn = true
    let currentSum = 0
    let lastTurn = false
    
    function PLAYER(){
      if (firstTurn){
        firstTurn = false
        currentSum += num1+num2
        return currentSum
      }
      else if (currentSum+array[cardCount] < 21){
        cardCount++
        currentSum +=array[cardCount-1]
        return currentSum
      }
      else if(lastTurn == false){
        lastTurn = true
        cardCount++
        return "bust"
      }
      else {
        return "you are done!"
      }
    }
    return PLAYER
  }
	return DEALER
}

// /*** Uncomment these to check your work! ***/

// /*** DEALER ***/
 const deal = blackjack([2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);

// /*** PLAYER 1 ***/
// const i_like_to_live_dangerously = deal(4, 5);
// console.log(i_like_to_live_dangerously()); // => should log 9
// console.log(i_like_to_live_dangerously()); // => should log 11
// console.log(i_like_to_live_dangerously()); // => should log 17
// console.log(i_like_to_live_dangerously()); // => should log 18
// console.log(i_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
// console.log(i_like_to_live_dangerously()); // => should log 'you are done!'

// /*** BELOW LINES ARE FOR THE BONUS ***/

// /*** PLAYER 2 ***/
// const i_TOO_like_to_live_dangerously = deal(2, 2);
// console.log(i_TOO_like_to_live_dangerously()); // => should log 4
// console.log(i_TOO_like_to_live_dangerously()); // => should log 15
// console.log(i_TOO_like_to_live_dangerously()); // => should log 19
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!

// /*** PLAYER 3 ***/
// const i_ALSO_like_to_live_dangerously = deal(3, 7);
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 10
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 13
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
