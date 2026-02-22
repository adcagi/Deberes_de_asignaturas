document.addEventListener("DOMContentLoaded", () => {
// Quan es faci clic sobre el primer enllaç, s’oculti la seva secció relacionada.

// Quan es torni a fer clic sobre el mateix enllaç, es torni a mostrar aquesta secció de continguts.

// Completa la resta d’enllaços de la pàgina perquè el seu comportament sigui idèntic al del primer enllaç.

// Quan una secció s’oculti, ha de canviar el missatge de l’enllaç associat (pista: propietat innerHTML).

let enlaces = document.querySelectorAll('a');
let parrafos= document.querySelectorAll('p');

for(let enlace of enlaces){
	enlace.addEventListener('click', (e) => {
		e.preventDefault();
		let enlaceRef = enlace.getAttribute('href');
		if(enlaceRef){
		 let enlaceRefNormal = enlaceRef.slice(1);
		 for (let parrafo of parrafos){
			let parrafoId = parrafo.getAttribute('id');
			if (parrafoId == enlaceRefNormal){
				if(parrafo.className == '' || parrafo.className == 'visible'){
					parrafo.className = 'oculto';
					enlace.innerText = 'Mostrar contenidos';
				}else{
					parrafo.className = 'visible';
					enlace.innerText = ' Ocultar contenidos';
				}
			} 
		 }	
		}
	})

}

})