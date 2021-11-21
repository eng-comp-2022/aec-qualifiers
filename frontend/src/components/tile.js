
export function CreateTile() {

    // Create the button
    var button = document.createElement("veg");
    button.innerHTML = "Do Something";

    // Append somewhere
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(button);

    // Add event handler
    button.addEventListener ("click", function() {
        alert("did something");
    });
	  
	return button;
}


