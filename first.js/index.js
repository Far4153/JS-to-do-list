function displayText() {
    var inputElement = document.getElementById("textinput");
    var text = inputElement.value;

    if (text.trim()!== ""){
        var outputElement = document.getElementById("outputText");
        var listItem=document.createElement("li");

        var uncheckedImage=document.createElement('img');
        uncheckedImage.src="images/radio-unchecked-2.png";
        
        uncheckedImage.addEventListener("click", function(){
            if (uncheckedImage.src.includes("images/radio-unchecked-2.png")){
                uncheckedImage.src="images/checked-1.png";
                
            }else{
                uncheckedImage.src= "images/radio-unchecked-2.png";
            }
        })
        
        var deleteBin= document.createElement("img");
        deleteBin.src="images/delete-bin.png";
        deleteBin.setAttribute('id', 'deletebin');

        deleteBin.addEventListener('click', function(){
            var listdel = this.parentElement;
            var todolist = document.getElementById('outputText');
            todolist.removeChild(listdel);
        })
        
        var textTask= document.createTextNode(text);
        var textDiv = document.createElement('div');
        textDiv.setAttribute('class', 'textDiv'); // Use 'textDiv' with a capital 'D'
        textDiv.appendChild(textTask);
        
        listItem.appendChild(uncheckedImage);
        listItem.appendChild(textDiv);
        listItem.appendChild(deleteBin);

        outputElement.appendChild(listItem);

        // var deleteimg=document.getElementById('deletebin');
        // deleteimg.onclick= function(){
        //     var listdel= this.parentElement;

        //     var todolist=document.getElementById('outputText');
        //     todolist.removeChild(listdel);
        // }
        
        inputElement.value="";
        updateLocalStorage();
    }

}

document.getElementById("outputText").addEventListener("click", function (event) {
    var target = event.target;
    
    // Check if the clicked element is an unchecked image
    if (target.tagName === "IMG" && target.src.includes("radio-unchecked-2.png")) {
        target.src = "images/checked-1.png";
        updateLocalStorage();
    } else if (target.tagName === "IMG" && target.src.includes("checked-1.png")) {
        target.src = "images/radio-unchecked-2.png";
        updateLocalStorage();
    }

    // Check if the clicked element is a delete bin image
    if (target.tagName === "IMG" && target.src.includes("delete-bin.png")) {
        var listdel = target.parentElement;
        var todolist = document.getElementById('outputText');
        todolist.removeChild(listdel);
        updateLocalStorage();
    }
});

function updateLocalStorage(){
    var outputElement= document.getElementById('outputText');
    localStorage.setItem('todoTasks', outputElement.innerHTML);
}

function LoadFromLocalStorage(){
    var storedtasks=localStorage.getItem('todoTasks');
    if (storedtasks){

        var outputElement = document.getElementById("outputText");
        outputElement.innerHTML=storedtasks;
    }
}


window.addEventListener("load", function () {
    LoadFromLocalStorage();
});

// Listen for the Enter key press in the input field

document.getElementById("textinput").addEventListener("keypress", function (event){
    if (event.key === "Enter"){
        displayText();
    }
});

