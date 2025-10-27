function primo(n){
     for (let i = 2; i < n; i++){
        if( n % i === 0 ){
            return false;
        }
     }
    return n !== 1;
 }

  for (let j = 2; j < 100; j++){
    if(primo(j)){
        console.log(j)
    }
 }
  

