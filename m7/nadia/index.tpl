<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Containers</title>
</head>
<body>
    <h2>{$counter}</h2>
    {foreach from=$trash item=trashito}
        <p>
        {$trashito}
        </p>
    {/foreach}
    <div style="display: flex; ">
        {foreach from=$containers item=container key=key}
            <div style="text-align: center;">
                <a href="index.php?trash={$key}"><img src="img/{$container->getImg()}" width="75px" alt=""></a>
                <p>{$container->getCarga()}/{$container->getCapacidadMaxima()}</p>
            </div>
        {/foreach}
        <a href="index.php?truck"><img src="img/truck.png" width="120px"></a>
    </div>

    
</body>
</html>