let myNodelist = document.getElementsByTagName("LI");
let counter=0
let close = document.getElementsByClassName("close");
let label = document.getElementById("leftLbl")
label.innerText=0
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement() {
  let li = document.createElement("li");
  let inputValue = document.querySelector('.inputText').value;
  let text = document.createTextNode(inputValue);
  li.appendChild(text);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";
  let span = document.createElement("SPAN")
  let closeTxt = document.createTextNode("\u00D7")
  span.className = "close"
  span.appendChild(closeTxt)
  li.appendChild(span)
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.remove();
      counter++
      label.innerText=counter
    }
  }
}
function showActive() {
  document.querySelectorAll(".checked").forEach(item =>
    item.style.display = "none")
}
function clearCompelete() {
  let listComplete= document.querySelectorAll(".checked")  
   listComplete.forEach(item =>{
     item.remove() 
    counter++ 
 } )
 label.innerText=counter

    
}
function showAll() {
  for (let index in myNodelist) {
    myNodelist[index].style.display = "block"
  }

}
function showCompelete() {
  for (let index in myNodelist) {
    if(myNodelist[index].className =="checked"){
      myNodelist[index].style.display = "block"
    }else{
      myNodelist[index].style.display = "none"
    }
   }

}





