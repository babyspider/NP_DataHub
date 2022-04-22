d3.csv("rev.csv", function(data){
	var traces = [];
	var years = [1,2,3,4,5,6];
	for(var i = 0; i< data.length; i++){
		traces.push({
			x: years,
			y: data[i],
			mode: "lines"
		});
	}
	var layout = {
		scene:{
		xaxis:{
			title: 'Year'
		},
		yaxis:{
			title: 'Revenue'
		}
	},
	autosize: true,
  margin: {
  l: 0,
  r: 0,
  b: 0,
  t: 0
  }};
	Plotly.newPlot('ensemble', traces, layout,
    {title: 'Ensemble Regressor for Revenue '});
});