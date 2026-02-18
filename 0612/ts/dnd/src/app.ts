document.addEventListener("DOMContentLoaded", () => {
    let columna = document.getElementById("columna") as HTMLDivElement;
    let tarjeta = document.getElementById("tarjeta") as HTMLDivElement;

    for(let c of columna.children){
        c.addEventListener("dragover", (e) =>{
            e.preventDefault();
        })
        c.addEventListener("drop", (e) =>{
            console.log("drop")
            let data;
            if(e.currentTarget){
                data = e.currentTarget
                c.appendChild(data);
            }
        })
    }
    for(let t of tarjeta.children){
    t.addEventListener("dragstart", (e) =>{
        console.log(e.target);
    })
    }
});