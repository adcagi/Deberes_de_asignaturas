document.addEventListener("DOMContentLoaded", () => {
// En moure el ratolí en qualsevol punt de la finestra del navegador, es mostri la posició del punter respecte del navegador i 
// respecte de la pàgina.
// Per mostrar els missatges, Escriu a un element <h1> dins del DOM.

// En prémer qualsevol tecla, el missatge mostrat ha de canviar per indicar el nou esdeveniment i la informació associada.

// Afegeix la característica següent a l’script: quan es prem un botó del ratolí, el color de fons del quadre de missatge 
// ha de ser groc (#FFFFCC) i quan es prem una tecla, el color de fons ha de ser blau (#CCE6FF). En tornar a moure el ratolí, 
// el color de fons torna a ser blanc.

	let body = document.getElementById('body') as HTMLElement;
	let div = document.getElementById('info') as HTMLDivElement;

	body.addEventListener('mousemove', (e) =>{
			let x = e.clientX;
			let y = e.clientY;
			div.innerHTML = `<h1> Evento mousemove -> X: ${x}, Y: ${y} </h1>`;
			body.className = 'blanco';
	})

	body.addEventListener('click', () =>{
		body.className = 'amarillo';
		div.innerHTML = `<h1> Evento click</h1>`;
	})
		body.addEventListener('keydown', () =>{
		body.className = 'azul';
		div.innerHTML = `<h1> Evento keydown</h1>`;
	})

});
