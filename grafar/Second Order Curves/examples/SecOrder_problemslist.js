var problems = [
	{	id: 'la-1',
		eqn: '\frac{x^2}{a^2} + \frac{y^2}{b^2} + \frac{z^2}{c^2} = 1',
		eqn_comp: [
			//0 - Compute Radius
			function(phi, xi) {
				sn_p = Math.sin(phi);
				cs_p = Math.cos(phi);
				sn_x = Math.sin(xi);
				cs_x = Math.cos(xi);
				return 1 / Math.sqrt(cs_p*cs_p*cs_x*cs_x/2.2 + sn_p*sn_p*cs_x*cs_x/1 + sn_x*sn_x/0.5);
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
		eqn: '\frac{x^2}{a^2} + \frac{y^2}{b^2} - \frac{z^2}{c^2} = 1',
		eqn_comp: [
			//0 - Compute Radius
			function(phi, xi) {
				sn_p = Math.sin(phi);
				cs_p = Math.cos(phi);
				sn_x = Math.sin(xi);
				cs_x = Math.cos(xi);
				return 1 / Math.sqrt(cs_p*cs_p*cs_x*cs_x/2.2 + sn_p*sn_p*cs_x*cs_x/1 - sn_x*sn_x/0.5);
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
		eqn: '\frac{x^2}{a^2} + \frac{y^2}{b^2} - \frac{z^2}{c^2} = -1',
		eqn_comp: [
			//0 - Compute Radius
			function(phi, xi) {
				sn_p = Math.sin(phi);
				cs_p = Math.cos(phi);
				sn_x = Math.sin(xi);
				cs_x = Math.cos(xi);
				return Math.sqrt(-1 / (cs_p*cs_p*cs_x*cs_x/2.2 + sn_p*sn_p*cs_x*cs_x/1 - sn_x*sn_x/0.5));
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
		eqn: '\frac{x^2}{a^2} + \frac{y^2}{b^2} = z',
		eqn_comp: [
			//0 - Compute Radius
			function(phi, xi) {
				return 1;
			},
			//1 - Compute x
			// Здесь лиинейная замена... Ничего не работает, возможно, явные картинки придется рисовать отдельно.
			function(r, phi, xi) {
				return 5 * (phi - Math.PI / 2) / (Math.PI / 2);
			},
			//2 - Compute y
			function(r, phi, xi) {
				return 5 * xi / (Math.PI / 2);
			},
			//3 - Compute z
			function(r, phi, xi) {
				return Math.pow(5 * (phi - Math.PI / 2) / (Math.PI / 2), 2) / 2 + Math.pow(5 * phi / (Math.PI / 2), 2) / 4
			}
		]
	}
];