document.addEventListener("DOMContentLoaded", () => {
    let element =  document.getElementById("texto") as HTMLTextAreaElement;
    let numChars = document.getElementById("numChars");
    let upperCase = document.getElementById("upperCase");
    let numChspecialCharars = document.getElementById("specialChar");
    let number = document.getElementById("number")
    
    function validateNumChars(){
        element.addEventListener("input", ()  =>{
            if(numChars){
                if(element.value.length >= 8){
                    (numChars.children[0] as HTMLElement).style.display = "none";
                    (numChars.children[1] as HTMLElement).style.display = "flex";
                } else{
                    (numChars.children[0] as HTMLElement).style.display = "flex";
                    (numChars.children[1] as HTMLElement).style.display = "none";
                }
            }

            if(upperCase){
                if(/[A-Z]/.test(element.value)){
                    (upperCase.children[0] as HTMLElement).style.display = "none";
                    (upperCase.children[1] as HTMLElement).style.display = "flex";
                }else{
                    (upperCase.children[0] as HTMLElement).style.display = "flex";
                    (upperCase.children[1] as HTMLElement).style.display = "none";
                }
            }

            if(numChspecialCharars){
                if(/[!\"#$%&'()*+,\-./:;<=>?@\[\\\]^_`{|}~]/.test(element.value)){
                    (numChspecialCharars.children[0] as HTMLElement).style.display = "none";
                    (numChspecialCharars.children[1] as HTMLElement).style.display = "flex";
                }else{
                    (numChspecialCharars.children[0] as HTMLElement).style.display = "flex";
                    (numChspecialCharars.children[1] as HTMLElement).style.display = "none";
                }
            }
            if(number){
                if(/[0-9]/.test(element.value)){
                    (number.children[0] as HTMLElement).style.display = "none";
                    (number.children[1] as HTMLElement).style.display = "flex";
                }else{
                    (number.children[0] as HTMLElement).style.display = "flex";
                    (number.children[1] as HTMLElement).style.display = "none";
                }
            }

        })
    }

validateNumChars();

})

