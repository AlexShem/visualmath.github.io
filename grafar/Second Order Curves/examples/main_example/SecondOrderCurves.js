(function() {
		function vecSum(a, b) {
			var l = a.length;
			if (l != b.length)
				return NaN;
			var c = new Array(l);
			for (i = 0; i < l; i++)
				c[i] = a[i] + b[i];
			return c;
		}
		function vecSub(a, b) {
			var l = a.length;
			if (l != b.length)
				return Nan;
			var c = new Array(l);
			for (i = 0; i < l; i++)
				c[i] = a[i] - b[i];
			return c;
		}
		function vecMul(a, mul) {
			var l = a.length;
			for (i = 0; i < l; i++)
				a[i] = a[i] * mul;
			return a;
		}
		function vecProduct(a, b) {
			var l = a.length;
			if (b.length != l)
				return NaN;
			var c = new Array(2);
			c[0] = a[0]*b[1];
			c[1] = -a[1]*b[0];
			return c;
		}
		function vecDiv(a, div) {
			if (div == 0)
				return NaN;
			var l = a.length;
			for (i = 0; i < l; i++)
				a[i] = a[i] / div;
			return a;
		}
		function vecCopy(a) {
			var l = a.length,
				b = new Array(l);
			for (var i = 0; i < l; i++)
				b[i] = a[i];
			return b;
		}
		
		function Cartesian(a) {
			var c = [problem.eqn_comp[1](a[2], a[0], a[1]),
					problem.eqn_comp[2](a[2], a[0], a[1]),
					problem.eqn_comp[3](a[2], a[0], a[1])
			];
			return c;
		}
		
		grafar.config.debug = false;
        function getProblemById(id) {
            return problems.filter(function(pr) {
                return pr.id === id;
            })[0];
        };
		
		var panelMainDiv = document.getElementById('plot3d_main');
		panelMainDiv.addEventListener('mouseover', eulerface.lockScroll);
		panelMainDiv.addEventListener('mouseout', eulerface.unlockScroll);
		
		var pan3d_main = new grafar.Panel(document.getElementById('plot3d_main'));
		
		var main_graf = new grafar.Object().pin(pan3d_main),
			sub_graf = new grafar.Object().pin(pan3d_main),
			problem,
			a = 1.4,
			b = 1.6,
			c = 1.1;
		
		pan3d_main.camera.position.set(-4, 4, 4);
		
		function updateProblem() {
			
			problem = getProblemById(sel1.container.getAttribute('value'));
			var eqn = problem.eqn_comp;
			var problemId = sel1.container.getAttribute('value');		// <--- Don't need this
			
			//Plotting Main function
			if (problem.extra == 'yes') {	// If second suface is needed
				sub_graf.hide(false);
				main_graf.reset()
						.constrain({what: 'phi', maxlen: 50, as: grafar.seq(0, 2 * Math.PI, 'phi')})
						.constrain({what: 'xi', maxlen: 50, as: grafar.seq(-0.5 * Math.PI, 0.5 * Math.PI, 'xi')})
						.constrain({what: 'r', using: 'phi, xi', as: function (data, l) {
							var phi = data.phi, xi = data.xi, t = data.t;
							for (var i = 0; i < l; i++) {
								data.r[i] = eqn[0](phi[i], xi[i], a, b, c);
							}
						 }})
						.constrain({what: 'x, y, z', using: 'r, phi, xi', as: function(data, l) {
							 var r = data.r, phi = data.phi, xi = data.xi;
							 for (var i = 0; i < l; i++) {
								 data.x[i] = eqn[1](r[i], phi[i], xi[i]);
								 data.y[i] = eqn[2](r[i], phi[i], xi[i]);
								 data.z[i] = eqn[3](r[i], phi[i], xi[i]);
							 }
						 }})
						 .refresh();
				main_graf.colorize({using: '', as: grafar.Style.constantColor(65/255, 105/255, 255/255)});
				sub_graf.reset()
						.constrain({what: 'phi', maxlen: 50, as: grafar.seq(0, Math.PI, 'phi')})
						.constrain({what: 'xi', maxlen: 50, as: grafar.seq(-0.5 * Math.PI, 0.5 * Math.PI, 'xi')})
						.constrain({what: 'r', using: 'phi, xi', as: function (data, l) {
							var phi = data.phi, xi = data.xi, t = data.t;
							for (var i = 0; i < l; i++) {
								data.r[i] = eqn[0](phi[i], xi[i], a, b, c);
							}
						 }})
						.constrain({what: 'x, y, z', using: 'r, phi, xi', as: function(data, l) {
							 var r = data.r, phi = data.phi, xi = data.xi;
							 for (var i = 0; i < l; i++) {
								 data.x[i] = eqn[1](r[i], phi[i], xi[i]);
								 data.y[i] = eqn[2](r[i], phi[i], xi[i]);
								 data.z[i] = -eqn[3](r[i], phi[i], xi[i]);
							 }
						 }})
						 .refresh();
				sub_graf.colorize({using: '', as: grafar.Style.constantColor(65/255, 105/255, 255/255)});
			} else if (problem.extra == 'no') {
				sub_graf.hide(true);
				main_graf.reset()
						.constrain({what: 'phi', maxlen: 50, as: grafar.seq(0, 2 * Math.PI, 'phi')})
						.constrain({what: 'xi', maxlen: 50, as: grafar.seq(-0.5 * Math.PI, 0.5 * Math.PI, 'xi')})
						.constrain({what: 'r', using: 'phi, xi', as: function (data, l) {
							var phi = data.phi, xi = data.xi, t = data.t;
							for (var i = 0; i < l; i++) {
								data.r[i] = eqn[0](phi[i], xi[i], a, b, c);
							}
						 }})
						.constrain({what: 'x, y, z', using: 'r, phi, xi', as: function(data, l) {
							 var r = data.r, phi = data.phi, xi = data.xi;
							 for (var i = 0; i < l; i++) {
								 data.x[i] = eqn[1](r[i], phi[i], xi[i]);
								 data.y[i] = eqn[2](r[i], phi[i], xi[i]);
								 data.z[i] = eqn[3](r[i], phi[i], xi[i]);
							 }
						 }})
						 .refresh();
				main_graf.colorize({using: '', as: grafar.Style.constantColor(65/255, 105/255, 255/255)});
			} else if (problem.extra == 'explicit') {
				sub_graf.hide(true);
				main_graf.reset()
						.constrain({what: 'phi', maxlen: 50, as: grafar.seq(-5, 5, 'phi')})
						.constrain({what: 'xi', maxlen: 50, as: grafar.seq(-5, 5, 'xi')})
						.constrain({what: 'x, y, z', using: 'phi, xi', as: function(data, l) {
							 var r = data.r, phi = data.phi, xi = data.xi;
							 for (var i = 0; i < l; i++) {
								 data.x[i] = phi[i];
								 data.y[i] = xi[i];
								 data.z[i] = eqn[0](phi[i], xi[i], a, b);
							 }
						 }})
						 .refresh();
				main_graf.colorize({using: '', as: grafar.Style.constantColor(65/255, 105/255, 255/255)});
			}
		}
		
		hideAllBut = function(container, visible) {
            var children = container.children;
            for (var i = 0; i < children.length; i++)
              children[i].style.display = 'none';
          visible.style.display = 'block';
        };
		
		sel1 = new eulerface.Select(document.getElementById('sel1')),
		
        sel1.container.addEventListener('change', updateProblem);
		
		for (var k = 1; k <= problems.length; k++) {
			sel1.addOption(document.getElementById('opt-la-' + k), 'la-' + k);
		}
		
        MathJax.Hub.Queue(['Typeset', MathJax.Hub]);
}());