({
	init : function(component, event, helper) {
		var data = [40, 60];

        var width = 960,
            height = 500,
            radius = Math.min(width, height) / 2;
        
        var color = d3.scaleOrdinal()
            .range(["#c6dcff", "#0062ff"]);
        
        var arc = d3.arc()
            .outerRadius(radius - 10)
            .innerRadius(150);
        
        var labelArc = d3.arc()
            .outerRadius(radius - 40)
            .innerRadius(radius - 40);
        
        var pie = d3.pie()
            .sort(null)
            .value(function(d) { return d; });
        
        var svg = d3.select(document.getElementById("chart")).append("svg")
            .attr("width", width)
            .attr("height", height)
          .append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
        
          var g = svg.selectAll(".arc")
              .data(pie(data))
            .enter().append("g")
              .attr("class", "arc");
        
          g.append("path")
              .attr("d", arc)
              .style("fill", function(d) { return color(d.data); });
        
          g.append("text")
              .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
              .attr("dy", ".35em")
              .text(function(d) { return d.data; });
            }
})