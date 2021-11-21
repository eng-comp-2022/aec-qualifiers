import React from "react";

import { DropdownButton, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export function VegiList() {
	return (
		<div>
			<DropdownButton id='dropdown-basic-button' title='Dropdown button'>
				<Dropdown.Item
					href='#/action-1'
					style={{
						backgroundColor: ,
					}}></Dropdown.Item>
				<Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
				<Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
			</DropdownButton>
		</div>
	);
}
