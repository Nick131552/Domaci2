var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");
var searchBox = document.getElementById("searchBox");
var searchList = searchBox.getElementsByClassName("list-group-item");
var id = -1;



form.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
filter.addEventListener("keyup", filterItems);
document.addEventListener("keydown", selectByKey);
searchBox.addEventListener("click", selectByClick);
window.addEventListener("load", checkLocalStorage, false);


function addItem(e) {
  e.preventDefault();

  var newItem = document.getElementById("item").value;


  var li = document.createElement("li");
  li.className = "list-group-item";
  li.appendChild(document.createTextNode(newItem));


  var deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  deleteBtn.appendChild(document.createTextNode("X"));


  li.appendChild(deleteBtn);
  itemList.appendChild(li);
  save();
}


function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
      save();
    }
  }
}


function filterItems(e) {
  searchBox.style.display = "block";


  if(e.keyCode===40||e.keyCode===38){
    return 0;
  }
  else if (e.keyCode===13){
    if(searchBox.getElementsByClassName("selected").length>0){
      enterSelected();
      return 0;
    }

  }
  id =-1;

    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName("li");

    searchBox.innerHTML = '';

  Array.from(items).forEach(function(item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) === 0) {
      console.log(itemName.toLowerCase().indexOf(text))
      item.style.display = "block";

      if (text){
      searchBox.innerHTML += item.outerHTML;
      searchList[searchList.length-1].removeChild(searchList[searchList.length-1].getElementsByTagName("button")[0]);
      }
      else {
        searchBox.innerHTML = "";
      }
    } else {
      item.style.display = "none";
    }
  });
}


function save(){
  localStorage.setItem("items", itemList.innerHTML);
}


function checkLocalStorage(){
  if (localStorage.getItem("items")){
    itemList.innerHTML = localStorage.getItem("items").toString();
  }
  else{
    itemList.innerHTML = '<li class="list-group-item">Item 1 <button class="btn btn-danger btn-sm float-right delete">X</button></li><li class="list-group-item">Item 2 <button class="btn btn-danger btn-sm float-right delete">X</button></li><li class="list-group-item">Item 3 <button class="btn btn-danger btn-sm float-right delete">X</button></li><li class="list-group-item">Item 4 <button class="btn btn-danger btn-sm float-right delete">X</button></li>';
}
  searchBox.innerHTML = "";
}


function selectByKey(){
    if (searchList.length===1) {
      searchList[0].classList.add("selected");
    }
    else {

    if (event.keyCode===40){
    
      id++;

      if (id<=searchList.length-1){

        if (id>0) {
          searchList[id-1].classList.remove("selected");  
        }
        searchList[id].classList.add("selected");
      }
      else {
        searchList[0].classList.add("selected");
        searchList[id-1].classList.remove("selected");
        id=0;
      }
    }

    if(event.keyCode===38){
    
      id--;
      if(id<0){
        id = searchList.length-1;
        searchList[0].classList.remove("selected");
        searchList[id].classList.add("selected");
      }else{
        searchList[id+1].classList.remove("selected");
        searchList[id].classList.add("selected");
      }
    }
  }

}


function selectByClick(){
  filter.value = event.target.innerText;
  searchBox.innerHTML=event.target.outerHTML;
  

  var items = itemList.getElementsByTagName("li");

  
  Array.from(items).forEach(function(item) {
    var itemName = item.firstChild.textContent;
    if ( event.target.innerText.toString().toLowerCase() === itemName.toLowerCase()) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}


function enterSelected(){
  filter.value=searchBox.getElementsByClassName("selected")[0].innerText;;
  searchBox.innerHTML=searchBox.getElementsByClassName("selected")[0].outerHTML;


  var items = itemList.getElementsByTagName("li");
  
  Array.from(items).forEach(function(item) {
    var itemName = item.firstChild.textContent;
    if ( filter.value.toString().toLowerCase() === itemName.toLowerCase()) {
      item.style.display = "block";
  
    } else {
      item.style.display = "none";
    }
  });
}