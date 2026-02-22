document.addEventListener("DOMContentLoaded", () => {
// Crear un script que informi l’usuari en quina zona de la pantalla ha fet clic amb el ratolí. Les zones definides són les següents: esquerra superior, esquerra inferior, dreta superior i dreta inferior. Per determinar la mida de la finestra del navegador, pots fer servir la funció getWindowSize() proporcionada.

// function getWindowSize(): { width: number; height: number } {
//   return {
//     width: window.innerWidth,
//     height: window.innerHeight
//   };
// }
let div = document.getElementById('div') as HTMLDivElement;
let body = document.getElementById('body') as HTMLElement;


let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

body.addEventListener('click', (e) =>{
	let X = e.clientX;
	let Y = e.clientY;

	if(e.clientX < windowWidth/2 && e.clientY < windowHeight/2){
		div.innerText= 'Arriba izquierda'
	}
		if(e.clientX > windowWidth/2 && e.clientY > windowHeight/2){
		div.innerText= 'Abajo derecha'
	}
		if(e.clientX < windowWidth/2 && e.clientY > windowHeight/2){
		div.innerText= 'Abajo izquierda'
	}
		if(e.clientX > windowWidth/2 && e.clientY < windowHeight/2){
		div.innerText= 'Arriba derecha'
	}

	console.log(X, Y);
})


});
