const data = [5, 10, 15];
const width = 200,
  scaleFactor = 10,
  barHeight = 50;

const graph = d3
  .select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", barHeight * data.length);

const bar = graph
  .selectAll("g")
  .data(data)
  .enter()
  .append("g")
  .attr("transform", function(d, i) {
    return `translate(0, ${i * barHeight})`;
  });

bar
  .append("rect")
  .attr("width", function(d, i) {
    return d * scaleFactor;
  })
  .attr("height", barHeight - 1);

bar
  .append("text")
  .attr("x", function(d) {
    return d * scaleFactor;
    g.append("text")
      .attr("x", (d, i) => i * 100 + 40)
      .attr("y", 105)
      .attr("stroke", "teal")
      .attr("font-size", "12px")
      .attr("ont-family", "Tahoma")
      .text(d => d);
  })
  .attr("y", barHeight / 2)
  .attr("dy", ".35em")
  .text(function(d) {
    return d;
  });

const dataCircles = [10, 15, 20, 25, 30];
const heightCirclesSVG = 500;
const widthCirclesSVG = 500;
const colorsCircles = ["#ffffcc", "#c2e699", "#78c679", "#31a354", "#006837"];

const svg = d3
  .select("body")
  .append("svg")
  .attr("height", heightCirclesSVG)
  .attr("width", widthCirclesSVG);

const g = svg
  .selectAll("g")
  .data(dataCircles)
  .enter()
  .append("g")
  .attr("transform", function(d, i) {
    return `translate(0,0)`;
  });

g.append("circle")
  .attr("cx", (d, i) => i * 100 + 50)
  .attr("cy", 100)
  .attr("r", (d, i) => d * 1.5)
  .attr("fill", (d, i) => colorsCircles[i]);

g.append("text")
  .attr("x", (d, i) => i * 100 + 40)
  .attr("y", 105)
  .attr("stroke", "teal")
  .attr("font-size", "12px")
  .attr("ont-family", "Tahoma")
  .text(d => d);
