window.onload = function () {
	
	var hora = 00;
	var min = 00;
	var segundos = 00;
	var tens = 00;
	var mudarHora = document.getElementById('hora');
	var mudarMin = document.getElementById('min');
	var mudarTens = document.getElementById('tens');
	var mudarSeg = document.getElementById('seg');
	var bComecar = document.getElementById('bComecar');
	var bParar = document.getElementById('bParar');
	var bReset = document.getElementById('bReset');
	var Intervalo;

	bComecar.onclick = function(){
		clearInterval(Intervalo);
		Intervalo = setInterval(comecarTimer, 10);
	}	

	bParar.onclick = function(){
		clearInterval(Intervalo);	
	}	

	bReset.onclick = function(){
		clearInterval(Intervalo);
		tens = 00;
		segundos = 00;
		min = 00;
		hora = 00;
		mudarTens.innerHTML = "0" + tens;
		mudarSeg.innerHTML = "0" + segundos;
		mudarMin.innerHTML = "0" + min;
		mudarHora.innerHTML = "0" + hora;
	}

	function comecarTimer() {
		tens++;

		if(tens <= 9){
			mudarTens.innerHTML = "0" + tens;
		}

		if(tens > 9){
			mudarTens.innerHTML = tens;
		}	

		if(tens > 99){
			console.log("segundos");
			segundos++;
			mudarSeg.innerHTML = "0" + segundos;
			tens = 0;
			mudarTens.innerHTML = "0" + 0;
		}

		if(segundos <= 9){
			mudarSeg.innerHTML = "0" + segundos;
		}		

		if(segundos > 9){
			mudarSeg.innerHTML = segundos;
		}

		if(segundos > 59){
			console.log("min");
			min++;
			mudarMin.innerHTML = "0" + min;
			segundos = 0;
			mudarSeg.innerHTML = "0" + segundos;
		}

		if(min <= 9){
			mudarMin.innerHTML = "0" + min;
		}		

		if(min > 9){			
			mudarMin.innerHTML = min;
		}

		if(min > 59){
			console.log("hora");
			hora++;
			mudarHora.innerHTML = "0" + hora;
			min = 0;
			mudarMin.innerHTML = "0" + min;
		}

		if (hora <= 9){
			mudarHora.innerHTML = "0" + hora;
		} 

		if (hora > 9){
			console.log("hora2");
			mudarHora.innerHTML = hora;		
		}			
	}
}