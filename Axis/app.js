const width = 500,
  height = 500;

const data = [10, 15, 20, 25, 30];

const svg = d3
  .select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

const xscale = d3
  .scaleLinear()
  .domain([0, d3.max(data)])
  .range([0, width - 100]);

const yscale = d3
  .scaleLinear()
  .domain([0, d3.max(data)])
  .range([height / 2, 0]);

const x_axis = d3.axisBottom().scale(xscale);
const y_axis = d3.axisLeft().scale(yscale);

svg
  .append("g")
  .attr("transform", `translate(50, 10)`)
  .call(y_axis);

svg
  .append("g")
  .attr("transform", `translate(50, ${height / 2 + 10})`)
  .call(x_axis);
