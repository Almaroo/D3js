const svg = d3.select("svg"),
  margin = 200,
  height = svg.attr("height") - margin,
  width = svg.attr("width") - margin;

const xScale = d3
    .scaleBand()
    .range([0, width])
    .padding(0.4),
  yScale = d3.scaleLinear().range([height, 0]);

svg
  .append("text")
  .attr("transform", "translate(100,0)")
  .attr("x", 50)
  .attr("y", 50)
  .attr("font-size", "24px")
  .attr("font-style", "Tahoma")
  .text("XYZ Foods Stock Prize");

const g = svg.append("g").attr("transform", `translate(100, 100)`);

const test = [
  { a: 1, b: 2 },
  { a: 1, b: 2 },
  { a: 1, b: 2 },
  { a: 1, b: 2 }
];

test.columns = ["year", "value"]; //doesnt affect array methods!

test.forEach((d, i) => console.log(`${i + 1}: ${d.a}, ${d.b}`));

console.log(test);

d3.csv("data/xyz.csv").then(data => {
  console.log(data); //can contain columns element
  xScale.domain(data.map(d => d.year));
  yScale.domain([0, d3.max(data.map(d => d.value))]);

  g.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(xScale))
    .append("text")
    .attr("y", height - 250)
    .attr("x", width - 100)
    .attr("text-anchor", "end")
    .attr("stroke", "black")
    .text(data.columns[0]);

  g.append("g")
    .call(
      d3
        .axisLeft(yScale)
        .tickFormat(d => `${d}`)
        .ticks(10)
    )
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", "-5.1em")
    .attr("text-anchor", "end")
    .attr("stroke", "black")
    .text(data.columns[1]);

  g.selectAll(".bar")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .on("mouseover", onMouseOver)
    .on("mouseout", onMouseOut)
    .attr("x", d => xScale(d.year))
    .attr("y", d => yScale(d.value))
    .attr("width", xScale.bandwidth())
    .attr("height", d => height - yScale(d.value));
});

function onMouseOver(d, i) {
  d3.select(this).attr("class", "highlight");
  d3.select(this)
    .transition()
    .duration(500)
    .attr("width", xScale.bandwidth() + 5)
    .attr("y", d => yScale(d.value) - 10)
    .attr("x", d => xScale(d.year) - 2.5)
    .attr("height", d => height - yScale(d.value) + 10);
  g.append("text")
    .attr("class", "val")
    .attr("x", () => xScale(d.year))
    .attr("y", () => yScale(d.value) - 15)
    .text(`$${d.value}`);
}

function onMouseOut(d, i) {
  d3.select(this).attr("class", "bar");
  d3.select(this)
    .transition()
    .duration(500)
    .attr("width", xScale.bandwidth())
    .attr("y", d => yScale(d.value))
    .attr("x", d => xScale(d.year))
    .attr("height", d => height - yScale(d.value));

  d3.selectAll(".val").remove();
}
