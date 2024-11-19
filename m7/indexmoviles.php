<?php 
require_once 'moviles.php';


$Android = new movil("Dogge", "s88", "100");
$Iphone = new movil("Iphone", "15", "100");
$Samsumg = new movil("Galaxy", "10", "100");

echo $Android->get_name(). " ". $Iphone->get_name(). " ". $Samsumg->get_name();

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .moviles {

        }
        .movil{
            display: block;
            border: solid 5px;
            border-radius: 10%;
        }
    </style>
</head>
<body>
    <div class="moviles">
        <div class="movil1">
            <div class="pantalla"></div>
            <div class="texto">
                <label></label>
                <button type="submit" value="Enviar"></button>
            </div>
            <div class="llamada"></div>
        </div>
    </div>
</body>
</html>