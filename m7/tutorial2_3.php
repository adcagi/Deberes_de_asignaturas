<?php

$a = rand(0,40);

$b = rand(0,40);

$c;

if( $a < $b ){
    $c = $b;
}else{
    $c = $a;
}

if($c >= 10 && $c <= 30){
    echo"$c";
}else{
    echo "0";
}


