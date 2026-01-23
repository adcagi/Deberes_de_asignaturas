document.addEventListener("DOMContentLoaded", () => {


    class box<T>{
        private element : T;

        constructor(element : T){
            this.element = element;
        }


        public getElement(): T{
        return this.element;
        }

        public setElement(element : T){
            this.element = element;
        }

        public describe() : string{
            return `La caixa es de tipus ${typeof(this.element)}, i el que conte es: ${this.element}`;
        }
    }


    let box1 = new box("caixa");
    let box2 = new box(234);
    console.log(box1.describe());
    console.log(box2.describe());



    interface Entity{
        id : number;
    }

    class Repository<T extends Entity>{

        private items: T[] = [];

        public add(item : T){
            this.items.push(item);
        }
        public getById(id: number){
            const item = this.items.find(element => element.id === id);
            return item;
        }
        public getAll(){
            return this.items;
        }
        public remove(id : number){
            const index = this.items.findIndex(element => element.id === id);
            if(index !== -1){
                this.items.splice(index, 1)
                return true;
            }else{
                return false;
            }

        }
    }



    const Repository1 = new Repository<{id: number, name: string}>();
    Repository1.add({id: 1, name: "name1"});
    Repository1.add({id: 2, name: "name2"});

    
    console.log(Repository1.getAll());
    console.log(Repository1.getById(2));
    console.log(Repository1.remove(1));
    console.log(Repository1.getAll());
});