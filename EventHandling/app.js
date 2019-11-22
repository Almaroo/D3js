//selection.on() -> Add or remove event listeners to capture event types like click, mouseover, mouseout etc.

/*
https://github.com/d3/d3-selection/blob/master/README.md

https://www.w3schools.com/jsref/dom_obj_event.asp
*/

d3.select(".main").on("mouseover", function() {
  d3.select(this).style("background-color", "#f4f4f4");

  //d3.event -> event object to access standard event fields such as timestamp or methods like preventDefault
  console.log(d3.event);
  console.log(d3.touch());
});

d3.select(".main").on("mousemove", function() {
  //d3.mouse(constainer) -> gets the x and y coordinates of the current mouse position in the specified DOM element.
  //console.log(d3.mouse(this));

  let pos = d3.mouse(this);

  d3.select(this).style(
    "background-color",
    `hsl(${Math.max(pos[0], pos[1])}, 50%, 50%)`
  );
});

d3.select(".main").on("mouseout", function() {
  d3.select(this).style("background-color", "#333");
});
