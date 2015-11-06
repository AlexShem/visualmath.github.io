var container = new PlotContainer("plot");
var controls = new app.Controls(container.addEmptyDiv());

var plot = container.addPlot({
left: -10,
right: 10,
top: 7,
bottom: -7,
width:1000,
height: 600}
);

var func = plot.addFunc(function (x) {
	return Math.pow(x,2)-Math.pow(x,4);
});

var point=plot.addPoint(0, 0);

var func1 = plot.addFunc(function (x) {
	return Math.pow(0,2)-Math.pow(0,4) + (2*0-4*Math.pow(0,3))*(x-0);
});
func1.Colour(2);


var tdforwrite=document.getElementsByName("1");
tdforwrite[0].innerHTML = 'Тангенс угла наклона касательной: ' + Math.cos(0);

var text = "Абсцисса точки: ";

var tdforbutton=document.getElementsByName("2");
var btn=document.createElement('input');
btn.type='button';
btn.name="myName";
btn.value='Построить'
btn.onclick=drawFunc;
tdforbutton[0].appendChild(btn);

var tdforrange=document.getElementsByName("0");
var div = document.createElement("div"),
t = document.createElement("span"),
range=document.createElement("input");
div.setAttribute("class", "control");
t.innerHTML = "Абсцисса точка: 0";

range.setAttribute("type", "range");
range.setAttribute("min", -10);
range.setAttribute("max", 10);
range.setAttribute("step", 0.0001);
range.setAttribute("value", 0);
range.oninput=changeRange;
div.appendChild(range);
div.appendChild(t);
tdforrange[0].appendChild(div);

var tdforinput=document.getElementsByName("3");
var inp=document.createElement('input');
inp.name="myValue";
inp.placeholder="Введите абсциссу точки";
tdforinput[0].appendChild(inp);

function changeRange () {
	t.innerHTML=text+range.value;
	
	plot.remove(func1);
	plot.remove(point);
	
	point=plot.addPoint(range.value, Math.pow(range.value,2)-Math.pow(range.value,4));
	
	func1 = plot.addFunc(function (x) {
		return Math.pow(range.value,2)-Math.pow(range.value,4) + (2*range.value-4*Math.pow(range.value,3))*(x-range.value);
	});
	func1.Colour(2);

	tdforwrite[0].innerHTML = 'Тангенс угла наклона касательной: ' + Math.round((2*range.value-4*Math.pow(range.value,3))*10000)/10000;
}

function drawFunc(){
	
	var abs_point=parseFloat(inp.value)
	if(isNumeric(abs_point))
	{
		plot.remove(func1);
		plot.remove(point);
		
		point=plot.addPoint(abs_point, Math.pow(abs_point,2)-Math.pow(abs_point,4));
		
		func1 = plot.addFunc(function (x) {
			return Math.pow(abs_point,2)-Math.pow(abs_point,4) + (2*abs_point-4*Math.pow(abs_point,3))*(x-abs_point);
		});
		func1.Colour(2);

		tdforwrite[0].innerHTML = 'Тангенс угла наклона касательной: ' + Math.round((2*abs_point-4*Math.pow(abs_point,3))*10000)/10000;
	}
	else{
		tdforwrite[0].innerHTML = 'Кнопка нажата, но значение абсциссы точки не было введено или введено некорректно!';
	}
	
}

function isNumeric(n){
	return !isNaN(parseFloat(n))&&isFinite(n);
}

var customSelect = new eulerface.Select(document.getElementById('secSelect')),
output = document.getElementById('output'),
selectContainer = document.getElementById('secSelect');

