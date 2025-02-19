# Examen M06 UF2 POO (Typescript)

## Introducció
L'examen es farà sense connexió a internet, els únics documents que estan permesos mirar són els que hi ha dins de la carpeta de l'examen. Dins de la carpeta docs trobareu uns PDFs amb tots els apunts de la UF. No es pot fer servir cap altre aplicació que la de VSCode.
Abans de desconectar-se heu d'executar la següent comanda `npm install`per tal de tenir totes les llibreries instal·lades.
Un cop heu finalitzat s'ha de cridar al docent per tal de tornar a connectar-se i pujar l'examen sempre amb la supervisió del docent.



## 1.- Bistecs al punt (2.5p)
Aquesta temporada es vol afegir a la carta 2 plats nous Bistec amb patates i Bistec amb verdures. 
Es vol donar la millor experiència als clients per aquest motiu es vol modificar l'app per 
permetre seleccionar si el client vol la carn poc feta, al punt o molt feta. L'equip de dissenyadors web
ha deixat la maqueta de com s'ha de mostar el producte a l'aplicació.
1.- Crea un enum `SteakCookedLevels` amb els diferents tipus de cocció d'un bistec: Rare, Medium Rare, Medium, Medium Well, Well Done.
2.- Crea un nou tipus de producte amb el nom de `Steak` el qual accepti per paràmetre els diferents tipus de cocció  que serà un array del tipus `SteakCoockedLevels` i els guardi a l'atribut `aviableCookedLevels`.
3.- Sobreescriu el mètode draw de la classe `Steak` per tal de mostrar el producte com al fitxer [steakProduct.design.html](http://localhost:5173/steakProduct.design.html). Fent que els selectors es mostrin segons els valors que s'han informat a l'atribut `aviableCookedLevels`.
4.- Crea els dos productes tal i com surt a disseny.
## 2.- Import total amb IVA (2.5p)
Segons una nova llei, l'IVA que s'aplica a les begudes ha de ser del 21% mentres que la resta de productes alimentaris ha de ser del 10%.
La classe `TotalCalculator` accpeta per paràmetre un objecte que implementi la interfície `ICalculatorModificator` investiga com funciona i implementa una classe que pugui modificar el total de la comanda aplicant la nova llei de IVA. 
## 3.- Producte de temporada (2.5p)
Volem afegir productes que siguin de temporada i mostrar en girs aquells productes que no estiguin disponibles.
1.- Crea la classe `Season` que hereta la classe Producte i que al seu constructor també accepti un paràmetre `isOfSeason` de tipus boolean on indiqui que és de temporada.
2.- Afegeix la classe css  `outOfSeason` si el paràmetre `ìsOfSeason` és true. 
## 4.- Increment del preu segons dia de la setmana (2.5p)
Sovint en molts restaurants els preus dels productes varien depenent si és festiu o no. Crea a la classe `Producte` un atribut amb el nom de `isWeekend` de tipus boolean i que per defecte sigui false. Si aquest atribut es posa a true fes que el preu s'incrementi un 20% i si es torna a posar a false que torni al seu preu original.