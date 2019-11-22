const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

const tr = d3
  .select("body")
  .append("table")
  .selectAll("tr")
  .data(matrix)
  .enter()
  .append("tr");

console.log(tr);

//tr returns array of all tr elements
const td = tr
  .selectAll("td")
  .data(function(d) {
    //joins each array row to each tr element
    console.log(d);
    return d;
  })
  .enter() //creates placeholders for td elements
  .append("td") //adds missing td elements
  .text(function(d) {
    console.log(d);
    return d;
  });
