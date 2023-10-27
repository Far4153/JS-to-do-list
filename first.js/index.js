function displayText() {
    var inputElement = document.getElementById("textinput");
    var text = inputElement.value;

    if (text.trim()!== ""){
        var outputElement = document.getElementById("outputText");
        var listItem=document.createElement("li");

        var uncheckedImage=document.createElement('img');
        uncheckedImage.src="images/radio-unchecked-2.png";
        listItem.appendChild(uncheckedImage);

        var textTask= document.createTextNode(text);
        listItem.appendChild(textTask);

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

