d3.csv("Data/employees.csv", function(d) {
  console.log(d);
});

//displays also column names
d3.csv("Data/employees.csv").then(function(data) {
  console.log(data);
});

d3.json("Data/users.json").then(data => {
  console.log(data);
  d3.select("body")
    .selectAll("p")
    .data(data)
    .enter()
    .append("p")
    .style("color", function(d) {
      if (d.location == "Kings Landing") return "red";
      else if (d.location == "The Wall") return "DeepSkyBlue";
      else return "Navy";
    })
    .text(d => {
      return `${d.name}, ${d.location}`;
    });
});
