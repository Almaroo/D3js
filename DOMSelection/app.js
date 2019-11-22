// d3.select(css-selector) selects first apperance of given html element

d3.select("p").style("color", "red");

// d3.selectAll(css-selector) selects all apperances of given html element

d3.selectAll("p").style("color", "magenta");

//select nested elements and multiple styling
d3.select("tr")
  .selectAll("td")
  .style("background", "magenta")
  .style("color", "#f4f4f4");
