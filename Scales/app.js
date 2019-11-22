const data = [100, 400, 300, 900, 850, 1000];
const data10 = [1, 10, 100, 3163, 10000, 100000];

const scaleLinear = d3
  .scaleLinear()
  .domain([d3.min(data), d3.max(data)]) //gets min and max from data
  .range([50, 500]); //sets min to 50 and max to 500 and gets formula for other conversions

const transformed = data.map(d => scaleLinear(d));

console.log(transformed);

const width = 500,
  barHeight = 20,
  margin = 1;

const svg = d3
  .select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", data.length * barHeight);

const g = svg
  .selectAll("g")
  .data(data)
  .enter()
  .append("g")
  .attr("transform", (d, i) => `translate(0, ${i * barHeight})`);

g.append("rect")
  .attr("width", d => scaleLinear(d))
  .attr("fill", "magenta")
  .attr("height", barHeight - margin);

g.append("text")
  .attr("x", d => scaleLinear(d) - String(d).length * 10)
  .attr("y", barHeight / 2)
  .attr("dy", ".35em")
  .attr("fill", "white")
  .text(d => d);
