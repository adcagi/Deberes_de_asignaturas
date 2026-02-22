document.addEventListener("DOMContentLoaded", () => {
// Completar el codi JavaScript proporcionat per a que s'afegeixin nous elements a la llista cada cop que es clica sobre el botó.
// Fer ús de les funcions DOM per a crear nous nodes i afegir-los a la llista existent. 
// Al igual que passa en l'exercici anterior, l'acció de clicar sobre un botó forma part dels "Eventos" de JavaScript que es 
// veuen en el següent Tema.
// En aquest exercici, sols es deu saber que al clicar sobre el botó, s'executa la funció anade().
	let element = document.getElementById('lista') as HTMLUListElement;
	let input = document.querySelector('input') as HTMLInputElement;

	input.addEventListener('click', () => {
		let texto = prompt("Añade algo a la lista: ")
		if(texto){
			let nuevoElemento =	document.createElement('li');
			nuevoElemento.innerText = texto;
			element.appendChild(nuevoElemento);
		}

	})
})