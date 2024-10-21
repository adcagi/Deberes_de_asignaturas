<?php
$x;
$blue = "#0000ff";
$red = "#ff0000";
for ($x = 0; $x <= 100; $x++){
    if($x %2 == 0 ){
        echo "<span style='color: $blue;'>$x </span>";
    }else{
        echo "<span style='color: $red;'>$x </span>";
    }
    #$color = ($x % 2 === 0) ? $blue : $red;
    #echo "<span style='color: $color;'>$x </span>";

   
}

