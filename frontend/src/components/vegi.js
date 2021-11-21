import React from "react";

import { DropdownButton, Dropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
export function VegiList({ setter }) {
	return (
		<div>
			<DropdownButton
				onSelect={function (evt) {
					setter(evt);
				}}
				id='dropdown-basic-button'
				title='Dropdown button'>
				<Dropdown.Item
					eventKey='0'
					style={{
						backgroundColor: "lightgreen",
					}}>
					Brassicas
				</Dropdown.Item>
				<Dropdown.Item
					eventKey='1'
					style={{
						backgroundColor: "lightblue",
					}}>
					Legumes
				</Dropdown.Item>
				<Dropdown.Item
					eventKey='2'
					style={{
						backgroundColor: "yellow",
					}}>
					Solanaceae
				</Dropdown.Item>
				<Dropdown.Item
					eventKey='3'
					style={{
						backgroundColor: "lilac",
					}}>
					Alliums
				</Dropdown.Item>
				<Dropdown.Item
					eventKey='4'
					style={{
						backgroundColor: "orange",
					}}>
					Umbeliferae
				</Dropdown.Item>
				<Dropdown.Item
					eventKey='5'
					style={{
						backgroundColor: "salmon",
					}}>
					Cucurbits
				</Dropdown.Item>
				<Dropdown.Item
					eventKey='6'
					style={{
						backgroundColor: "pink",
					}}>
					Chenopodiaceae
				</Dropdown.Item>
				<Dropdown.Item
					eventKey='7'
					style={{
						backgroundColor: "grey",
					}}>
					Miscellaneous
				</Dropdown.Item>
			</DropdownButton>
		</div>
	);
}
