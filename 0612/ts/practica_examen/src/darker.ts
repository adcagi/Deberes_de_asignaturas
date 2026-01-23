export let backgroundDark = "rgb(0, 0, 0)";
export let textDark = "#000000";
export let backgroundLight = "rgb(255, 255, 255)";
export let textLight = "#ffffffff";

export function toggleTheme(param: HTMLElement){
    const body = document.querySelector("body");
    param.addEventListener("click", () =>{
        console.log("hola")
        if(body?.style.backgroundColor == ""){
            body.style.backgroundColor = backgroundDark
        }
        
        else if(body?.style.backgroundColor == backgroundLight){
                body.style.backgroundColor = backgroundDark
        }
        
        else{
            
            body!.style.backgroundColor = backgroundLight
        
        }
        
    })




    class Conductor{
        private _nom: string;
        private _dataNaixement: Date;
        private _portaMoto: boolean;

        constructor(nom: string, dataNaixement: Date, portaMoto: boolean){
            this._nom = nom;
                        
            let today = new Date();
            let edad = today.getFullYear() - dataNaixement.getFullYear();
            if(edad < 18){
                throw new Error("No tienes edad para conducir!!!");
            }
            this._dataNaixement = dataNaixement;
            this._portaMoto = portaMoto;
        }

        public getNom(): string{
            return this._nom;
        }

        public getDataNaixement(): Date{
            return this._dataNaixement;
        }

        public getPortaMoto(): boolean{
            return this._portaMoto;
        }

        public setNom(nom: string){
            this._nom = nom;
        }

        public setDataNaixement(dataNaixement: Date){

            this._dataNaixement = dataNaixement;
        }


        public setPortaMoto(portaMoto: boolean){
            this._portaMoto = portaMoto;
        }

        public print(param: string | Date | boolean){
            let edad = 0;
            if(typeof(param) == "string" ){
                param = this._nom;
            }
            if(param instanceof Date ){
                let today = new Date();
                edad = today.getFullYear() - param.getFullYear();
                
            }
            if(typeof(param) == "boolean" ){
                param = this._portaMoto;
            }

            return `Tu nombre es: ${this._nom}, tienes: ${edad} anyos, ${(this._portaMoto ? "Si" : "No")}`
        }
    }

    let Conductor1 = new Conductor("carlos", new Date("2005-5-5"), true);
    console.log(Conductor1);
}