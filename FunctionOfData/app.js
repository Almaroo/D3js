const data = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36
];

//rainbowish 36 numbers using D3.js
let paragraph = d3
  .select("body")
  .selectAll("p")
  .data(data)
  .text(function(d, i) {
    console.log(`d: ${d}; i: ${i}; this: ${this}`);
    return d;
  })
  .style("color", function(d, i) {
    return `hsl(${(360 / data.length) * i},50%,50%)`;
  });

let test = d3.select("body");
console.log(test);

//where:
//d -> the data element
//i -> the index element
//this -> the current DOM object

//if function(d, i){} then this -> HTMLElement
//if (d,i) => {} then this -> WindowObject

//data() -> provides data to selected elements
