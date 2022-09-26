PATRÓN: Algo que voy a buscar dentro de un texto.

Cumple un texto con un PATRON?
Donde aparece el PATRON en el texto?

PATRON                                  Texto
la palabra HOLA                         HOLA amigo      √
Empieza con HOLA                                        √
Acaba con HOLA                                          x

PATRON: Una conjunto de subpatrones
SUBPATRON: Una secuencia de caracteres + MODIFICADOR de ocurrencia
SECUENCIA DE CARACTERES:
- abc                               Que aparezca literalmente "abc"
- [abc]                             Que aparezca uno de esos caracteres, el que sea: "a", "b", "c"
- [A-Z]                             Letras Mayúsculas... según ASCII
- [A-ZÑÁÉÍÓÚ]                       Letras Mayúsculas... extendidas
- [a-z]                             Letras minúsculas
- [0-7]                             Números del 0 al 7
- [0-9]                             Números del 0 al 9
- .                                 Cualquier caracter

MODIFICADORES DE OCURRENCIA:
- NADA                              La secuencia anterior debe aparezca 1 vez
- ?                                 La secuencia anterior puede aparecer o no
- +                                 La secuencia anterior debe aparecer al menos 1 vez
- *                                 La secuencia anterior puede no aparecer o aparecer 
                                    las veces que quiera
- {4}                               La secuencia anterior debe aparecer 4 veces
- {2,8}
- {,5}                              Como mucho 5 veces
- {2,}                              Al menos 2 veces


[A-Z][a-z]+
Una mayúscula seguido de al menos 1 minúscula
                                    Ivan              √
                                    "LUcasito 999"    √

Caarcteres especiales en los PATRONES:
- ^     Comienza por (lo siguiente que escriba)
- $     Acaba por (lo anterior que haya escrito)
- |     Opción entre dos cosas

^[A-Z][a-z]+$
Una mayúscula seguido de al menos 1 minúscula
                                    Ivan        √
                                    LUcasito    x
                                    IvaN        x

rojo|amarillo|verde                 rojo        √
                                    amarillo    √
                                    verde       √
                                    rojoblanco  √
                                    
^rojo|amarillo|verde$               rojoblanco  √
                                    amarillo pollo  √
^(rojo|amarillo|verde)$             amarillo pollo x


^1?[0-9]$                           Del 0 al 19

[01][0-9]
[0-1]
    09

Cuando vayais a trabajar con PATRONES DE REGEX: regex101.com

[A-Za-z0-9]+@[A-Za-z0-9]+[.][A-Za-z0-9]{,5}