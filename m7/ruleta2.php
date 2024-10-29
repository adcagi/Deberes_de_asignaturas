<?php

if(isset($_REQUEST['tipo-apuesta'], $_REQUEST['apuesta'], $_REQUEST['dinero'])){
	$numero=rand(0,36); //Genera numero aleatorio
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
			if (strtoupper($a) == "PAR")
			{if( $numero % 2 == 0) 
				{echo 'Has ganado'. $d;}
				elseif($numero == 0)
				{echo 'Has perdido'. $d/2;}
				else 
				{echo 'Has perdido '. $d;}
			}
			if(strtoupper($a) == "IMPAR"){
				if( $numero % 2 == 0) 
				{echo 'Has perdido '. $d;}
				else 
				{echo 'Has ganado '. $d;}
			}
			break;

		case 'falta-pasa': //Completar. Entra 'falta' o ' pasa' (Buscar número en intervalo 1-18 o 19-36)
			if (strtoupper($a) == "FALTA"){
				if( $numero > 1 && $numero< 18  ) {
					echo 'Has gando '.$d;
				}elseif($numero == 0){
					echo 'Has perdido la mitad '. $d/2;
				}else{
					echo 'Has perdido '. $d;	
				}
			}
		    
		  	elseif(strtoupper($a) == "PASSA"){
				if ( $numero > 19 && $numero < 36  ){
					echo 'Has gando '.$d;
				}elseif($numero == 0){
					echo 'Has perdido la mitad '. $d/2;
				}else{
					echo 'Has perdido '. $d;	
				}
			}
			
			
			break;

		case 'docena': //Completar. Entra un número 1, 2 o 3 (Buscar número en intervalo 1-12, 13-24 o 25-36)
			$a=explode('-', $a);
			if( $numero >= $a[0] && $numero <= $a[1]  ) {echo 'Has ganado '.$d*2;}	
			else echo 'Has perdido '.$d;
			break;

		case 'sexta': //Completar usando el caso del cuadro
			$a=explode('-', $a); //Entra un string, por ejemplo 1-6 o 31-36
				if( $numero >= $a[0] && $numero <= $a[1]) {echo 'Has ganado '.$d*5;}
				else {echo 'Has perdido '.$d;}
			break;

		case 'caballo': //Completar usando el caso del cuadro. Entra un string tipo 2-5 o 4-7
			$a=explode('-', $a); //Entra un string, por ejemplo 1-6
			if( $numero == $a[0] || $numero == $a[1]){
				echo 'Has ganado '.$d*17; 
			}
			else {
				echo 'Has perdido '.$d;
			}
			break;

		case 'transversal': //Completar usando el caso del cuadro.  Entra un string tipo 1-3 o 4-6
			if( $numero >= $a[0] && $numero <= $a[1]) {echo 'Has ganado '.$d*11;}
				else {echo 'Has perdido '.$d;}
			break;

		case 'columna': //Completar. Entra un número 1, 2 o 3 
			if( $a%3 == $numero%3){
				echo 'Has ganado '.$d;
			}else{
				echo 'Has perdido '.$d;
			}
			# code... (Buscar múltiplo de 3)
			break;

		case 'rojo-negro': //Completar. Entra 'rojo' o ' negro' 
			$N = array(2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35);
			foreach ($N as $x) {
				echo "$x ";
			  }	//terminar
			break;

	}

}
