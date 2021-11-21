import "./App.css";
import ArticleList from "./components/ArticleList";
import React, { useEffect, useState } from "react";
import { VegiList } from "./components/vegi";
function App() {
	return (
		<div className='App container m-4'>
			<VegiList></VegiList>
		</div>
	);
}

export default App;
 