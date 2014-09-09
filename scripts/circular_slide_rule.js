function log10(x) {
  return Math.log(x) / Math.LN10;
}

var width = 960,
    height = 600,
    radius = Math.min(width, height - 50) / 2;

var arc = d3.svg.arc()
    .outerRadius(radius - 10)
    .innerRadius(radius - 70);

var pie = d3.layout.pie()
    .sort(null)
    .value(function(d) { return 1 });

var dataToAngle = function(data) {
  return data.map(function(datum) {
    return {
      data: datum,
      startAngle: (log10(datum) - 1) * 2*Math.PI,
      endAngle: (log10(datum) - 1) * 2*Math.PI + 0.5 // TODO
    }
  });
}

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var data = [10,20,30,40,50,60,70,80,90];
var data = [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,30,35,40,45,50,55,60,70,80,90]

data.forEach(function(d) {
  d.population = +d.population;
});

var g = svg.selectAll(".arc")
    .data(dataToAngle(data))
  .enter().append("g")
    .attr("class", "arc");

g.append("path")
    .attr("d", arc);

g.append("text")
    .attr("transform", function(d) {
      return "rotate(" + (d.startAngle * 180 / Math.PI - 90) + ")"
        + "translate(" + (radius) + ",0)"
        + "rotate(90)";
    })
    .attr("dy", ".35em")
    .style("text-anchor", "middle")
    .text(function(d) { return d.data; });

var ticks = svg.selectAll(".tick")
    .data(dataToAngle(data))
  .enter().append("g")
    .attr("class", "arc");
ticks.append("line")
    .attr("x1", 0)
    .attr("y1", 0)
    .attr("x2", 10)
    .attr("y2", 0)
    .attr("transform", function(d) {
      return "rotate(" + (d.startAngle * 180 / Math.PI - 90) + ")"
          + "translate(" + (radius - 20) + ",0)"
    })
    .style("stroke", "#eee")

