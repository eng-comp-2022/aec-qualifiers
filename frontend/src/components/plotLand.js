import React from "react";
import { Tile } from "./Tile";

export function PlotLand(props) {
	// 10 x 10 array of tiles
	var land_plot = [8, 8, 8, 8, 8, 8, 8, 8, 8, 8];

	return (
		<div>
			<ul>
				{land_plot.map(function (item) {
					return <Tile key={item}></Tile>;
				})}
			</ul>
		</div>
	);
}
