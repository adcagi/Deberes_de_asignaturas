const num_max = 100;
for(let i = 1; i < num_max; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log("fizzbuzz");
    }
    else if(i % 3 == 0){
        console.log("fizz");
    }
    else if(i % 5 == 0){
        console.log("buzz");
    }else{
         console.log(i);
    }
   
}