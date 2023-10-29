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
        deleteBin.setAttribute('id', 'deletebin')

        
        var textTask= document.createTextNode(text);
        var textDiv = document.createElement('div');
        textDiv.setAttribute('class', 'textDiv'); // Use 'textDiv' with a capital 'D'
        textDiv.appendChild(textTask);
        
        listItem.appendChild(uncheckedImage);
        listItem.appendChild(textDiv);
        listItem.appendChild(deleteBin);

        outputElement.appendChild(listItem);

        inputElement.value="";
        
    }

}

// Listen for the Enter key press in the input field

document.getElementById("textinput").addEventListener("keypress", function (event){
    if (event.key === "Enter"){
        displayText();
    }
});

