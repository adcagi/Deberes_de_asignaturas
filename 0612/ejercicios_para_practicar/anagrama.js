function isAnagrama(p1, p2){
   let sameSize =  p1.length == p2.length;
   let result = false;
   let countLetters = 0; 
   if(sameSize){
        for(let i = 0; i < p1.length; i++){
            for(let j = 0; j < p2.length; j++){
                if(p1[i] == p2[j] && i >= countLetters){
                    countLetters++;
                }
            }
        }
   }
   

   result = countLetters === p1.length;
    return result;
}
console.log(isAnagrama("ROMA", "AMOR"))
