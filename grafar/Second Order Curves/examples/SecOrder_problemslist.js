var problems = [
	{	id: 'la-1',
		eqn: '\frac{x^2}{a^2} + \frac{y^2}{b^2} + \frac{z^2}{c^2} = 1', // Ellipsoid
		extra: 'no',
		eqn_comp: [
			//0 - Compute Radius
			function(phi, xi, a, b, c) {
				sn_p = Math.sin(phi);
				cs_p = Math.cos(phi);
				sn_x = Math.sin(xi);
				cs_x = Math.cos(xi);
				return 1 / Math.sqrt(cs_p*cs_p*cs_x*cs_x/ a/a + sn_p*sn_p*cs_x*cs_x/ b/b + sn_x*sn_x/ c/c);
			},
			//1 - Compute x
			function(r, phi, xi) {
				return r * Math.cos(phi) * Math.cos(xi);
			},
			//2 - Compute y
			function(r, phi, xi) {
				return r * Math.sin(phi) * Math.cos(xi);
			},
			//3 - Compute z
			function(r, phi, xi) {
				return r * Math.sin(xi);
			}
		]
	},
	{	id: 'la-2',
		eqn: '\frac{x^2}{a^2} + \frac{y^2}{b^2} - \frac{z^2}{c^2} = 1', // one-sheet hyperboloid
		extra: 'yes',
		eqn_comp: [
			//0 - Compute Radius
			function(phi, xi, a, b, c) {
				sn_p = Math.sin(phi);
				cs_p = Math.cos(phi);
				sn_x = Math.sin(xi);
				cs_x = Math.cos(xi);
				return 1 / Math.sqrt(cs_p*cs_p*cs_x*cs_x/ a/a + sn_p*sn_p*cs_x*cs_x/ b/b - sn_x*sn_x/ c/c);
			},
			//1 - Compute x
			function(r, phi, xi) {
				return r * Math.cos(phi) * Math.cos(xi);
			},
			//2 - Compute y
			function(r, phi, xi) {
				return r * Math.sin(phi) * Math.cos(xi);
			},
			//3 - Compute z
			function(r, phi, xi) {
				return r * Math.sin(xi);
			}
		]
	},
	{	id: 'la-3',
		eqn: '\frac{x^2}{a^2} + \frac{y^2}{b^2} - \frac{z^2}{c^2} = -1', // two-sheet hyperboloid
		extra: 'yes',
		eqn_comp: [
			//0 - Compute Radius
			function(phi, xi, a, b, c) {
				sn_p = Math.sin(phi);
				cs_p = Math.cos(phi);
				sn_x = Math.sin(xi);
				cs_x = Math.cos(xi);
				return Math.sqrt(-1 / (cs_p*cs_p*cs_x*cs_x/ a/a + sn_p*sn_p*cs_x*cs_x/ b/b - sn_x*sn_x/ c/c));
			},
			//1 - Compute x
			function(r, phi, xi) {
				return r * Math.cos(phi) * Math.cos(xi);
			},
			//2 - Compute y
			function(r, phi, xi) {
				return r * Math.sin(phi) * Math.cos(xi);
			},
			//3 - Compute z
			function(r, phi, xi) {
				return r * Math.sin(xi);
			}
		]
	},
	{	id: 'la-4',
		eqn: '\frac{x^2}{a^2} + \frac{y^2}{b^2} = z', // elliptic paraboloid
		extra: 'explicit',
		eqn_comp: [
			//0 - Compute z
			function(x, y, a, b) {
				return x*x/a/a + y*y/b/b;
			}
		]
	},
	{	id: 'la-5',
		eqn: '\frac{x^2}{a^2} - \frac{y^2}{b^2} = z', // hyperbolic paraboloid
		extra: 'explicit',
		eqn_comp: [
			//0 - Compute z
			function(x, y, a, b) {
				return x*x/a/a - y*y/b/b;
			}
		]
	}
];