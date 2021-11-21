import React from "react";
import { Button } from "react-bootstrap";
import images from "./images";


const styleObj = {
	backGround: "crop_families/legumes.png",
	width: "#100px",
	hight: "25px",
	paddingTop: "100px",
};
export function Tile({ ind, col, place }) {
	

	const [option, setOption] = React.useState(8);

	function setVeg() {
		fetch("https://api.npms.io/v2/search?q=react")
			.then((response) => response.json())
			.then((data) => data);
	}

	const stylesPadding = {
		padding: 0,
	};

	const f = ".png";
	const image = images[option];
	return (
		<div style={stylesPadding}>
			<Button type='submit' onClick={() => setVeg()}>
				{image.title}
			</Button>
		</div>
	);
}

