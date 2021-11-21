import React from "react";
import { Button } from "react-bootstrap";
import placeholder from "./crop_families/placeholder.png";
import images from "./images";
import ImageButton from 'react-image-button';
import image_test from './../crop_families/miscellaneous.png'

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
	};

	return (
		<div style={stylesPadding}>
			<img src={image_test}/>
			<Button type='image' src={image_test}>
				{image.title}
			</Button>
		</div>
	);
}

