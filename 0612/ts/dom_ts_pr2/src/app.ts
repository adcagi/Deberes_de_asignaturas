document.addEventListener("DOMContentLoaded", () => {
	let element = document.getElementById("texto") as HTMLElement;
	let enlace = document.getElementById('enlace') as HTMLAnchorElement;

	enlace.addEventListener("click", () =>{
		if(element.className == "" || element.className == 'visible'){
			element.className = 'oculto';
			enlace.innerHTML = 'Mostrar'
		}else{
			element.className = 'visible';
			enlace.innerHTML = 'Ocultar'
		}

		return false;
	})
})