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