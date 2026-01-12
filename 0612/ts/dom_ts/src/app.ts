document.addEventListener("DOMContentLoaded", () => {
    let app = document.getElementById("app");
            if(app instanceof HTMLElement){
                recursive(app);
        }
    function recursive(element: HTMLElement, deep = 0){
        console.log(" ".repeat(deep), element);
            for(let child of element.children){
                if(child instanceof HTMLElement){
                    recursive(child, deep +1);

                }else{
                    console.log(child)
                }
        }
        
    }
})