customSelect.addOption(document.getElementById('func1'), 'F1');
customSelect.addOption(document.getElementById('func2'), 'F2');
customSelect.addOption(document.getElementById('cosinus'), 'C');
customSelect.addOption(document.getElementById('func3'), 'F3');
customSelect.addOption(document.getElementById('sinus'), 'S');
customSelect.addOption(document.getElementById('rational'), 'R');
customSelect.addOption(document.getElementById('module'), 'module');
customSelect.addOption(document.getElementById('modsin'), 'modsin');
selectContainer.addEventListener('change', Update);
function drawFunc1(){
	
	var abs_point=parseFloat(inp.value)
	if(isNumeric(abs_point))
	{
		plot.remove(func1);
		plot.remove(point);
		
		point=plot.addPoint(abs_point, Math.sin(abs_point));
		
		func1 = plot.addFunc(function (x) {
			return Math.sin(abs_point)+Math.cos(abs_point)*(x-abs_point);
		});
		func1.Colour(2);
		
		tdforwrite[0].innerHTML = 'Тангенс угла наклона касательной: ' + Math.round(Math.cos(abs_point)*10000)/10000;
	}
	else{
		tdforwrite[0].innerHTML = 'Кнопка нажата, но значение абсциссы точки не было введено или введено некорректно!';
	}
	
}
function changeRange1 () {

	t.innerHTML=text+range.value;
	
	plot.remove(func1);
	plot.remove(point);
	
	point=plot.addPoint(range.value, Math.sin(range.value));
	
	func1 = plot.addFunc(function (x) {
		return Math.sin(range.value)+Math.cos(range.value)*(x-range.value);
	});
	func1.Colour(2);

	tdforwrite[0].innerHTML = 'Тангенс угла наклона касательной: ' + Math.round(Math.cos(range.value)*10000)/10000;


}


