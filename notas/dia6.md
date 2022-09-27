
// Indices

// Tendremos una COPIA de los datos preordenados.

// Obtener los resultados de la query más rápido...
// Mejorar tiempos de modificaciones...

{"nombre": "Ivan"...}|{"nombre": "Juan"...}|{"nombre": "Petri"...}|{"nombre": "Sofia"...}|{"nombre": "Alfonso"...}

// Búsqueda por nombre: Sofia: FULLSCAN: COLLSCAN

/*
INDICE nombre:
Alfonso     5   (byte: 12138)

Ivan        1   (byte: 1231)

Juan        2   (byte: 1892)        <<<<

Petri       3   (byte: 6251)        <<<<

Sofia       4   (byte: 10000)       <<<< OK !!!!
*/


INSERT COLECCION de un documento. NA' y menos:

|.......................................................|nuevo documento|

INSERT COLECCION que tiene un indice creado para un campo: {"nombre": "Margarita"} -> Margarita

|.......................................................|nuevo documento|
                                                        ^ byte 19278346
    Indice campo: Nombre
    |...........{Margarita: 19278346}...........|

db.personas.createIndex( { "nombre": 1 } )
db.personas.createIndex( { "apellidos": 1, "nombre": 1 } )  // apellidos_1_nombre_1
                                       -1 :Orden descendente // apellidos_-1_nombre_1
db.personas.createIndex( { "apellidos": 1, "nombre": 1 },  { "name": "Apellidos y nombre"})

//CREATE INDEX nombrecito ON table (campos)

/*
A
    Ab
        Abel            UBICACION(es)
B
    Br
        Bribon
    Bl
        Blanca


*/
---
{ "nombre": "Tablero de madera de pino(16mm)",... }
{ "nombre": "Tablero de abedul",... }
{ "nombre": "Banco de un camión",... }
{ "nombre": "Banco de hierro forjado",... }

----
db.productos.createIndex( { "nombre": 1 } ) //B-Tree


BUSQUEDA: 'Tablero de madera de pino de 16mm'?  RARO
BUSQUEDA: 'tablero 16 mm'?                      SI
BUSQUEDA: 'tablero pino'?                       SI
BUSQUEDA: 'banco'?                              SI

// Para búsquedas de texto: INDICE INVERSO
tablero-?-madera-?-pino-?-16-mm-?
tablero-?-abedul
banco-?-?-camion
banco-?-hierro-forjado

// INDICE INVERSO
abedul      2(3)
banco       3(1), 4(1)
camion      3(4)
forjado     4(4)
hierro      4(3)
madera      1(3)
mm          1(8)
pino        1(5)
tablero     2(1), 1(1)
16          1(7)

BUSQUEDA: 'TABLERO 16 mm'?                  

tablero         1,2
16              1
mm              1

Mongo: 2 resultados:
    1 - que contiene todas las ocurrencias
    2 - que contiene algunas de las ocurrencias 

1º Tokenizamos: Separamos en tokens (vocablos)
2º Eliminamos caracteres de puntuación y STOP WORDS (palabras vacias, dependen del IDIOMA)
3º Normalizar los tokens (mayúsculas/minúsculas, quitar acentos y caracteres raros)
4º Ordeno los tokens entre si

db.productos.createIndex( { "nombre":  1 } )        // B-Tree Ordenado Ascendente
db.productos.createIndex( { "nombre": -1 } )        // B-Tree Ordenado Descendente
db.productos.createIndex( { "nombre": "text" } )    // Indice invertido
db.productos.createIndex( { "nombre": "text" }, {default_language: "spanish"} )    // Indice invertido

// Stem: Quedarnos con la RAIZ de la palabra

// Cabezón          -> cabez-on     -> cabez
// Cabecilla        -> cabec-illa   -> cabez
// Cabeza           -> cabez-a      -> cabez
// Cabecita         -> cabec-ita    -> cabez
db.productos.createIndex( { "nombre":  "text", "apellidos": "text" } ) 
// Podeis crear vuestras propias listas de Stop Words, Activar o descartivar el Steming, CaseFolding

// DNI campo de texto? BTREE... empezaré a buscar por los primeros caracteres
FORMULARIO de búsqueda: 5302_
                        > 53024507F
                        > 5302898A
                        
// Indices de tipo HASH ... algoritmos de HASH: Huella!
DNI: 26372637 T. La letra es una huella del numero
    NUMERO/23 -> me quedo con el resto de la división entera . RESTO: 0..22

    17 | 3
       -------
     2   5
                                    Esto es lo que indexo
    ASFJ5-891384-28/9       ----> 32 bits -> 0001010283629134623478
    ASFJ5-891384-28/14      ----> 32 bits -> 2389657304abc737294239

db.productos.createIndex( { "codigo_producto": "hashed" } ) 
Tienen un problema: 
    - Hago búsquedas por la huella, no por el dato original: solo sirve para búsquedas de = !=, no para rangos < > 
    - Potencial problema es que no son únicos... en general no vamos a tener tal problema


// Indices geoEspaciales
// Tipo de campo para almacenar Coordenadas: Lon+lat
// Quiero algo que no diste más de 2000 unidades de esta lat+lon
//  Teorema de PITAGORAS !
// WALLAPOP

# En cualquier índice:

- yo puedo solicitar que sea UNICO

    > db.productos.createIndex( { "nombre":  1 } , { "unique": true })  

- puedo pedir que el índice solo se compute en algunos escenarios

    > db.productos.createIndex( { "nombre":  1 } , { partialFilterExpression: { "edad": {"$gte": 18 } } })  

- yo puedo solicitar que los documentos sin el campo, no se indexen

    > db.productos.createIndex( { "nombre":  1 } , { "sparse": true } )    // Los documentos sin el campo no se indexan
    > db.productos.createIndex( { "nombre":  1 } , { "sparse": false } )   // por defecto: Los documentos sin el campo si se indexan con valor null

    Este índice no lo podré usar en una búsqueda que indique: documentos SIN EL CAMPO nombre

- TTL Index: Eliminado de un documento basado en un campo de fecha

    > db.accesos.createIndex( { "Fecha de acceso":  1 } , { "expireAfterSeconds": 3600 } )
    
    > db.accesos.find(,{"usuario": 1})
    > db.accesos.find(,{"usuario": 1}).sort({"Fecha de acceso":  1})
    
    // Mongo elimina de la COLECCION los DOCUMENTOS cuya fecha sea mayor que ese valor ^ comparado con la actual.
    