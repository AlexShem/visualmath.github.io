var tdforbutton=document.getElementsByName("2"); // создаем кнопки
var btn=document.createElement('input');
btn.type='button';
btn.value='   Начать показ   '
btn.onclick=click_begin;
tdforbutton[0].appendChild(btn);

var tdforbutton1=document.getElementsByName("3"); // создаем кнопки
var btn1=document.createElement('input');
btn1.type='button';
btn1.value='   Пауза   '
btn1.onclick=pause;
tdforbutton1[0].appendChild(btn1);
var flag_pause=false;
function pause()
{
	if(flag_pause==false)
	{
		click_pause();
		btn1.value='   Продолжить   ';
	}
	else{
		click_start();
		btn1.value='   Пауза   ';
		
	}
}

var tdforbutton0=document.getElementsByName("0"); // создаем кнопки
var btn0=document.createElement('input');
/*btn0.type='button';
btn0.value='Начать сначала'
btn0.onclick=click_begin;
tdforbutton0[0].appendChild(btn0);
*/
var plot = new Plotter('plot',{
left: -10,
right: 10,
top: 7,
bottom: -7,
width:1000,
height: 600,
zoom: false});
//plot.setTop(10);
var func=plot.addFunc(function(x){
	return x*x;	
})
var flag_pause=false;
var a=-2.55;
var b=-2.65;
var shadedArea1 = draw_area_1(a,b);
var shadedArea2 = draw_area_2(a,b);
var timer;

function draw_area_1(a,b){
	
	return plot.shadedArea(function (x) {
	return x*x;
}, {
right: a,
left: b,
fill:2,
fillOpacity:0.7,
	
	//strokeWidth: 1.1,
	//color:2,
axe: 'x'
});
}
function draw_area_2(a,b){
	return plot.shadedArea(function (x) {
	return x*x;
}, {
right: a,
left: b,
fill:1,
fillOpacity:0.7,
	
	//strokeWidth: 1.1,
	//color:2,
axe: 'y'
});
}
function click_begin(){
	if(!flag_pause)
	{
		if(a>2.65)
		{
					a=-2.55;
		b=-2.65;	
		plot.remove(shadedArea1);
		plot.remove(shadedArea2);
		shadedArea1 = draw_area_1(a,b);
		shadedArea2 = draw_area_2(a,b);
		}
		else
		{
		a=-2.55;
		b=-2.65;
		}		
	}
	else{
		a=-2.55;
		b=-2.65;	
		plot.remove(shadedArea1);
		plot.remove(shadedArea2);
		shadedArea1 = draw_area_1(a,b);
		shadedArea2 = draw_area_2(a,b);
	}

}
function click_pause(){
	clearInterval(timer);
	flag_pause=true;
}
function click_start() {
	
	flag_pause=false;
	
	
	timer = setInterval(function()
	{
		
		if(a>2.65)
		{
			clearInterval(timer);
		}
		else
		{
			plot.remove(shadedArea1);
			plot.remove(shadedArea2);
			
			a=a+0.005;
			b=b+0.005;
			
			shadedArea1 = draw_area_1(a,b);
			shadedArea2 = draw_area_2(a,b);
		}	
	}, 1);


}
var customSelect = new eulerface.Select(document.getElementById('secSelect')),
output = document.getElementById('output'),
selectContainer = document.getElementById('secSelect');

customSelect.addOption(document.getElementById('x*x'), 'x*x');
customSelect.addOption(document.getElementById('x'), 'x');
customSelect.addOption(document.getElementById('sin'), 'sin');
customSelect.addOption(document.getElementById('sin/x'), 'sin/x');
customSelect.addOption(document.getElementById('ln'), 'ln');
customSelect.addOption(document.getElementById('1/x'), '1/x');
customSelect.addOption(document.getElementById('sinxx'), 'sinxx');
selectContainer.addEventListener('change', Update);

