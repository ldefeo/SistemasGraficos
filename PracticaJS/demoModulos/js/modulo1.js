var APP =  APP || {}; //variable global general. Se carga en esta variable
// todas las funciones del programa

// Modulo 1
(function(){
	
	var temp=1;
	var a=2;
	
	function Clasificador(){
		//
		//	
		console.log("se construyó un clasificador");
		
		this.metodo1=function(){
			return 0;
		}
		
		this.metodo2=function(){
			return 1;	
		}
	}
	
	APP.clasificador = new Clasificador();

}()); //ese doble parentesis me indica que estoy invocando a la funcion inmediatamente despues de definirla
//como la funcion esta entre parentesis globales, las variables que se definan ahi dentro van a morir cuando la funcion deje de ejecutarse