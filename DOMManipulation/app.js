//DOMManipulation

//text(content) -> gets or sets text of the selected object
d3.select("p").text("Hello paragraph");
console.log(d3.select("p").text());

//append(element) -> adds and element to the end of the selected element

d3.select("body")
  .append("p")
  .text("Append new paragraph to the end of a body tag!");

//insert(element) -> inserts a new element in the selected element

d3.select("div")
  .insert("p")
  .text("Insert new paragraph inside div element");

//remove() -> remove selected element

//d3.select("p").remove(); -> will remove "Hello paragraph"

//html(content) -> get or sets inner html

d3.select("div").html("<i>Tag within inner HTML of div element</i>");
console.log(d3.select("div").html());

//attr("name", "value") -> gets or sets an atrribute of the selected element

d3.select("p").attr("class", "error");
console.log(d3.select("p").attr("class"));

//property("name", "value") -> gets or sets an atrribute of the selected element

d3.select("input").property("checked", true);
console.log(d3.select("input").property("checked"));

//style("name", "value") -> gets or sets the style of the selected element

d3.select("div").style("background-color", "#f4f4f4");
console.log(d3.select("div").style("background-color"));

//classed("css class", bool) -> gets, adds or removes a css class from the selection

d3.select("i").classed("magenta-text", true);
console.log(d3.select("i").classed("magenta-text"));
