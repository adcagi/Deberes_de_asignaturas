document.addEventListener("DOMContentLoaded", () => {

    class conductor{
        private name: string = '';
        private birdthDate : Date;
        private portaMoto : boolean;
    
        constructor (name: string, birdthDate: Date, portaMoto : boolean){
           this.name = name;
           this.birdthDate = birdthDate;
           this.portaMoto =portaMoto; 
       }
    
        get nom() : string{
         return this.name;
       }
    
       get brdthDate() : Date{
        return this.birdthDate;
       }
    
       get portaLaMoto() : boolean{
        return this.portaMoto;
       }
    
         set nom(name: string){
           this.name  = name;
       }
    
       set brdthDate(birdthDate: Date){
          this.birdthDate = birdthDate;
       }
    
       set portaLaMoto(portaMoto: boolean){
        this.portaMoto = portaMoto;
       }
       
       public print(name: string, birdthDate : Date, portaLaMoto : boolean) : string{
        if(portaLaMoto){
             return `Nom: ${name}, Data de naixement: ${birdthDate}, Porta Moto: si`;
        }else{
            return `Nom: ${name}, Data de naixement: ${birdthDate}, Porta Moto: no`;
        }
           
       }

       public  ageRestriction(name: string, birdthDate : Date) {
            const fechaActual = new Date();
            const diferecniafechas = fechaActual.getTime() - birdthDate.getTime();
            if(diferecniafechas < 18){
                throw new Error("Eres menor de edad, no puedes conducir!!!");
            }else{
                return "Bienvenido " + name + "!!!";
            }
       }
    
    
    }

    let conductor1 = new conductor("Alberto", new Date(2005, 5, 15), true);
    let conductor2 = new conductor("Germilio", new Date(20013, 5, 15), false);

    console.log(conductor1.print(conductor1.nom, conductor1.brdthDate, conductor1.portaLaMoto));
    console.log(conductor2.print(conductor2.nom, conductor2.brdthDate, conductor2.portaLaMoto));
    console.log(conductor1.ageRestriction(conductor1.nom, conductor1.brdthDate));
    console.log(conductor2.ageRestriction(conductor2.nom, conductor2.brdthDate));
});
