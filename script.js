function callbackPromedio(a, b, c,callback){

 var suma= a+b+c;
 var promedio= suma / 3;
 return callback(promedio);
}


//ejercicio dos 

var tiempoSegundos=1;

function segundero() {
        document.getElementById("titulo").innerHTML=tiempoSegundos++;
  }

setInterval(segundero,1000);