function Update() {
	clearInterval(timer);
	var state = selectContainer.getAttribute('value');
	switch(state)
	{
	case 'x*x':
	plot.removeAll();
	func=plot.addFunc(function(x){
	return x*x;	
    })
    a=-2.55;
    b=-2.65;
	flag_pause=false;
	shadedArea1 = draw_area_1(a,b);
    shadedArea2 = draw_area_2(a,b);
	btn1.value='   Пауза   ';
	btn.onclick=click_begin;
	btn1.onclick=pause;
	//btn0.onclick=click_begin;
	break;
	
	case 'sinxx':
	plot.removeAll();
	func=plot.addFunc(function(x){
	return Math.sin(x*x);	
    });
	a=-2.55;
    b=-2.65;
	flag_pause=false;
	btn1.value='   Пауза   ';
	shadedArea1 = draw6_area_1(a,b);
    shadedArea2 = draw6_area_2(a,b);
	btn.onclick=click_begin6;
	btn1.onclick=pause6;
	//btn0.onclick=click_begin6;
	break;
	
	case 'x':
	plot.removeAll();
	func=plot.addFunc(function(x){
	return x;	
    })
	b=-7;
    a=-6.9;
	flag_pause=false;
	btn1.value='   Пауза   ';
	shadedArea1 = draw1_area_1(a,b);
    shadedArea2 = draw1_area_2(a,b);
	btn.onclick=click_begin1;
	btn1.onclick=pause1;
	break;
	
	case 'sin':
	plot.removeAll();
	func=plot.addFunc(function(x){
	return Math.sin(x);
    })
	b=-10;
    a=-9.9;
	flag_pause=false;
	btn1.value='   Пауза   ';
	shadedArea1 = draw2_area_1(a,b);
    shadedArea2 = draw2_area_2(a,b);
		btn.onclick=click_begin2;
	btn1.onclick=pause2;
	break;
	
	case 'sin/x':
	plot.removeAll();
	func=plot.addFunc(function(x){
	return Math.sin(x)/x;
    })
	b=-10;
    a=-9.8;
	flag_pause=false;
	btn1.value='   Пауза   ';
	shadedArea1 = draw3_area_1(a,b);
    shadedArea2 = draw3_area_2(a,b);
	btn.onclick=click_begin3;
	btn1.onclick=pause3;
	break;
	
	case 'ln':
	plot.removeAll();
	func=plot.addFunc(function(x){
	return Math.log(x);
    },
	{
		breaks: [0],
		left:0
	})
		b=9.9;
    a=10;
	flag_pause=false;
	btn1.value='   Пауза   ';
	shadedArea1 = draw4_area_1(a,b);
    shadedArea2 = draw4_area_2(a,b);
	btn.onclick=click_begin4;
	btn1.onclick=pause4;
	break;
	
	case '1/x':
	plot.removeAll();
	func=plot.addFunc(function(x){
	return 1/x;
    },
	{
		breaks: [0],
	})
	b=-10;
    a=-9.9;
	flag_pause=false;
	btn1.value='   Пауза   ';
	shadedArea1 = draw5_area_1(a,b);
    shadedArea2 = draw5_area_2(a,b);
	btn.onclick=click_begin5;
	btn1.onclick=pause5;
	break;
	}
	
}

