let arr = [[-1, -1, -1], [-1, -1, -1], [-1, -1, -1]];

function countXO() {
    let count = 0;

    for (let i = 0; i < 3; i++) {
        for (let I = 0; I < 3; I++) {
            if (arr[i][I] == -1){
                count++;
            }
        }
    }
    if (count%2 == 1){
        document.getElementById("turn").innerHTML = "O's Turn"
    }
    else {
        document.getElementById("turn").innerHTML = "X's Turn"
    }

    return count;
}

function changeElement(i) {
    if (arr[Math.floor((i-1)/3)][(i-1)%3] == -1) {
        if (countXO()%2 == 1) {
            arr[Math.floor((i-1)/3)][(i-1)%3] = 1;
            document.getElementById(i.toString()).innerHTML = 'X';
        }
        else {
            arr[Math.floor((i-1)/3)][(i-1)%3] = 0;
            document.getElementById(i.toString()).innerHTML = 'O';
        }
    }
}

function winCheck() {
    if ((arr[0].every(function(num){return num == 1})) ||
        (arr[1].every(function(num){return num == 1})) ||
        (arr[2].every(function(num){return num == 1})) ||
        arr.map(elem => elem = elem[0]).every(function(num){return num == 1}) ||
        arr.map(elem => elem = elem[1]).every(function(num){return num == 1}) ||
        arr.map(elem => elem = elem[2]).every(function(num){return num == 1}) ||
        [arr[0][0], arr[1][1], arr[2][2]].every(function(num){return num == 1}) ||
        [arr[0][2], arr[1][1], arr[2][0]].every(function(num){return num == 1})){
        alert('X WINS')
        reset();
    }

    else if ((arr[0].every(function(num){return num == 0})) ||
    (arr[1].every(function(num){return num == 0})) ||
    (arr[2].every(function(num){return num == 0})) ||
    arr.map(elem => elem = elem[0]).every(function(num){return num == 0}) ||
    arr.map(elem => elem = elem[1]).every(function(num){return num == 0}) ||
    arr.map(elem => elem = elem[2]).every(function(num){return num == 0}) ||
    [arr[0][0], arr[1][1], arr[2][2]].every(function(num){return num == 0}) ||
    [arr[0][2], arr[1][1], arr[2][0]].every(function(num){return num == 0})){
    alert('O WINS')
    reset();
}

    else if(arr.reduce((bool, elem) => bool&&
    (elem.reduce((bool2, num) => bool2&&(num != -1), true)))) {
        reset();
    }
}

function reset() {
    arr = [[-1, -1, -1], [-1, -1, -1], [-1, -1, -1]];
    for (let i = 1; i <= 9; i++) {
        document.getElementById(i.toString()).innerHTML = '';
    }
}

for (let i = 1; i <= 9; i++) {
    document.getElementById(i.toString()).addEventListener("click", function(){
        changeElement(i);
        winCheck(i);
    });
}
