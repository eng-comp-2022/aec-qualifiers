import React from "react";
import { Tile } from "./tile";
import { VegiList } from "./vegi";
export function PlotLand(props) {
	// 10 x 10 array of tiles
	let land_plot = Array.from(Array(10), () => new Array(10));

	for (let i = 0; i < 8; i++) {
		for (let j = 0; j < 8; j++) {
			land_plot[i][j] = j;
		}
	}
	const listStyles = {
		float: "left",
		padding: 0,
	};

	const [veggieType, setVeggieType] = React.useState("");

	const setVeggie = (vegIndex) => {
		setVeggieType(parseInt(vegIndex));
	};

	let n = 8;

	const handleChange = (row, column, event) => {
		console.log(row);
		console.log(column);
	};

	return (
		<div>
			<ul style={listStyles}>
				{land_plot[0].map(function (item, index) {
					return (
						<Tile
							key={item}
							ind={index}
							col={0}
							place={handleChange}></Tile>
					);
				})}
			</ul>
			<ul style={listStyles}>
				{land_plot[1].map(function (item, index) {
					return (
						<Tile
							key={item}
							ind={index}
							col={1}
							place={handleChange}></Tile>
					);
				})}
			</ul>

			<ul style={listStyles}>
				{land_plot[2].map(function (item, index) {
					return (
						<Tile key={item} ind={index} col={2} place={handleChange}></Tile>
					);
				})}
			</ul>

			<ul style={listStyles}>
				{land_plot[3].map(function (item, index) {
					return (
						<Tile key={item} ind={index} col={3} place={handleChange}></Tile>
					);
				})}
			</ul>

			<ul style={listStyles}>
				{land_plot[4].map(function (item, index) {
					return (
						<Tile key={item} ind={index} col={4} place={handleChange}></Tile>
					);
				})}
			</ul>

			<ul style={listStyles}>
				{land_plot[5].map(function (item, index) {
					return (
						<Tile key={item} ind={index} col={5} place={handleChange}></Tile>
					);
				})}
			</ul>

			<ul style={listStyles}>
				{land_plot[6].map(function (item, index) {
					return (
						<Tile key={item} ind={index} col={6} place={handleChange}></Tile>
					);
				})}
			</ul>

			<ul style={listStyles}>
				{land_plot[7].map(function (item, index) {
					return (
						<Tile key={item} ind={index} col={7} place={handleChange}></Tile>
					);
				})}
			</ul>
			<VegiList setter={setVeggie}></VegiList>
		</div>
	);
}
