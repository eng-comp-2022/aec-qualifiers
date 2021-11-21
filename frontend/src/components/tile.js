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
export function Tile({ ind, col, place }) {
	const stylesPadding = {
		padding: 0,
	};

	const [option, setOption] = React.useState(8);

	function setVeg(setOption) {
		setOption(ind);
		console.log(option);
		place(ind, col);
	}

	return (
		<div style={stylesPadding}>
			<Button
				onClick={(e) => setVeg()}
				type='image'
				src={"./crop_families/miscellaneous.png"}>
				{images[option].title}
			</Button>
		</div>
	);
}

