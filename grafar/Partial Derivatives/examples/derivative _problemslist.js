var problems = [
	{	id: 'la-1',
		eqn: 'z == x+y-(x^2+y^2)^{1/2}',
		eqn_comp: function(x, y) {
			return x+y-Math.pow(Math.pow(x,2) + Math.pow(y,2),0.5);
		},
		der: [
			function(x,y) {
				return 1-x/(Math.pow(Math.pow(x,2) + Math.pow(y,2),0.5));
			},
			function(x,y) {
				return 1-y/(Math.pow(Math.pow(x,2) + Math.pow(y,2),0.5));
			}
		]
		
	},
	{	id: 'la-2',
		eqn: 'z == exp(-1/(x^2+y^2)))',
		eqn_comp: function(x, y) {
			return Math.sin(2*x-3*y);
		},
		der: [
			function(x,y) {
				return 2*Math.cos(2*x-3*y);
			},
			function(x,y) {
				return -3*Math.cos(2*x-3*y);
			}
		]
		
		
		
	},
	{	id: 'la-3',
		eqn: 'z == x*sin(y) + y*cos(x)',
		eqn_comp: function(x, y) {
			return 0.33*x * Math.sin(y) + 0.33*y * Math.cos(x);
		},
		der: [
			function(x,y) {
				return 0.33*Math.sin(y)-0.33*y*Math.sin(x);
			},
			function(x,y) {
				return 0.33*x*Math.cos(y)+0.33*Math.cos(x);
			}
		]
		
	},
	{	id: 'la-4',
		eqn: 'z == exp(-1/(x^2+y^2)))',
		eqn_comp: function(x, y) {
			return x*y*Math.pow(Math.E,x*y);
		},
		der: [
			function(x,y) {
				return x*Math.pow(Math.E,x*y)*(xy+1);
			},
			function(x,y) {
				return y*Math.pow(Math.E,x*y)*(xy+1);
			}
		]
		
	}
	
];