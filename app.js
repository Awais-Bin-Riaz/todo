var list = document.getElementById('list');

function addTodo() {
    var to_do = document.getElementById('todo');
    if (to_do.value.length == 0){
        alert('Please insert something')
        return false;
    }

    var li = document.createElement('li');
    var liText = document.createTextNode(to_do.value);
    li.appendChild(liText)




    var delBtn = document.createElement("img");
    delBtn.setAttribute("src", "DELE.png");

    // var delText = document.createTextNode("Delete");
    delBtn.setAttribute("class", "btn1");
    delBtn.setAttribute("onclick", "delItem(this)");
    // delBtn.appendChild(delText)

    var editBtn = document.createElement("img");
    editBtn.setAttribute("src", "edit.png");
    // var editText = document.createTextNode("EDIT");
    editBtn.setAttribute("class", "btn2");
    editBtn.setAttribute("onclick", "editItem(this)");
    // editBtn.appendChild(editText)



    li.appendChild(delBtn);
    li.appendChild(editBtn)

    list.appendChild(li);
    to_do.value = ""



}

 
function delItem(e) {
    e.parentNode.remove()
}


function editItem(e){
    var val=e.parentNode.firstChild
    var edit=prompt("enter Edited values",val)
    val.nodeValue=edit
}


function deleteAll() {
    list.innerHTML = "";
}