function Update() {

	var state = selectContainer.getAttribute('value');
	switch(state)
	{
	case 'module':
		{
			plot.removeAll();
			func=plot.addFunc(function(x){
				return Math.abs(x);
			});
			
			point=plot.addPoint(1,1);
			
			func1 = plot.addFunc(function (x) {
				return x;
			});
			func1.Colour(2);
			
			tdforwrite=document.getElementsByName("1");
			tdforwrite[0].innerHTML = 'Тангенс угла наклона касательной: ' + 1;
			
			range.value=0;
			t.innerHTML = "Абсцисса точки: 0";
			
			
			btn.onclick=drawFuncM;
			range.oninput=changeRangeM;
			
			
			var flag_zero=false;
			
			function drawFuncM(){
				var abs_point=parseFloat(inp.value)
				if(isNumeric(abs_point))
				{
					if(abs_point>0)
					{
						//alert(flag_zero);
						if(flag_zero==false)
						{
							plot.remove(func1);
							plot.remove(point);

						}
						flag_zero=false;
						point=plot.addPoint(abs_point, abs_point);
						
						func1 = plot.addFunc(function (x) {
							return x;
						});
						func1.Colour(2);
						
						tdforwrite[0].innerHTML = 'Тангенс угла наклона касательной: ' + 1;
					}
					else
					{
						if(abs_point<0)
						{
							if(!flag_zero)
							{
								plot.remove(func1);
								plot.remove(point);
							}
							flag_zero=false;
							
							point=plot.addPoint(abs_point, -1*abs_point);
							
							func1 = plot.addFunc(function (x) {
								return -x;
							});
							func1.Colour(2);
							
							tdforwrite[0].innerHTML = 'Тангенс угла наклона касательной: ' + -1;
						}
						if(abs_point==0)
						{
							if(flag_zero==false)
							{
								plot.remove(func1);
								plot.remove(point);
							}
							flag_zero=true;
							tdforwrite[0].innerHTML = 'Данная функция в точке '+abs_point+' недифференцируема.';
						}	
					}				
					
					
				}
				else{
					tdforwrite[0].innerHTML = 'Кнопка нажата, но значение абсциссы точки не было введено или введено некорректно!';
				}
				
			}
			
			
			function changeRangeM(){
				t.innerHTML=text+range.value;
				if(range.value==0)
				{
					flag_zero=true;

						plot.remove(func1);
						plot.remove(point);
	
					tdforwrite[0].innerHTML = 'Данная функция в точке '+range.value+' недифференцируема.';
				}
				if(range.value<0)
				{
					if(!flag_zero)
					{
						plot.remove(func1);
						plot.remove(point);
					}	
					flag_zero=false;
					point=plot.addPoint(range.value, -1*range.value);
					
					func1 = plot.addFunc(function (x) {
						return -x;
					});
					func1.Colour(2);
					tdforwrite[0].innerHTML = 'Тангенс угла наклона касательной: ' + -1;												
				}
				if(range.value>0)
				{
					if(flag_zero==false)
					{
						plot.remove(func1);
						plot.remove(point);
					}	
					flag_zero=false;
					point=plot.addPoint(range.value, range.value);
					
					func1 = plot.addFunc(function (x) {
						return x;
					});
					func1.Colour(2);
					tdforwrite[0].innerHTML = 'Тангенс угла наклона касательной: ' + 1;							
				}
			}
			
		}
		break;
	case 'modsin':
		{
			plot.removeAll();
			func=plot.addFunc(function(x){
				return Math.abs(Math.sin(x));
			});
			
			point=plot.addPoint(1,Math.sin(1));
			
			func1 = plot.addFunc(function (x) {
				return Math.sin(1)+Math.cos(1)*(x-1);
			});
			func1.Colour(2);
			tdforwrite=document.getElementsByName("1");
			tdforwrite[0].innerHTML = 'Тангенс угла наклона касательной: ' + Math.round(Math.cos(1)*10000)/10000;
			
			range.value=0;
			t.innerHTML = "Абсцисса точки: 0";
						
			btn.onclick=drawFuncMS;
			range.oninput=changeRangeMS;
						
			var flag_zero=false;
						
			function drawFuncMS(){
				var abs_point=parseFloat(inp.value);
				if(isNumeric(abs_point))
				{				
					if(abs_point<=10&&abs_point>=-10){
						if(abs_point==0||(Math.abs(Math.PI-abs_point)<0.000093)||(Math.abs(2*Math.PI-abs_point)<0.000086)||(Math.abs(3*Math.PI-abs_point)<0.000078)
							||(Math.abs(-Math.PI-abs_point)<0.000093)||(Math.abs(-2*Math.PI-abs_point)<0.000086)||(Math.abs(-3*Math.PI-abs_point)<0.000078))
						{
							if(flag_zero==false)
							{
								plot.remove(func1);
								plot.remove(point);
							}
							flag_zero=true;
							tdforwrite[0].innerHTML = 'Данная функция в точке '+abs_point+' недифференцируема.';
						}
						
						else
						{
							if(!flag_zero)
							{
								plot.remove(func1);
								plot.remove(point);
							}
							flag_zero=false;
							
							point=plot.addPoint(abs_point, Math.abs(Math.sin(abs_point)));
							if(abs_point>0&&abs_point<Math.PI||abs_point>2*Math.PI&&abs_point<3*Math.PI||abs_point>-2*Math.PI&&abs_point<-Math.PI||abs_point>=-10&&abs_point<-3*Math.PI){
								func1 = plot.addFunc(function (x) {
									return Math.abs(Math.sin(abs_point))+Math.cos(abs_point)*(x-abs_point);
								});
								func1.Colour(2);
								tdforwrite[0].innerHTML = 'Тангенс угла наклона касательной: ' + Math.round(Math.cos(abs_point)*100000000)/100000000;
							}
							else{
								func1 = plot.addFunc(function (x) {
									return -Math.sin(abs_point)-Math.cos(abs_point)*(x-abs_point);
								});
								func1.Colour(2);	
								tdforwrite[0].innerHTML = 'Тангенс угла наклона касательной: ' + Math.round(-Math.cos(abs_point)*100000000)/100000000;
								
							}
							
							
						}				
					}
					else{
						tdforwrite[0].innerHTML = 'Введите значение от -10 до 10!';
					}
					
				}
				else{
					tdforwrite[0].innerHTML = 'Кнопка нажата, но значение абсциссы точки не было введено или введено некорректно!';
				}
				
			}
			
			
			function changeRangeMS(){
				t.innerHTML=text+range.value;
						if(range.value==0||(Math.abs(Math.PI-range.value)<0.000093)||(Math.abs(2*Math.PI-range.value)<0.000086)||(Math.abs(3*Math.PI-range.value)<0.000078)
							||(Math.abs(-Math.PI-range.value)<0.000093)||(Math.abs(-2*Math.PI-range.value)<0.000086)||(Math.abs(-3*Math.PI-range.value)<0.000078))
						{
							if(flag_zero==false)
							{
								plot.remove(func1);
								plot.remove(point);
							}
							flag_zero=true;
							tdforwrite[0].innerHTML = 'Данная функция в точке '+range.value+' недифференцируема.';
						}
						
						else
						{
							if(!flag_zero)
							{
								plot.remove(func1);
								plot.remove(point);
							}
							flag_zero=false;
							
							point=plot.addPoint(range.value, Math.abs(Math.sin(range.value)));
							if(range.value>0&&range.value<Math.PI||range.value>2*Math.PI&&range.value<3*Math.PI||range.value>-2*Math.PI&&range.value<-Math.PI||range.value>=-10&&range.value<-3*Math.PI){
								func1 = plot.addFunc(function (x) {
									return Math.abs(Math.sin(range.value))+Math.cos(range.value)*(x-range.value);
								});
								func1.Colour(2);
								tdforwrite[0].innerHTML = 'Тангенс угла наклона касательной: ' + Math.round(Math.cos(range.value)*100000000)/100000000;
							}
							else{
								func1 = plot.addFunc(function (x) {
									return -Math.sin(range.value)-Math.cos(range.value)*(x-range.value);
								});
								func1.Colour(2);
								tdforwrite[0].innerHTML = 'Тангенс угла наклона касательной: ' + Math.round(-Math.cos(range.value)*100000000)/100000000;
							}
							
							
						}
			}
			
			
		}
		break;
	case 'S':
		plot.removeAll();
		
		func = plot.addFunc(function (x) {
			return Math.sin(x);
		});
		
		point=plot.addPoint(0, 0);
		
		func1 = plot.addFunc(function (x) {
			return x;
		});
		func1.Colour(2);
		
		tdforwrite=document.getElementsByName("1");
		tdforwrite[0].innerHTML = 'Тангенс угла наклона касательной: ' + Math.cos(0);
		
		
		range.value=0;
		t.innerHTML = "Абсцисса точка: 0";
		
		btn.onclick=drawFunc1;
		range.oninput=changeRange1;
		
		break;
		
	case 'C':
		plot.removeAll();
		//range.remove();
		
		func = plot.addFunc(function (x) {
			return Math.cos(x);
		});
		
		point=plot.addPoint(0, 1);
		func1 = plot.addFunc(function (x) {
			return Math.cos(0)-Math.sin(0)*(x-0);
		});
		func1.Colour(2);
		
		var tdforwrite=document.getElementsByName("1");
		tdforwrite[0].innerHTML = 'Тангенс угла наклона касательной: ' + (-Math.sin(0));
		
		
		range.value=0;
		t.innerHTML = "Абсцисса точка: 0";
		
		btn.onclick=drawFunc2;
		range.oninput=changeRange2;
		function drawFunc2(){
			
			var abs_point=parseFloat(inp.value)
			if(isNumeric(abs_point))
			{
				plot.remove(func1);
				plot.remove(point);
				
				point=plot.addPoint(abs_point, Math.cos(abs_point));
				
				func1 = plot.addFunc(function (x) {
					return Math.cos(abs_point)-Math.sin(abs_point)*(x-abs_point);
				});
				func1.Colour(2);

				tdforwrite[0].innerHTML = 'Тангенс угла наклона касательной: ' + Math.round(-Math.sin(abs_point)*10000)/10000;
			}
			else{
				tdforwrite[0].innerHTML = 'Кнопка нажата, но значение абсциссы точки не было введено или введено некорректно!';
			}
			
		}
		function changeRange2() {

			t.innerHTML=text+range.value;
			
			plot.remove(func1);
			plot.remove(point);
			
			point=plot.addPoint(range.value, Math.cos(range.value));
			
			func1 = plot.addFunc(function (x) {
				return Math.cos(range.value)-Math.sin(range.value)*(x-range.value);
			});
			func1.Colour(2);

			

			tdforwrite[0].innerHTML = 'Тангенс угла наклона касательной: ' + Math.round(-Math.sin(range.value)*10000)/10000;


		}	
		break;
		
	case 'F1':
		plot.removeAll();
		func = plot.addFunc(function (x) {
			return Math.pow(x,2)-Math.pow(x,4);
		});
		point=plot.addPoint(0, 0);
		
		func1 = plot.addFunc(function (x) {
			return Math.pow(0,2)-Math.pow(0,4) + (2*0-4*Math.pow(0,3))*(x-0);
		});
		func1.Colour(2);
		
		var tdforwrite=document.getElementsByName("1");
		tdforwrite[0].innerHTML = 'Тангенс угла наклона касательной: ' + (2*0-4*Math.pow(0,3));

		range.value=0;
		t.innerHTML = "Абсцисса точка: 0";
		
		btn.onclick=drawFunc;
		range.oninput=changeRange;
		
		break;
		
	case 'F2':
		plot.removeAll();
		//range.remove();
		
		func = plot.addFunc(function (x) {
			return 3*Math.pow(x,4)-2*Math.pow(x,3)-10*Math.pow(x,2)+2*x-3;
		});
		point=plot.addPoint(0, -3);
		
		func1 = plot.addFunc(function (x) {
			return -3 + 2*(x-0);
		});
		func1.Colour(2);
		
		var tdforwrite=document.getElementsByName("1");
		tdforwrite[0].innerHTML = 'Тангенс угла наклона касательной: ' + 2;
		
		range.value=0;
		t.innerHTML = "Абсцисса точка: 0";
		
		btn.onclick=drawFunc4;
		range.oninput=changeRange4;
		
		function drawFunc4(){

			var abs_point=parseFloat(inp.value);
			if(isNumeric(abs_point))
			{
				plot.remove(func1);
				plot.remove(point);

				point=plot.addPoint(abs_point, 3*Math.pow(abs_point,4)-2*Math.pow(abs_point,3)-10*Math.pow(abs_point,2)+2*abs_point-3);

				func1 = plot.addFunc(function (x) {
					return 3*Math.pow(abs_point,4)-2*Math.pow(abs_point,3)-10*Math.pow(abs_point,2)+2*abs_point-3 + (12*Math.pow(abs_point,3)-6*Math.pow(abs_point,2)-20*abs_point+2)*(x-abs_point);
				});
				func1.Colour(2);
				
				tdforwrite[0].innerHTML = 'Тангенс угла наклона касательной: ' + Math.round((12*Math.pow(abs_point,3)-6*Math.pow(abs_point,2)-20*abs_point+2)*10000)/10000;
			}
			else{
				tdforwrite[0].innerHTML = 'Кнопка нажата, но значение абсциссы точки не было введено или введено некорректно!';
			}
		}
		function changeRange4() {

			t.innerHTML=text+range.value;
			
			plot.remove(func1);
			plot.remove(point);
			
			point=plot.addPoint(range.value, 3*Math.pow(range.value,4)-2*Math.pow(range.value,3)-10*Math.pow(range.value,2)+2*range.value-3);
			func1 = plot.addFunc(function (x) {
				return 3*Math.pow(range.value,4)-2*Math.pow(range.value,3)-10*Math.pow(range.value,2)+2*range.value-3 + (12*Math.pow(range.value,3)-6*Math.pow(range.value,2)-20*range.value+2)*(x-range.value);
			});
			func1.Colour(2);
			
			tdforwrite[0].innerHTML = 'Тангенс угла наклона касательной: ' + Math.round((12*Math.pow(range.value,3)-6*Math.pow(range.value,2)-20*range.value+2)*10000)/10000;
			

		}	
		
		break;
		
		
	case 'R':
		
		plot.removeAll();
		
		
		func = plot.addFunc(function (x) {
			return (Math.pow(x,3)-91*x+90)/(Math.pow(x,2)+60);
		});
		point=plot.addPoint(0, 9/6);

		func1 = plot.addFunc(function (x) {
			return 	(Math.pow(0,3)-91*0+90)/(Math.pow(0,2)+60)	+ ((Math.pow(0,4)+271*Math.pow(0,2)-180*0-5460)/(Math.pow((Math.pow(0,2)+60),2)))*(x-0);
		});
		func1.Colour(2);
		
		var tdforwrite=document.getElementsByName("1");
		tdforwrite[0].innerHTML = 'Тангенс угла наклона касательной: ' + Math.round(((Math.pow(0,4)+271*Math.pow(0,2)-180*0-5460)/(Math.pow((Math.pow(0,2)+60),2)))*10000)/10000;
		
		range.value=0;
		t.innerHTML = "Абсцисса точка: 0";
		
		btn.onclick=drawFunc3;
		range.oninput=changeRange3;
		function drawFunc3(){

			var abs_point=parseFloat(inp.value);
			if(isNumeric(abs_point))
			{
				plot.remove(func1);
				plot.remove(point);

				point=plot.addPoint(abs_point, (Math.pow(abs_point,3)-91*abs_point+90)/(Math.pow(abs_point,2)+60));

				func1 = plot.addFunc(function (x) {
					return (Math.pow(abs_point,3)-91*abs_point+90)/(Math.pow(abs_point,2)+60)	+ ((Math.pow(abs_point,4)+271*Math.pow(abs_point,2)-180*abs_point-5460)/(Math.pow((Math.pow(abs_point,2)+60),2)))*(x-abs_point);
				});
				func1.Colour(2);
				
				tdforwrite[0].innerHTML = 'Тангенс угла наклона касательной: ' + Math.round(((Math.pow(abs_point,4)+271*Math.pow(abs_point,2)-180*abs_point-5460)/(Math.pow((Math.pow(abs_point,2)+60),2)))*10000)/10000;
			}
			else{
				tdforwrite[0].innerHTML = 'Кнопка нажата, но значение абсциссы точки не было введено или введено некорректно!';
			}
		}
		function changeRange3() {

			t.innerHTML=text+range.value;
			
			plot.remove(func1);
			plot.remove(point);
			
			point=plot.addPoint(range.value, (Math.pow(range.value,3)-91*range.value+90)/(Math.pow(range.value,2)+60));
			func1 = plot.addFunc(function (x) {
				return (Math.pow(range.value,3)-91*range.value+90)/(Math.pow(range.value,2)+60)	+ ((Math.pow(range.value,4)+271*Math.pow(range.value,2)-180*range.value-5460)/(Math.pow((Math.pow(range.value,2)+60),2)))*(x-range.value);;
			});
			func1.Colour(2);
			
			tdforwrite[0].innerHTML = 'Тангенс угла наклона касательной: ' + Math.round(((Math.pow(range.value,4)+271*Math.pow(range.value,2)-180*range.value-5460)/(Math.pow((Math.pow(range.value,2)+60),2)))*10000)/10000;
			

		}	
		
		break;
		
	case 'F3':
		plot.removeAll();
		//range.remove();
		
		func = plot.addFunc(function (x) {
			return Math.pow(x,4)/4-Math.pow(x,3)/3-Math.pow(x,2);
		});
		point=plot.addPoint(0, 0);
		
		func1 = plot.addFunc(function (x) {
			return 0
		});
		func1.Colour(2);
		
		var tdforwrite=document.getElementsByName("1");
		tdforwrite[0].innerHTML = 'Тангенс угла наклона касательной: ' + 0;
		
		range.value=0;
		t.innerHTML = "Абсцисса точка: 0";
		btn.onclick=drawFunc5;
		range.oninput=changeRange5;
		
		function drawFunc5(){

			var abs_point=parseFloat(inp.value);
			if(isNumeric(abs_point))
			{
				plot.remove(func1);
				plot.remove(point);

				point=plot.addPoint(abs_point, Math.pow(abs_point,4)/4-Math.pow(abs_point,3)/3-Math.pow(abs_point,2));

				func1 = plot.addFunc(function (x) {
					return Math.pow(abs_point,4)/4-Math.pow(abs_point,3)/3-Math.pow(abs_point,2) + (Math.pow(abs_point,3)-Math.pow(abs_point,2)-2*abs_point)*(x-abs_point);
				});
				func1.Colour(2);
				
				tdforwrite[0].innerHTML = 'Тангенс угла наклона касательной: ' + Math.round((Math.pow(abs_point,3)-Math.pow(abs_point,2)-2*abs_point)*10000)/10000;
			}
			else{
				tdforwrite[0].innerHTML = 'Кнопка нажата, но значение абсциссы точки не было введено или введено некорректно!';
			}
		}
		function changeRange5() {

			t.innerHTML=text+range.value;
			
			plot.remove(func1);
			plot.remove(point);
			
			point=plot.addPoint(range.value, Math.pow(range.value,4)/4-Math.pow(range.value,3)/3-Math.pow(range.value,2));
			func1 = plot.addFunc(function (x) {
				return Math.pow(range.value,4)/4-Math.pow(range.value,3)/3-Math.pow(range.value,2) + (Math.pow(range.value,3)-Math.pow(range.value,2)-2*range.value)*(x-range.value);
			});
			func1.Colour(2);
			
			tdforwrite[0].innerHTML = 'Тангенс угла наклона касательной: ' + Math.round((Math.pow(range.value,3)-Math.pow(range.value,2)-2*range.value)*10000)/10000;
			

		}	
		
		break;
		


	}
	
}



