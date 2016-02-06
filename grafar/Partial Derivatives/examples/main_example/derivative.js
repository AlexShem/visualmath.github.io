(function() {

        
		grafar.config.debug = false;
        function getProblemById(id) {
            return problems.filter(function(pr) {
                return pr.id === id;
            })[0];
        };
		
		function vecMul(a, mul) {
			var l = a.length;
			for (i = 0; i < l; i++)
				a[i] = a[i] * mul;
			return a;
		}
		
		
		var panelMainDiv = document.getElementById('plot3d_main');
		panelMainDiv.addEventListener('mouseover', eulerface.lockScroll);
		panelMainDiv.addEventListener('mouseout', eulerface.unlockScroll);
		
		var xInpDiv = document.getElementById('x_input'),
			yInpDiv = document.getElementById('y_input');
		xInpDiv.addEventListener('change', updateProblem);
		yInpDiv.addEventListener('change', updateProblem);
		

				
		
		var pan3d_main = new grafar.Panel(document.getElementById('plot3d_main'));
		
		var main_graf = new grafar.Object().pin(pan3d_main),
		tang_point_graf = new grafar.Object().pin(pan3d_main),
		kasat_x = new grafar.Object().pin(pan3d_main),
		kasat_y = new grafar.Object().pin(pan3d_main),
		problem;
			
		var Main_point = [0, 0];
	
		pan3d_main.camera.position.set(-8, 15, 10);
		
	
		var resul=0;
		var resul_2=0;
		
		
		function updateProblem() {
			
			var xInp = parseFloat(document.getElementById('x_input').value),
				yInp = parseFloat(document.getElementById('y_input').value);
				//координаты направляющего вектора
				
			Main_point[0] = xInp;
			Main_point[1] = yInp;
			 
			problem = getProblemById(sel1.container.getAttribute('value'));
			var problemId = sel1.container.getAttribute('value');
			
			Main_point[2] = problem.eqn_comp(Main_point[0], Main_point[1]);
			
			
			hideAllBut(
                document.getElementById('solution1'), 
                document.getElementById('solution-' + problemId));
				
			//считаем производную
			document.getElementById('res').disabled = true;
            resul=problem.der[0](Main_point[0],Main_point[1]);
			document.getElementById('res').value=resul;
			document.getElementById('res2').disabled = true;
			resul_2=problem.der[1](Main_point[0],Main_point[1]);
			document.getElementById('res2').value=resul_2;
 

			//Plotting Main function
			main_graf.reset()
					.constrain({what: 'x', maxlen: 100, as: grafar.seq(-8.5, 8.5, 'x')})
					.constrain({what: 'y', maxlen: 100, as: grafar.seq(-8.5, 8.5, 'y')})
					.constrain({what: 'z', using: 'x, y', as: function (data, l) {
						var x = data.x, y = data.y;
						for (var i = 0; i < l; i++) {

							data.z[i] = problem.eqn_comp(x[i], y[i]);
						}
					 }})
					 .refresh();
			main_graf.glinstances[0].object.children[0].material.color.r = 65/255;
			main_graf.glinstances[0].object.children[0].material.color.g = 105/255;
			main_graf.glinstances[0].object.children[0].material.color.b = 255/255;
			
			
			tang_point_graf.reset()
			tang_point_graf.constrain({what: 'x, y, z', maxlen: 1, as: function(data, l) {
							var x = data.x, y = data.y, z = data.z;
							x[0] = Main_point[0];
							y[0] = Main_point[1];
							z[0] = Main_point[2];
						}})
						.refresh();
			tang_point_graf.glinstances[0].object.children[0].visible = true;
			tang_point_graf.glinstances[0].object.children[0].material.transparent = false;
			tang_point_graf.glinstances[0].object.children[0].material.size = 20;
			tang_point_graf.glinstances[0].object.children[0].material.color.r = 25/255;
			tang_point_graf.glinstances[0].object.children[0].material.color.g = 255/255;
			tang_point_graf.glinstances[0].object.children[0].material.color.b = 25/255;
				
			var Vect_x = [1, 0, resul];
			var Vect_y = [0, 1, resul_2];
			Vect_x = vecMul(Vect_x, 1/grafar.norm2(Vect_x));
			Vect_y = vecMul(Vect_y, 1/grafar.norm2(Vect_y));
			kasat_x.reset()
					.constrain({what: 't', maxlen: 1000, as: grafar.seq(-10, 10, 't')})
					.constrain({what: 'x, y, z', using: 't', as: function(data, l) {
							var t = data.t;
							for (var i = 0; i < l; i++) {
								data.x[i] = Main_point[0] + t[i] * Vect_x[0] ;
								data.y[i] = Main_point[1] + t[i] * Vect_x[1] ;
								data.z[i] = Main_point[2] + t[i] * Vect_x[2];
							}
						}})
					 .refresh();
			kasat_x.glinstances[0].object.children[0].visible = true;
			kasat_x.glinstances[0].object.children[0].material.size = 3;
			kasat_x.glinstances[0].object.children[0].material.color.r = 255/255;;
			kasat_x.glinstances[0].object.children[0].material.color.g = 255/255;
			kasat_x.glinstances[0].object.children[0].material.color.b =  55 /255;
			kasat_x.glinstances[0].object.children[0].material.transparent = false;

			kasat_y.reset()
					.constrain({what: 't', maxlen: 1000, as: grafar.seq(-10, 10, 't')})
					.constrain({what: 'x, y, z', using: 't', as: function(data, l) {
							var t = data.t;
							for (var i = 0; i < l; i++) {
								data.x[i] = Main_point[0] + t[i] * Vect_y[0] ;
								data.y[i] = Main_point[1] + t[i] * Vect_y[1] ;
								data.z[i] = Main_point[2] + t[i] * Vect_y[2];
							}
						}})
					 .refresh();
			kasat_y.glinstances[0].object.children[0].visible = true;
			kasat_y.glinstances[0].object.children[0].material.size = 3;
			kasat_y.glinstances[0].object.children[0].material.color.r = 255 / 255;
			kasat_y.glinstances[0].object.children[0].material.color.g = 128/255;
			kasat_y.glinstances[0].object.children[0].material.color.b =  0/255;
			kasat_y.glinstances[0].object.children[0].material.transparent = false;
					
}
				
		function animate() 
		{	
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