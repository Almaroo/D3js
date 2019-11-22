const svg = d3
  .select("body")
  .append("svg")
  .attr("height", 500)
  .attr("width", 500);

let gCrosshair = svg.append("g").attr("transform", "translate(0,0)");

gCrosshair
  .append("line")
  .attr("x1", 0)
  .attr("y1", 500)
  .attr("x2", 500)
  .attr("y2", 0)
  .attr("stroke", "red")
  .attr("stroke-width", "5px");

gCrosshair
  .append("line")
  .attr("x1", 0)
  .attr("y1", 0)
  .attr("x2", 500)
  .attr("y2", 500)
  .attr("stroke", "red")
  .attr("stroke-width", "5px");

svg
  .append("circle")
  .attr("cx", 250)
  .attr("cy", 250)
  .attr("r", 125)
  .attr("stroke", "Goldenrod")
  .attr("stroke-width", "5px")
  .attr("fill", "DarkGoldenrod");

let g = svg.append("g").attr("transform", "translate(0,0)");

g.append("ellipse")
  .attr("cx", 250)
  .attr("cy", 250)
  .attr("ry", 50)
  .attr("rx", 250)
  .attr("stroke", "magenta")
  .attr("stroke-width", "5px")
  .attr("fill", "transparent");

g.append("text")
  .attr("x", 165)
  .attr("y", 250)
  .text("SATURN HATFU")
  .attr("font-family", "Tahoma")
  .attr("font-size", "1.5rem")
  .attr("stroke", "darkred");
