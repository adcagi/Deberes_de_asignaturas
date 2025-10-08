

<?php 
session_start();

$numero=['as',2,3,4,5,6,7,8,9,10,'jota','reina','rey'];
$palo=['corazones','picas','diamantes','treboles'];
$baraja = [];

foreach($numero as $n){
    foreach($palo as $p){
        array_push($baraja, $p . "-" . $n . ".gif");
    }
}
foreach($baraja as  $carta){
    echo '<img src=" http://localhost/0613/naipes/baraja/baraja/'. $carta . '"/>'; 
}


?>

