<?php

$a = rand(100,999);

$b = rand(100,999);

$stra = (string) $a;
$strb = (string) $b;

$array_a = explode(separator: '',  string: $stra);
$array_b = explode(separator: '',  string: $strb);


echo $arrayt_a[0];
echo $arrayt_b[0];


if($array_a [2] == $array_b [2]){
    echo "$a"."-"."$b"."---->"."Coinciden";
}else{
    echo "$a"."-". "$b"."---->"."No coinciden";
}

