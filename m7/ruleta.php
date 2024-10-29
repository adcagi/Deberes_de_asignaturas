<?php

session_start();


?>


<img src="tapet_ruleta.png">

<form action="ruleta2.php" method="get">

	<select name="tipo-apuesta">
		<option>sencilla</option>
		<option>rojo-negro</option>		
		<option>par-impar</option>
		<option>cuadro</option>
		<option>falta-pasa</option>
		<option>docena</option>
		<option>sexta</option>
		<option>caballo</option>
		<option>transversal</option>
		<option>columna</option>
		<option>rojo-negro</option>
		<!-- Completar las 6 apuestas que faltan con los casos del switch -->

	</select><br/>
	<input type="text" name="apuesta" placeholder="apuesta" /><br/>
	<input type="text" name="dinero" placeholder="dinero" />€<br/>
	<input type="submit" value="enviar" />

</form>


