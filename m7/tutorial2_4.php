<?php

$a = rand(10000,99900);

$b = rand(10000,99900);

$stra = (string) $a;
$strb = (string) $b;

$array_a = str_split($stra);
$array_b = str_split($strb);

$conteoa = count($array_a) -1;
$conteob = count($array_b) -1;

if($array_a [$conteoa] == $array_b [$conteoa]) {
    echo "$a"."-"."$b"."---->".True;
}else{
    echo "$a"."-". "$b"."---->"."False";
}