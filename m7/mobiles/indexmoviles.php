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
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1px black;
    padding: 10px;
    width: 550px;
    height: 800px;
    background-color: #f5f5f5; /* Color de fondo para que sea visible */
}

.movil1 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 300px;
    height: 700px;
    border: solid 5px black;
    border-radius: 10px;
    background-color: lightgray; /* Fondo claro para destacar */
}

.pantalla {
    flex: 2;
    border: solid 1px black;
    border-radius: 10px;
    margin: 10px;
    height: 60%;
    background-color: white;
    opacity: 1; /* Simula la pantalla en negro */
}

.texto {
    flex: 1;
    /*text-align: center; */
    margin: 10px;
    display: block;
}

.llamada {
    flex: 1;
    height: 50px;
    margin: 10px;
    border: solid 1px black;
    background-color: green; /* Simula el área de llamadas */
}

.mensaje{
    width: 80%;
    max-width: 90%;
    height: 50px;
    max-height: 70px;
}

    </style>
</head>
<body>
    <div class="moviles">
        <div class="movil1">
            <div class="pantalla"></div>
            <div class="texto">
                <textarea class="mensaje"></textarea>
                <button type="submit" value="Enviar">dale</button>
            </div>
            <div class="llamada"></div>
        </div>
    </div>
</body>
</html>