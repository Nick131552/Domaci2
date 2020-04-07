let boxList = document.getElementById('boxList');
boxList.addEventListener("click", deleteLI);

let boxID = 0;
let arr = [];

function getBox() {
    let boxNum = Number(document.getElementById("boxNum").value);

    for (; boxID < boxNum;) {
        addBox(boxID);
    }
    
    var remove = document.getElementById("boxNum");
    remove.parentNode.removeChild(remove);
    remove = document.getElementById("button");
    remove.parentNode.removeChild(remove);

    var button = document.createElement('button');
    var attr = document.createAttribute("onclick");
    var text = document.createTextNode('+')

    attr.value = 'addBox(boxID)';
    button.setAttributeNode(attr);
    button.append(text);
    
    document.getElementById('body').appendChild(button)
}

function deleteLI(e) {
    if (e.target.classList.contains("delete")) {
        var li = e.target.parentElement;
        boxList.removeChild(li);
        arr = arr.filter(id => id != Number(e.target.parentNode.id));
      }
      if (arr.length === 0){
        document.getElementById("body").style.display = "none";
        location.reload();
      }
      palindromeCheck()
}

function addBox(a){
    var box = document.createElement("LI");
        box.id= a.toString();

        var button = document.createElement("BUTTON");
        var text = document.createTextNode("X");

        button.append(text);
        button.className = "delete"

        var input = document.createElement("input");
        var attr = document.createAttribute("maxlength")
        attr.value= "1";

        input.setAttributeNode(attr);
        input.addEventListener("change", checkValue);

        box.appendChild(button);
        box.appendChild(input);
        document.getElementById("boxList").appendChild(box);

        arr.push(boxID);
        boxID++;
}

function checkValue(e){
    if (!e.target.value.match(/[a-z]/i)){
        e.target.value = '';
    }
    palindromeCheck()
}

function palindromeCheck(){
    let str1 = "";
    let str2 = "";
    let revArr = [...arr].reverse();

    for (let m = 0; m < arr.length; m++){
        str1 += document.getElementById((arr[m]).toString()).childNodes[1].value;
        str2 += document.getElementById((revArr[m]).toString()).childNodes[1].value;
    }
    if (str1 == str2) {
        document.getElementById("palindrome").innerHTML = "Is a Palindrome"
    }
    else {
        document.getElementById("palindrome").innerHTML = "Is not a Palindrome"
    }
}