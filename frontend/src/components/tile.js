import React from "react";
import { Button } from "react-bootstrap";

import images from "./images";
export function Tile(props) {
	const image = images[props.key];

	return (
		<div>
			<Button type='image' src={image}></Button>
		</div>
	);
}
