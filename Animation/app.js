d3.select("body")
  .append("div")
  .style("height", "300px")
  .style("width", "300px")
  .style("background-color", "magenta");

d3.select("div")
  .transition()
  .duration(2000)
  .style("background-color", "black");
