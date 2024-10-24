<?php

$n=6;

for ($i= $n; $i >=0; $i--){
    
    
    


   
    echo"<br>";
    
  
}

for ($k=0;$k<=$n;$k++){
    for ($l = 0; $l<=$n; $l++){ 
        if($l >= $n - $k ){
            echo "$l";
        }else{
            echo "&nbsp ";   
        }
        
       
    }


    for ($j = $n - 1; $j>=0;$j--){
        

        if($j >= $n - $k){
            echo"$j";
           
            
        }else{
            echo "&nbsp ";
        }
        
         
    }
    echo"<br>";
        
}
    
    
  
