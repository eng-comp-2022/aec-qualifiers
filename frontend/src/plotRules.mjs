// query the plot layout by a year with the rules
// take current layout and previous layout and resolve 1/0 array of placemeimpo

import { get_plot_layout, store_plot_layout } from "../src/plotLayouts.mjs";

// crop_rules = {
//     fams.brassicas.name: {
//         "follow": [fams.legumes],
//     },
//     fams.solanaceae.name: {"follow": [fams.brassicas], "avoid": [fams.brassicas]},
//     fams.umbreliferae.name: {"follow": [fams.brassicas], "no_follow": [fams.legumes]},
// }

const families = {
  brassicas: 0,
  legumes: 1,
  solanaceae: 2,
  alliums: 3,
  umbreliferae: 4,
  cucurbits: 5,
  chenopodiaceae: 6,
  miscellaneous: 7,
};

const names = [
  "brassicas",
  "legumes",
  "solanaceae",
  "alliums",
  "umbreliferae",
  "cucurbits",
  "chenopodiaceae",
  "miscellaneous",
];

async function check_rules(year, grid) {
  const valid_grid = Array(grid.length);
  valid_grid.fill(0);

  const prev = await get_plot_layout(year - 1);
  if (prev.layout && prev.rules) {
    const rules = prev.rules;
    // apply across year rules
    for (let grid_idx = 0; grid_idx < grid.length; ++grid_idx) {
      const veg_name = names[grid[grid_idx]];
      const veg_rule = rules[veg_name];
      if (veg_rule) {
        console.log(JSON.stringify(veg_rule));
      }
    }
  }
  // apply within year rules
}

// accept a 2d array of integers, from 0 to 7, with a year
// query the previous year's grid
// apply within year rules
// apply across year rules
// return 2d array of booleans
// 8 x 8
check_rules(2011, [0, 1, 2, 3, 4, 5, 6]);
