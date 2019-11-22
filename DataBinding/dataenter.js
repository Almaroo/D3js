const testData = ["Hello World"];

//select() -> binds data one-on-one with DOM elements

/*const p = d3
  .select("body") //selects body element
  .selectAll("p") //selects every p child from body
  .data(testData) //binds data from testData array with each of selected p elements
  .text(function(d) {
    //d-> data i -> indexer
    return d;
  });*/

testData.push("Hello D3", "Hello JavaScript");

/*const p1 = d3
  .select("body") //selects body element
  .selectAll("p") //selects every p child from body
  .data(testData) //binds data from testData array with each of selected p elements
  .text(function(d, i) {
    //d-> data i -> indexer
    return `${i} ${d}`;
  });*/

//if testData length doesnt match count of DOM elements (or viceversa) some of elements will stay empty
//then we should use enter() method

//enter() -> dynamically creates placeholders for data elements

testData.push("Hello React", "Hello CSS", "Hello HTML");

const p2 = d3
  .select("body") //selects body element
  .selectAll("p") //selects every p child from body
  .data(testData) //binds data from testData array with each of selected p elements
  .style("color", function(d) {
    if (d.length % 2 == 0) return "green";
    else return "magenta";
  })
  .text(function(d, i) {
    //d-> data i -> indexer
    return `${i} ${d}`;
  })
  .enter() //it makes virtual placeholders for extra data
  .append("p") //appends a p element for each placeholder
  .style("color", function(d) {
    //style, text and so on after append function works ONLY for newly created elements
    if (d.length % 2 == 0) return "green";
    else return "magenta";
  })
  .text(function(d, i) {
    //d-> data i -> indexer
    return `${i} ${d}`;
  });

d3.select("body")
  .select("p")
  .datum(100) //used for static data
  .text(function(d, i) {
    return d;
  });
