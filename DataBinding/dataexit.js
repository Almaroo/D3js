const myData = ["Hello World"];

const p = d3
  .select("body")
  .selectAll("p")
  .data(myData)
  .text(function(d) {
    return d;
  })
  .exit() //oposite to enter, if myData length doesnt match the count of p elements it removes it from the DOM
  .remove(); //same
