Para sacar los datos de un usuario:
Nº de queries? 1 ----> Brutalmente rápido !

Cuando haya algun cambio en cualquier dato?
Cuantas escrituras: 1, pero de todo el documento.
- Escribe el nuevo documento al final del fichero de la colección.
- Y qué pasa con el viejo? Ahí se queda! No se usa... Se saca del índice

Problema?
Las actualizaciones de datos engordan mucho la BBDD 
    -> Compactar la colección como tarea de MNTO


?? BBDD Relaciones hay este problema?

----

Usuarios

Productos
id:                                     17
nombre:                                 
    - idioma:                           DEFAULT
      valor:                            Lo que sea que venda
    - idioma:                           es_ES
      valor:                            Lo que sea que venda
características:
    descripcion:
        - idioma:                           DEFAULT Inglés          --> Solicitar una traduccíon a un microservicio
          valor:                            Lo que sea que venda
        - idioma:                           es_ES
          valor:                            Lo que sea que venda
        - idioma:                           fr_FR
          valor:                            Lo que sea que venda
    tamaño:
        alto: 
        ancho:
        profundo:
    peso: 
    potencia:
    
multimedia: 
    - imagen:
        grande:                           URL
        pequeño:                          URL
    - imagen:
        grande:                           URL
        pequeño:                          URL
    - video:                            URL



Coleccion2 PRODUCTOS:
{    
    "_id":                            17,
    "stock":                          7,                   
    "precio":                         77,
    "fecha de reposición":            "Julio-2025"
}
{    
    "_id":                            17,
    "stock":                          77777777,                   
    "precio":                         77,
    "fecha de reposición":            "Julio-2025"
}

Clavao!

Mongo
    No trabaja con JSON internamente
    Trabaja con BSON internamente
    




Coleccion COMENTARIOS

// 1 documento por comentario
{
    "_id"                               1712121221,
    "product_id"
    "user_id":                          1,
    "comentario":                       "cojonudo",
    "estrellas":                        6,
    "compra verficiada":                true,
    "fecha":                            "10-abril",
    "multimedia": 
        - imagen:
            grande:                     URL
            pequeño:                    URL
        - imagen:
            grande:                     URL
            pequeño:                    URL
        - video:                        URL
}

// 1 documento por comentario y usuarios: ME GUSTA
{
    "comentario_id": 192837472892,
    "usuario_id"   : 12371389123
}


// Compra
_id:                89718932
user_id:            892789234
fecha:              098098098
productos:
    - product_id:   897897
      quantity:     3
      precio:       12
    - product_id:   4525
      quantity:     1
      precio:       123
direccion:
    -   "envio": true,  
        "facturacion": true,  
        "calle": "Arenisca", 
        "numero": 9, 
        "Portal": 1, 
        "piso": 3, 
        "puerta": 2, 
        "localidad": "Málaga", 
        "provincia": "Málaga", 
        "código postal": 29006 
descuentos:
    -
importe final: 12313
como pagó:
actualizaciones sobre la compra:
    - anulado el 7
    - devuelto el 4
    

// Estado de la compra - Por la cantidad de actualizaciones
     ^^^
     Es mi problema ? 
        Soy el desarrollador de la app que permite a la gente hacer compras
        