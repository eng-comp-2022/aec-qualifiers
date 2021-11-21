import React from "react";
import { Button } from "react-bootstrap";
import placeholder from "./crop_families/placeholder.png";
import images from "./images";

const styleObj = {
	backGround: "crop_families/legumes.png",
	width: "#100px",
	hight: "25px",
	paddingTop: "100px",
};
export function Tile(props) {
	const image = images[props.ind];
	console.log(props.ind);
	return (
		<div>
			<Button type='image' src={"./crop_families/miscellaneous.png"}>
				{image.title}
			</Button>
		</div>
	);
}

