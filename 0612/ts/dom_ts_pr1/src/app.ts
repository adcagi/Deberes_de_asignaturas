document.addEventListener("DOMContentLoaded", () => {
    window.onload = function() {
	// Numero de enlaces de la pagina
		let element  = document.querySelectorAll('a');
		let parrafo  = document.querySelectorAll('p');
		console.log("Numero de enlaces de la pagina: "+element.length); 
	// Direccion del penultimo enlace
		let penultimo = element[element.length -2]
		console.log("Direccion del penultimo enlace: "+penultimo.getAttribute("href"))
	// Numero de enlaces que apuntan a http://prueba
		let c =0;
		for(let i = 0; i < element.length; i++){
			if(element[i].getAttribute("href") === "http://prueba/"){
				c += 1;
			}
		}
		console.log("Numero de enlaces que apuntan a http://prueba: " + c)
	// Numero de enlaces del tercer parrafo
	console.log("Numero de enlaces del tercer parrafo: "+parrafo[2].querySelectorAll('a').length);
}
})