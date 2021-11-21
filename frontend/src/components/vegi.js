import React from "react";

import { DropdownButton, Dropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
export function VegiList() {
	return (
		<div>
			<DropdownButton id='dropdown-basic-button' title='Dropdown button'>
				<Dropdown.Item
					href='#/action-1'
					value="0"
					style={{
						backgroundColor: "lightgreen", 
					}}>Brassicas</Dropdown.Item>
				<Dropdown.Item
					href='#/action-2'
					value="1"
					style={{
						backgroundColor: "lightblue", 
					}}>Legumes</Dropdown.Item>
				<Dropdown.Item
					href='#/action-3'
					value="2"
					style={{
						backgroundColor: "yellow", 
					}}>Solanaceae</Dropdown.Item>
				<Dropdown.Item
					href='#/action-4'
					value="3"
					style={{
						backgroundColor: "lilac", 
					}}>Alliums</Dropdown.Item>
				<Dropdown.Item
					href='#/action-5'
					value="4"
					style={{
						backgroundColor: "orange", 
					}}>Umbeliferae</Dropdown.Item>
				<Dropdown.Item
					href='#/action-6'
					value="5"
					style={{
						backgroundColor: "salmon", 
					}}>Cucurbits</Dropdown.Item>
				<Dropdown.Item
					href='#/action-7'
					value="6"
					style={{
						backgroundColor: "pink", 
					}}>Chenopodiaceae</Dropdown.Item>
				<Dropdown.Item
					href='#/action-8'
					value="7"
					style={{
						backgroundColor: "grey", 
					}}>Miscellaneous</Dropdown.Item>
			</DropdownButton>
		</div>
	);
}
