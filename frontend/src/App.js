import "./App.css";
import ArticleList from "./components/ArticleList";
import React, { useEffect, useState } from "react";
import { VegiList } from "./components/vegi";
import { PlotLand } from "./components/plotLand";
function App() {
	return (
		<div className='App container m-4'>
			<PlotLand></PlotLand>

		</div>
	);
}

export default App;
 