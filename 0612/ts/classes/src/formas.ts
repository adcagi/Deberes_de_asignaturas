document.addEventListener("DOMContentLoaded", () =>{

    interface Perimetrable{
       perimetre(): number;
    }


    class Rectangle implements Perimetrable{
        public base : number;
        public alcada : number;

        constructor(base: number, alcada: number){
            this.base = base;
            this.alcada = alcada;
        }

        perimetre(): number {
            let res = (this.base * 2) + (this.alcada * 2);
            return res;
        }

    }

    class Quadrat extends Rectangle{

        constructor(costat: number ){
            super(costat, costat);
        }
        perimetre(): number {
            let res = this.base * 4;
            return res;
        }
    }

    class Cercle implements Perimetrable{
        public radi : number;

        constructor(radi: number){
            this.radi = radi;
        }

        perimetre(): number {
            let res = (2*Math.PI) * this.radi;
            return res;
        }
    }

    let Cercle1 = new Cercle(2);
    let Rectangle1 = new Rectangle(2, 3);
    let Quadrat1 = new Quadrat(4);
    console.log(Cercle1.perimetre());
    console.log(Rectangle1.perimetre());
    console.log(Quadrat1.perimetre());

});