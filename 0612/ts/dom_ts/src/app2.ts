document.addEventListener("DOMContentLoaded", () => {
    window.onload = function() {
	// Numero de enlaces de la pagina
		let element  = document.querySelectorAll('a');
		console.log(element.length); 
	// Direccion del penultimo enlace
		let penultimo = element[element.length -2]
		console.log(penultimo.getAttribute("href"))
	// Numero de enlaces que apuntan a http://prueba
		let c =0;
		for(let i = 0; i < element.length; i++){
			if(element[i].getAttribute("href") === "http://prueba/"){
				c += 1;
			}
		}
		console.log(c)
	// Numero de enlaces del tercer parrafo
		
}
})