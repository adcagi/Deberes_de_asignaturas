"use strict";
//Ex1
//#region
const user = "1";
console.log(user);
// Creem un array d'usuaris utilitzant el type alias
const usuaris = [
    { id: 1, nom: "Joan", email: "joan@example.com" },
    { id: 2, nom: "Anna", email: "anna@example.com" },
    { id: 3, nom: "Pere", email: "pere@example.com" },
];
// Funció que accepta un usuari i retorna un string amb el seu nom i correu
function obtenirNomICorreu(usuari) {
    return `Nom: ${usuari.nom}, Correu: ${usuari.email}`;
}
// Exemple d'ús de la funció
usuaris.forEach((usuari) => {
    console.log(obtenirNomICorreu(usuari));
});
function calcularArea(forma) {
    if ("base" in forma && "alcada" in forma) {
        return (forma.base * forma.alcada) / 2;
    }
    else {
        return (Math.PI * (forma.radi * forma.radi));
    }
}
const triangulo = { base: 3, alcada: 6 };
const circulo = { radi: 5 };
console.log(`Triangulo: ${calcularArea(triangulo)}`);
console.log(`Circulo: ${calcularArea(circulo)}`);
//#endregion
//# sourceMappingURL=app.js.map