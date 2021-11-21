import React from "react";
import { Tile } from "./tile";

export function PlotLand(props) {

	let land_plot = Array.from(Array(10), () => new Array(10));

	for (let i=0; i < 10; i++){
		for (let j=0; j < 10; j++){
			land_plot[i][j] = 8
		}
	}

	const listStyles = {
		float: "left",
		padding: 0,
	};
	return (
		<div>
			<ul style={listStyles}>
				{land_plot[0].map(function (item) {
					return <Tile key={item} ind={item}></Tile>;
				})}
			</ul>
			<ul style={listStyles}>
				{land_plot[1].map(function (item) {
					return <Tile key={item} ind={item}></Tile>;
				})}
			</ul>

			<ul style={listStyles}>
				{land_plot[2].map(function (item) {
					return <Tile key={item} ind={item}></Tile>;
				})}
			</ul>

			<ul style={listStyles}>
				{land_plot[3].map(function (item) {
					return <Tile key={item} ind={item}></Tile>;
				})}
			</ul>

			<ul style={listStyles}>
				{land_plot[4].map(function (item) {
					return <Tile key={item} ind={item}></Tile>;
				})}
			</ul>

			<ul style={listStyles}>
				{land_plot[5].map(function (item) {
					return <Tile key={item} ind={item}></Tile>;
				})}
			</ul>

			<ul style={listStyles}>
				{land_plot[6].map(function (item) {
					return <Tile key={item} ind={item}></Tile>;
				})}
			</ul>

			<ul style={listStyles}>
				{land_plot[7].map(function (item) {
					return <Tile key={item} ind={item}></Tile>;
				})}
			</ul>
		</div>
	);
}
