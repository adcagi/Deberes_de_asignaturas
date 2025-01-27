//Ex1
//#region

type UserName = string;

const user: UserName = "1";

console.log(user)

//#endregion
//EX2
//#region

// Definim un type alias per a l'objecte Usuari
type Usuari = {
    id: number;
    nom: string;
    email: string;
  };
  
  // Creem un array d'usuaris utilitzant el type alias
  const usuaris: Usuari[] = [
    { id: 1, nom: "Joan", email: "joan@example.com" },
    { id: 2, nom: "Anna", email: "anna@example.com" },
    { id: 3, nom: "Pere", email: "pere@example.com" },
  ];
  
  // Funció que accepta un usuari i retorna un string amb el seu nom i correu
  function obtenirNomICorreu(usuari: Usuari): string {
    return `Nom: ${usuari.nom}, Correu: ${usuari.email}`;
  }
  
  // Exemple d'ús de la funció
  usuaris.forEach((usuari) => {
    console.log(obtenirNomICorreu(usuari));
  });
  //#endregion
// Ex3
//#region
  type triangle = {
    base: number,
    alcada: number
  }

  type cercle = {
    radi: number
  }

type Forma = triangle | cercle;

function calcularArea(forma: Forma ): number{
  if("base" in forma && "alcada" in forma){
    return(forma.base * forma.alcada) / 2;
  }else{
    return(Math.PI*(forma.radi*forma.radi))
  }
}

const triangulo: triangle = {base: 3, alcada: 6}
const circulo: cercle = {radi: 5}

console.log(`Triangulo: ${calcularArea(triangulo)}`)
console.log(`Circulo: ${calcularArea(circulo)}`)
 //#endregion