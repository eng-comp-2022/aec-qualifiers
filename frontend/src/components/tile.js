import React from "react";
import { Button } from "react-bootstrap";
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



    const stylesPadding = {
			padding: 0,
			width: 150,
	};

	const f = ".png"

	return (
		<div style={stylesPadding}>
			<img src={image.src}/>
			<Button type='image' src={image.src}>
				{image.title}
			</Button>
		</div>
	);
}

