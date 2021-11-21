import React from "react";
import { Button } from "react-bootstrap";
import images from "./images";

export function Tile(props) {
	const image = images[props.ind];
	console.log(props.ind);
	return (
		<div>
			<Button type='image' src={"./crop_families/legumes.png"}>
				{image.title}
			</Button>
		</div>
	);
}

