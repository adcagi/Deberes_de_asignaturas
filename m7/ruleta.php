<form action="ruleta2.php" method="post">

	<select name="tipo-apuesta">
		<option>sencilla</option>
		<option>rojo-negro</option>		
		<option>par-impar</option>
		<option>cuadro</option>
		<!-- Completar las 6 apuestas que faltan con los casos del switch -->

	</select><br/>
	<input type="text" name="apuesta" placeholder="apuesta" /><br/>
	<input type="text" name="dinero" placeholder="dinero" />€<br/>
	<input type="submit" value="enviar" />

</form>
