function Area(forma){
    if(forma.tipo === "cuadrado"){
        let areaCuadrado = cuadrado.base * cuadrado.base
        return areaCuadrado;
    }

    if(forma.tipo === "rectangulo"){
        let areaRectangulo = rectangulo.base * rectangulo.altura
        return areaRectangulo;
    }

    if(forma.tipo === "triangulo"){
        let areaTriangulo = (triangulo.base * triangulo.altura) / 2
        return areaTriangulo;
    }



}           

let cuadrado = {
    tipo: "cuadrado",
    base: 6
}

let triangulo = {
    tipo: "triangulo",
    base: 6,
    altura: 8
}

let rectangulo = {
    tipo: "rectangulo",
    base: 6,
    altura: 5
}

console.log(Area(rectangulo));