function draw1_area_1(a,b){
	
	return plot.shadedArea(function (x) {
	return x;
}, {
right: a,
left: b,
fill:2,
fillOpacity:0.7,
	
	//strokeWidth: 1.1,
	//color:2,
axe: 'x'
});
}
function draw1_area_2(a,b){
	return plot.shadedArea(function (x) {
	return x;
}, {
right: a,
left: b,
fill:1,
fillOpacity:0.7,
	
	//strokeWidth: 1.1,
	//color:2,
axe: 'y'
});
}
function click_start1() {
	
	flag_pause=false;
	
	
	timer = setInterval(function()
	{
		
		if(a>7)
		{
			clearInterval(timer);
		}
		else
		{
			plot.remove(shadedArea1);
			plot.remove(shadedArea2);
			
			a=a+0.005;
			b=b+0.005;
			
			shadedArea1 = draw1_area_1(a,b);
			shadedArea2 = draw1_area_2(a,b);
		}	
	}, 1);


}
function click_begin1(){
	if(!flag_pause)
	{
		if(a>7)
		{
		a=-6.9;
		b=-7;	
		plot.remove(shadedArea1);
		plot.remove(shadedArea2);
		shadedArea1 = draw1_area_1(a,b);
		shadedArea2 = draw1_area_2(a,b);
		}
		else
		{
		a=-6.9;
		b=-7;
		}		
	}
	else{
		a=-6.9;
		b=-7;	
		plot.remove(shadedArea1);
		plot.remove(shadedArea2);
		shadedArea1 = draw1_area_1(a,b);
		shadedArea2 = draw1_area_2(a,b);
	}

}
function pause1(){
	if(flag_pause==false)
	{
		click_pause();
		btn1.value='   Продолжить   ';
	}
	else{
		click_start1();
		btn1.value='   Пауза   ';
		
	}
}
function draw2_area_1(a,b){
	
	return plot.shadedArea(function (x) {
	return Math.sin(x);
}, {
right: a,
left: b,
fill:2,
fillOpacity:0.7,
	
	//strokeWidth: 1.1,
	//color:2,
axe: 'x'
});
}
function draw2_area_2(a,b){
	return plot.shadedArea(function (x) {
	return Math.sin(x);
}, {
right: a,
left: b,
fill:1,
fillOpacity:0.7,
	
	//strokeWidth: 1.1,
	//color:2,
axe: 'y'
});
}
function click_start2() {
	
	flag_pause=false;
	
	
	timer = setInterval(function()
	{
		
		if(a>10)
		{
			clearInterval(timer);
		}
		else
		{
			plot.remove(shadedArea1);
			plot.remove(shadedArea2);
			
			a=a+0.005;
			b=b+0.005;
			
			shadedArea1 = draw2_area_1(a,b);
			shadedArea2 = draw2_area_2(a,b);
		}	
	}, 1);


}
function click_begin2(){
	if(!flag_pause)
	{
		if(a>10)
		{
		a=-9.9;
		b=-10;	
		plot.remove(shadedArea1);
		plot.remove(shadedArea2);
		shadedArea1 = draw2_area_1(a,b);
		shadedArea2 = draw2_area_2(a,b);
		}
		else
		{
		a=-9.9;
		b=-10;
		}		
	}
	else{
		a=-9.9;
		b=-10;	
		plot.remove(shadedArea1);
		plot.remove(shadedArea2);
		shadedArea1 = draw2_area_1(a,b);
		shadedArea2 = draw2_area_2(a,b);
	}
}
function pause2(){
	if(flag_pause==false)
	{
		click_pause();
		btn1.value='   Продолжить   ';
	}
	else{
		click_start2();
		btn1.value='   Пауза   ';
		
	}
}
function draw3_area_1(a,b){
	
	return plot.shadedArea(function (x) {
	return Math.sin(x)/x;
}, {
right: a,
left: b,
fill:2,
fillOpacity:0.7,
	
	//strokeWidth: 1.1,
	//color:2,
axe: 'x'
});
}
function draw3_area_2(a,b){
	return plot.shadedArea(function (x) {
	return Math.sin(x)/x;
}, {
right: a,
left: b,
fill:1,
fillOpacity:0.7,
	
	//strokeWidth: 1.1,
	//color:2,
axe: 'y'
});
}
function click_start3() {
	
	flag_pause=false;
	
	
	timer = setInterval(function()
	{
		
		if(a>10)
		{
			clearInterval(timer);
		}
		else
		{
			plot.remove(shadedArea1);
			plot.remove(shadedArea2);
			
			a=a+0.005;
			b=b+0.005;
			
			shadedArea1 = draw3_area_1(a,b);
			shadedArea2 = draw3_area_2(a,b);
		}	
	}, 1);


}
function click_begin3(){
	if(!flag_pause)
	{
		if(a>10)
		{
		a=-9.8;
		b=-10;	
		plot.remove(shadedArea1);
		plot.remove(shadedArea2);
		shadedArea1 = draw3_area_1(a,b);
		shadedArea2 = draw3_area_2(a,b);
		}
		else
		{
		a=-9.8;
		b=-10;
		}		
	}
	else{
		a=-9.8;
		b=-10;	
		plot.remove(shadedArea1);
		plot.remove(shadedArea2);
		shadedArea1 = draw3_area_1(a,b);
		shadedArea2 = draw3_area_2(a,b);
	}
}
function pause3(){
	if(flag_pause==false)
	{
		click_pause();
		btn1.value='   Продолжить   ';
	}
	else{
		click_start3();
		btn1.value='   Пауза   ';
		
	}
}
function draw4_area_1(a,b){
	
	return plot.shadedArea(function (x) {
	return Math.log(x);
}, {
right: a,
left: b,
fill:2,
fillOpacity:0.7,
	
	//strokeWidth: 1.1,
	//color:2,
axe: 'x'
});
}
function draw4_area_2(a,b){
	return plot.shadedArea(function (x) {
	return Math.log(x);
}, {
right: a,
left: b,
fill:1,
fillOpacity:0.7,
	
	//strokeWidth: 1.1,
	//color:2,
axe: 'y'
});
}
function click_start4() {
	
	flag_pause=false;
	
	
	timer = setInterval(function()
	{
		
		if(b<0.005)
		{
			clearInterval(timer);
		}
		else
		{
			plot.remove(shadedArea1);
			plot.remove(shadedArea2);
			
			a=a-0.005;
			b=b-0.005;
			
			shadedArea1 = draw4_area_1(a,b);
			shadedArea2 = draw4_area_2(a,b);
		}	
	}, 1);


}
function click_begin4(){
	if(!flag_pause)
	{
		if(b<0.005)
		{
		b=9.9;
    a=10;	
		plot.remove(shadedArea1);
		plot.remove(shadedArea2);
		shadedArea1 = draw4_area_1(a,b);
		shadedArea2 = draw4_area_2(a,b);
		}
		else
		{
		b=9.9;
    a=10;
		}		
	}
	else{
		b=9.9;
    a=10;	
		plot.remove(shadedArea1);
		plot.remove(shadedArea2);
		shadedArea1 = draw4_area_1(a,b);
		shadedArea2 = draw4_area_2(a,b);
	}
}
function pause4(){
	if(flag_pause==false)
	{
		click_pause();
		btn1.value='   Продолжить   ';
	}
	else{
		click_start4();
		btn1.value='   Пауза   ';
		
	}
}
function draw5_area_1(a,b){
	
	return plot.shadedArea(function (x) {
	return 1/x;
}, {
right: a,
left: b,
fill:2,
fillOpacity:0.7,
	
	//strokeWidth: 1.1,
	//color:2,
axe: 'x'
});
}
function draw5_area_2(a,b){
	return plot.shadedArea(function (x) {
	return 1/x;
}, {
right: a,
left: b,
fill:1,
fillOpacity:0.7,
	
	//strokeWidth: 1.1,
	//color:2,
axe: 'y'
});
}
function click_start5() {
	
	flag_pause=false;
	
	
	timer = setInterval(function()
	{
		
		if(a>10)
		{
			clearInterval(timer);
		}
		else
		{
			plot.remove(shadedArea1);
			plot.remove(shadedArea2);
			
			a=a+0.005;
			b=b+0.005;
			
			shadedArea1 = draw5_area_1(a,b);
			shadedArea2 = draw5_area_2(a,b);
		}	
	}, 1);


}
function click_begin5(){
	if(!flag_pause)
	{
		if(a>10)
		{
	b=-10;
    a=-9.9;
		plot.remove(shadedArea1);
		plot.remove(shadedArea2);
		shadedArea1 = draw5_area_1(a,b);
		shadedArea2 = draw5_area_2(a,b);
		}
		else
		{
	b=-10;
    a=-9.9;
		}		
	}
	else{
	b=-10;
    a=-9.9;	
		plot.remove(shadedArea1);
		plot.remove(shadedArea2);
		shadedArea1 = draw5_area_1(a,b);
		shadedArea2 = draw5_area_2(a,b);
	}
}
function pause5(){
	if(flag_pause==false)
	{
		click_pause();
		btn1.value='   Продолжить   ';
	}
	else{
		click_start5();
		btn1.value='   Пауза   ';
		
	}
}
function draw6_area_1(a,b){
	
	return plot.shadedArea(function (x) {
	return Math.sin(x*x);
}, {
right: a,
left: b,
fill:2,
fillOpacity:0.7,
	
	//strokeWidth: 1.1,
	//color:2,
axe: 'x'
});
}
function draw6_area_2(a,b){
	return plot.shadedArea(function (x) {
	return Math.sin(x*x);
}, {
right: a,
left: b,
fill:1,
fillOpacity:0.7,
	
	//strokeWidth: 1.1,
	//color:2,
axe: 'y'
});
}
function click_start6() {
	
	flag_pause=false;
	
	
	timer = setInterval(function()
	{
		
		if(a>10)
		{
			clearInterval(timer);
		}
		else
		{
			plot.remove(shadedArea1);
			plot.remove(shadedArea2);
			
			a=a+0.005;
			b=b+0.005;
			
			shadedArea1 = draw6_area_1(a,b);
			shadedArea2 = draw6_area_2(a,b);
		}	
	}, 1);


}
function click_begin6(){
	if(!flag_pause)
	{
		if(a>10)
		{
	b=-10;
    a=-9.9;
		plot.remove(shadedArea1);
		plot.remove(shadedArea2);
		shadedArea1 = draw6_area_1(a,b);
		shadedArea2 = draw6_area_2(a,b);
		}
		else
		{
	b=-10;
    a=-9.9;
		}		
	}
	else{
	b=-10;
    a=-9.9;	
		plot.remove(shadedArea1);
		plot.remove(shadedArea2);
		shadedArea1 = draw6_area_1(a,b);
		shadedArea2 = draw6_area_2(a,b);
	}
}
function pause6(){
	if(flag_pause==false)
	{
		click_pause();
		btn1.value='   Продолжить   ';
	}
	else{
		click_start6();
		btn1.value='   Пауза   ';
		
	}
}