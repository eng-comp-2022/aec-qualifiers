import React from "react";
import { Tile } from "./tile";

export function PlotLand(props) {
	// 10 x 10 array of tiles
	var land_plot = [8, 8, 8, 8, 8, 8, 8, 8];
	const listStyles = {
		float: "left",
	};
	return (
		<div>
			<ul style={listStyles}>
				{land_plot.map(function (item) {
					return <Tile key={item} ind={item}></Tile>;
				})}
			</ul>
			<ul style={listStyles}>
				{land_plot.map(function (item) {
					return <Tile key={item} ind={item}></Tile>;
				})}
			</ul>

			<ul style={listStyles}>
				{land_plot.map(function (item) {
					return <Tile key={item} ind={item}></Tile>;
				})}
			</ul>

			<ul style={listStyles}>
				{land_plot.map(function (item) {
					return <Tile key={item} ind={item}></Tile>;
				})}
			</ul>

			<ul style={listStyles}>
				{land_plot.map(function (item) {
					return <Tile key={item} ind={item}></Tile>;
				})}
			</ul>

			<ul style={listStyles}>
				{land_plot.map(function (item) {
					return <Tile key={item} ind={item}></Tile>;
				})}
			</ul>

			<ul style={listStyles}>
				{land_plot.map(function (item) {
					return <Tile key={item} ind={item}></Tile>;
				})}
			</ul>

			<ul style={listStyles}>
				{land_plot.map(function (item) {
					return <Tile key={item} ind={item}></Tile>;
				})}
			</ul>
		</div>
	);
}
