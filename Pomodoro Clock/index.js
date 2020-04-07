let pomodoroDiv = document.getElementById("pomodoroDiv");
let shortBreakDiv = document.getElementById("shortBreakDiv");
let longBreakDiv = document.getElementById("longBreakDiv");

let pomodoroTab = document.getElementById("pomodoro");
let shortBreakTab = document.getElementById("shortBreak");
let longBreakTab = document.getElementById("longBreak");

let counterOne = [Number(document.getElementById("counterOne").innerHTML.substr(0,2)),
                Number(document.getElementById("counterOne").innerHTML.substr(3,2))];

let counterTwo = [Number(document.getElementById("counterTwo").innerHTML.substr(0,2)),
                Number(document.getElementById("counterTwo").innerHTML.substr(3,2))];

let counterThree = [Number(document.getElementById("counterThree").innerHTML.substr(0,2)),
                Number(document.getElementById("counterThree").innerHTML.substr(3,2))];


function openPomodoro(){
    pomodoroTab.style.background = "rgb(0, 59, 126)";
    shortBreakTab.style.background = "rgb(0, 119, 255)";
    longBreakTab.style.background = "rgb(0, 119, 255)";


    pomodoroDiv.style.display = "block";
    shortBreakDiv.style.display = "none";
    longBreakDiv.style.display = "none";
}

function openShortBreak(){
    shortBreakTab.style.background = "rgb(0, 59, 126)";
    pomodoroTab.style.background = "rgb(0, 119, 255)";
    longBreakTab.style.background = "rgb(0, 119, 255)";


    shortBreakDiv.style.display = "block";
    longBreakDiv.style.display = "none";
    pomodoroDiv.style.display = "none";
}
function openLongBreak(){
    longBreakTab.style.background = "rgb(0, 59, 126)";
    shortBreakTab.style.background = "rgb(0, 119, 255)";
    pomodoroTab.style.background = "rgb(0, 119, 255)";


    longBreakDiv.style.display = "block";
    pomodoroDiv.style.display = "none";
    shortBreakDiv.style.display = "none";
}

let timer1;
let timer2;
let timer3;

function startTimer(elem){
    if (elem.parentNode === pomodoroDiv){
        timer1 = setInterval(function(){

            if (counterOne[1] == 0){
                if(counterOne[0] == 0){
                    clearInterval(timer1);
                    counterOne = [0, 0]
                }
                else {
                    counterOne[1] = 59;
                    counterOne[0]--;
                }
            }
            else {
                counterOne[1]--;
            }


            let str1 = counterOne[0].toString();
            let str2 = counterOne[1].toString();

            if (counterOne[0] < 10){
                str1 = "0" + str1;
            }
            if (counterOne[1] < 10){
                str2 = "0" + str2;
            }



            document.getElementById("counterOne").innerHTML = str1+":"+str2;
            pomodoroTab.innerHTML = "Pomodoro "+str1+":"+str2;
            }, 1000);
    }

    else if (elem.parentNode === shortBreakDiv){
        timer2 = setInterval(function(){

            if (counterTwo[1] == 0){
                if(counterTwo[0] == 0){
                    clearInterval(timer2);
                    counterTwo = [0, 0]
                }
                else {
                    counterTwo[1] = 59;
                    counterTwo[0]--;
                }
            }
            else {
                counterTwo[1]--;
            }


            let str1 = counterTwo[0].toString();
            let str2 = counterTwo[1].toString();

            if (counterTwo[0] < 10){
                str1 = "0" + str1;
            }
            if (counterTwo[1] < 10){
                str2 = "0" + str2;
            }



            document.getElementById("counterTwo").innerHTML = str1+":"+str2;
            shortBreakTab.innerHTML = "Short Break "+str1+":"+str2;
            }, 1000);
    }

    else if (elem.parentNode === longBreakDiv){
        timer3 = setInterval(function(){

            if (counterThree[1] == 0){
                if(counterThree[0] == 0){
                    clearInterval(timer3);
                    counterThree = [0, 0]
                }
                else {
                    counterThree[1] = 59;
                    counterThree[0]--;
                }
            }
            else {
                counterThree[1]--;
            }


            let str1 = counterThree[0].toString();
            let str2 = counterThree[1].toString();

            if (counterThree[0] < 10){
                str1 = "0" + str1;
            }
            if (counterThree[1] < 10){
                str2 = "0" + str2;
            }



            document.getElementById("counterThree").innerHTML = str1+":"+str2;
            longBreakTab.innerHTML = "Long Break "+str1+":"+str2;
            }, 1000);
    }
}


function stopTimer(elem){
    if (elem.parentNode === pomodoroDiv){
        clearInterval(timer1);
    }

    else if (elem.parentNode === shortBreakDiv){
        clearInterval(timer2);
    }

    else if (elem.parentNode === longBreakDiv){
        clearInterval(timer3);
    }
}


function resetTimer(elem){
    if (elem.parentNode === pomodoroDiv){
        clearInterval(timer1);
        counterOne = [25, 0];
        document.getElementById("counterOne").innerHTML = "25:00"
        pomodoroTab.innerHTML = "Pomodoro 25:00"
    }

    else if (elem.parentNode === shortBreakDiv){
        clearInterval(timer2);
        counterTwo = [25, 0];
        document.getElementById("counterTwo").innerHTML = "05:00"
        shortBreakTab.innerHTML = "Short Break 05:00"
    }

    else if (elem.parentNode === longBreakDiv){
        clearInterval(timer3);
        counterThree = [25, 0];
        document.getElementById("counterThree").innerHTML = "10:00"
        longBreakTab.innerHTML = "Long Break 10:00"
    }
}