<<<<<<< HEAD
import React from "react";
import { Button } from "react-bootstrap";

import images from "./images";
export function tile(props) {
	const image = images[props.id];

	return (
		<div>
			<Button type='image' src={image}></Button>
		</div>
	);
}
=======

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


>>>>>>> 5680973be52231a85887f71033a8c103ba9efe41
