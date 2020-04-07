let right = document.getElementById("RIGHT");
let left = document.getElementById("LEFT");
let picture = document.getElementById("PICTURE");

right.addEventListener("mousedown", rightPress);
left.addEventListener("mousedown", leftPress);
picture.addEventListener("click", reSizeBig);
picture.addEventListener("mouseenter", overPicture);
picture.addEventListener("mouseleave", function(){
    document.removeEventListener("keydown", keyCheck);
    stopMove();
});

window.addEventListener("mouseup",stopMove);

let leftArrowClick = -1;
let rightArrowClick = -1;
let mouseOver = -1;
let i = 0;
let offset = 0.72;


function overPicture(e){
    if (mouseOver == -1) {
        mouseOver = setInterval(function(){
            document.addEventListener("keydown", keyCheck);
            document.addEventListener("keyup", stopMove);
        }, 1)
    }
    else {
        clearInterval(mouseOver);
    }
}


function keyCheck(e){
    if (e.keyCode == "39"){
        if(leftArrowClick!=-1) {
            clearInterval(leftArrowClick);
            leftArrowClick=-1;
        }
        rightPress();
    }
    if (e.keyCode == '37') {
        if(rightArrowClick!=-1) {
            clearInterval(rightArrowClick);
            rightArrowClick=-1;
        }
        leftPress();
    }
}


function rightPress(e){
    if (rightArrowClick == -1) {
        rightArrowClick = setInterval(moveRight, 10)
    }
}


function moveRight(){
    if (i <= screen.width*offset){
        if (bigPicture){
            document.getElementById("button").style.margin = "0 0 0 " + (i+(screen.width*offset)/2).toString() + "px";
        }
        i += 1;
        left.style.margin = "0 0 0 "+i.toString()+'px';
    }
}


function leftPress(e){
    if (leftArrowClick == -1) {
        leftArrowClick = setInterval(moveLeft, 10)
    }
}


function moveLeft(){
    if (i >= 0){
        if (bigPicture){
            document.getElementById("button").style.margin = "0 0 0 " + (i+(screen.width*offset)/2).toString() + "px";
        }
        i -= 1;
        left.style.margin = "0 0 0 "+i.toString()+'px';
    }
}


function stopMove() {
    if(rightArrowClick!=-1) {
        clearInterval(rightArrowClick);
        rightArrowClick=-1;
      }
    if(leftArrowClick!=-1) {
        clearInterval(leftArrowClick);
        leftArrowClick=-1;
    }
    if(mouseOver!=-1) {
        clearInterval(mouseOver);
        mouseOver=-1;
    }
}

let bigPicture = false;

function reSizeBig(){
    if(bigPicture == false){
        bigPicture = true;
        offset = 0.48;

        picture.style.height = '90vh'
        picture.style.margin = '0 0 0 0'

        var button = document.createElement("BUTTON");
        var text = document.createTextNode("X");
        var attr = document.createAttribute("onclick");

        attr.value = 'reSizeSmall()';

        button.id = "button"
        button.setAttributeNode(attr);
        button.append(text);
        button.style.margin = "0 0 0 " + (i+(screen.width*offset)/2).toString() + "px";
        document.getElementById("body").append(button);
    }
}

function reSizeSmall(){
    
    if (bigPicture){
        bigPicture = false;
        offset = 0.72;

        picture.style.height = '40vh';
        picture.style.margin = '25vh 0 0 0';

        var remove = document.getElementById("button");
        remove.parentNode.removeChild(remove);
    }
}
