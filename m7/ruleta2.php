<?php

if(isset($_REQUEST['tipo-apuesta'])&&isset($_REQUEST['apuesta'])&&isset($_REQUEST['dinero'])){
	$numero=rand(1,36); //Genera numero aleatorio
	echo '<h1>'.$numero.'</h1>'; //Muetra el numero generado

	$t=$_REQUEST['tipo-apuesta'];
	$a=$_REQUEST['apuesta'];
	$d=$_REQUEST['dinero'];


	switch ($t) {
		case 'sencilla': //Completo y funcional
			if($numero == $a) echo 'Has ganado'. $d*35;
			else echo 'Has perdido '.$d;
			break;

		case 'cuadro': //Completo y funcional
			$a=explode('-', $a); //Separa un string del tipo '1-5' en un array de dos numeros
			if($a[0]==$numero || $a[0]+1==$numero || $a[1]-1==$numero || $a[1]==$numero){
				echo 'Has ganado'. $d*8;
			}
			else echo 'Has perdido '.$d;
			break;
		
		case 'par-impar': //Completar. Entra 'par' o ' impar'
		//	if( ... ) echo 'Has ganado'. xxxx;
		//	else echo 'Has perdido '.$d;
			break;

		case 'falta-pasa': //Completar. Entra 'falta' o ' pasa' (Buscar número en intervalo 1-18 o 19-36)
		//	if( xxx > yyy && xxx < zzz ... ) code ...
		//	elseif( xxx > yyy && xxx < zzz ... ) code ...
		//	else echo 'Has perdido '.$d;
			break;

		case 'docena': //Completar. Entra un número 1, 2 o 3 (Buscar número en intervalo 1-12, 13-24 o 25-36)
		//	if( xxx > yyy && xxx < zzz  ) code ...
		//	elseif( xxx > yyy && xxx < zzz ) code ...
		//	elseif( xxx > yyy && xxx < zzz ) code ...
		//	else echo 'Has perdido '.$d;
			# code...
			break;

		case 'sexta': //Completar usando el caso del cuadro
			$a=explode('-', $a); //Entra un string, por ejemplo 1-6 o 31-36
			//if( $numero >= $a[0] && ... ) # code...
			//	else echo 'Has perdido '.$d;
			break;

		case 'caballo': //Completar usando el caso del cuadro. Entra un string tipo 2-5 o 4-7
			$a=explode('-', $a); //Entra un string, por ejemplo 1-6
			//if( $numero == $a[0] ||  ... ) # code...
			//	else echo 'Has perdido '.$d;
			break;

		case 'transversal': //Completar usando el caso del cuadro.  Entra un string tipo 1-3 o 4-6
			# code... (Buscar número en intervalo)
			break;

		case 'columna': //Completar. Entra un número 1, 2 o 3 
			# code... (Buscar múltiplo de 3)
			break;

		case 'rojo-negro': //Completar. Entra 'rojo' o ' negro' 
			# code... (Buscar número en array)
			break;

	}

}
