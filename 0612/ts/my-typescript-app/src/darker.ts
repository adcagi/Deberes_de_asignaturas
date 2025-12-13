
export let backgroundDark = "#000";
export let textDark = "#fff";
export let backgroundLight = "#000";
export let textLight = "#fff";

//otra opcion es esta;
// export function toggleTheme(element: HTMLElement){
//     if(element.style.backgroundColor == backgroundDark){
//         element.style.backgroundColor = backgroundLight;
//         element.style.color = textDark;
//     }else{
//          element.style.backgroundColor = backgroundDark;
//         element.style.color = textLight;
//     }
// }


export function toggleTheme(button: HTMLElement, square: HTMLElement, text: HTMLElement){
    button?.addEventListener("click", () => {
        if(square!.className === "backgroundDark"){
            square!.className = "backgroundLight";
            text!.className = "textDark";
        }else{
            square!.className = "backgroundDark";
            text!.className = "textLight";
        }
    })
}