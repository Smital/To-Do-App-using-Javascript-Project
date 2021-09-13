window.onload =pageReady;

function pageReady(){
var addButton = document.getElementById('addbutton');
var todocontainer = document.getElementById('todo-container');
var inputbar = document.getElementById('inputtext');

addButton.addEventListener('click', () => {
    var paragraph = document.createElement('p');
    paragraph.classList.add('todo-styling');
    paragraph.innerText = inputbar.value;
    todocontainer.appendChild(paragraph);
    console.log(paragraph);
    inputbar.value ="";
    paragraph.addEventListener('click', () => {
        paragraph.style.textDecoration ="line-through";
    })  
    
     paragraph.addEventListener('dblclick', () => {
        todocontainer.removeChild(paragraph);
    }) 
});
    
    
}
