// query the plot layout by a year with the rules
// take current layout and previous layout and resolve 1/0 array of placemeimpo

import { get_plot_layout, store_plot_layout } from "../src/plotLayouts.mjs";

async function check_rules(year, grid) {
  const prev = await get_plot_layout(year - 10);

  if (prev.layout) {
  }
}

// accept a 2d array of integers, from 0 to 7, with a year
// query the previous year's grid
// apply within year rules
// apply across year rules
// return 2d array of booleans
// 8 x 8
// check_rules(2011);
