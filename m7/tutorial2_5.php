<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <style>




        div{
            display: flex;

        }
        .negro{
            height: 50px;
            width: 50px;
            background-color: black;
            display: flex;
            flex-wrap:wrap ;
        }

        .blanco{
            height: 50px;
            width: 50px;
            background-color: aliceblue;
            display: flex;
            flex-wrap: wrap;

        }


    </style>
</body>
</html>


<?php

$n = rand(8,16);

$m = rand(10,12);

$negro = 0;
$blanco = 1;



    for($i=0; $i<$n; $i++){

        echo"<div>";
        for($j= 0; $j<$m; $j++){

           if(($i + $j) % 2 == 0){
                echo "<div class='negro'></div>";      
                //echo"$negro";
            }else{
                //echo "$blanco";
                 echo "<div class='blanco'></div>";  
            }
            
            
        }
        echo "</div>";
        
       
        
    }

    






