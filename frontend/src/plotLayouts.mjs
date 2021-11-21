import fetch from "node-fetch";

async function get_plot_layout(plot_year) {
  return await fetch(`http://localhost:8000/query_plot/${plot_year}/`, {
    methods: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((response) => {
      console.log("RESPONSE", JSON.stringify(response));
      return response;
    })
    .catch((error) => console.log(error));
}

function store_plot_layout(plot_year, width, height, layout_grid) {
  fetch(`http://localhost:8000/store_plot/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      year: plot_year,
      width: width,
      height: height,
      grid: layout_grid,
    }),
  })
    .then((response) => response)
    .then((response) => {
      console.log("STORING");
    })
    .catch((error) => console.log(error));
}

export { get_plot_layout, store_plot_layout };

store_plot_layout(2024, 4, 4, [0, 1, 2, 3, 4, 5, 3, 7, 2, 5, 8, 3, 5, 4, 8, 1]);
get_plot_layout(2024);
