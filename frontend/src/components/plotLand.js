export function PlotLand(props) {
	// 10 x 10 array of tiles
	var land_plot = [[]];

	for (let col = 0; col < 10; col++){ 
		for (let row = 0; row < 10; row++){
			land_plot[col][row] = createTile();               
		}                 
	}
	return <div></div>;
}
