document.addEventListener("DOMContentLoaded", () => {

    class conductor{
        private _name: string;
        private _birdthDate : Date;
        private _portaMoto : boolean;
    
        constructor (name: string, birdthDate: Date, portaMoto : boolean){
           this._name = name;
           this._birdthDate = birdthDate;
           this._portaMoto =portaMoto; 
       }
    
        get name() : string{
         return this._name;
       }
    
       get birdthDate() : Date{
        return this._birdthDate;
       }
    
       get portaMoto() : boolean{
        return this._portaMoto;
       }
    
         set name(name: string){
           this._name  = name;
       }
    
       set birdthDate(birdthDate: Date){
        const today = new Date();
        const age =  today.getFullYear() - birdthDate.getFullYear();
        if (age < 18){
            throw new Error ("El conductor debe ser mayor de edad");
        }
        
        this._birdthDate = birdthDate;
       }
    
       set portaMoto(portaMoto: boolean){
        this._portaMoto = portaMoto;
       }
       
       
       public print(value?: string | Date | boolean){
        let name = this._name;
        let birdthDate = this.obtenerEdad(this.birdthDate);
        let portaMoto = this._portaMoto;
        if(typeof(value) == "string"){
           name = value;
        }
        if( value instanceof Date){
            birdthDate = this.obtenerEdad(value);
        }

        if(typeof(value) === "boolean"){
            portaMoto = value; 
        }

        console.log(`Nombre: ${name}, Edad: ${birdthDate}, Porta Moto: ${portaMoto}`);
       }

       private obtenerEdad(birthDate: Date): string {
        const today = new Date();
        const edad = today.getFullYear() - birthDate.getFullYear();
        return `${edad}`;
        
       }


    
    
    }



    let conductor1 = new conductor("Juan Perez", new Date(1990, 5, 15), true);
    conductor1.print();
    conductor1.print("Carlos Lopez");
    conductor1.print(new Date("2000-3-20"));
    conductor1.print(false);
});
