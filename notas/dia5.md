Mongo
---------

BBDD NoSQL orientada a Documentos: JSON -> Mongo [BSON] -> JSON

En mongo la estructura:
    Base de datos:
        Colecciones:
            Documentos:
                Campos:
                    _id < Lo podemos especificar o se genera automaticamente.
            Esquema de validación
            Indices
    
    Modelizar un esquema de datos en Mongo:
        Tenemos la capacidad de crear estructuras Jerarquicas:
        
        Usuario
            Direcciones < Si se actualizan poco, las dejo dentro del usuario
            Registros de eventos < Como se actualizarán mucho, lo sacaré a su propia colección de datos.

Fichero de datos de Mongo:

# Padding Factor
Padding factor: 1: Se deja libre nada en cada documento
    > |{ "nombre": "ivancete2",*b23444 }|{ "nombre": "lucas"; "edad": 333333333 }|{ "edad": 44 }

Padding Factor 2
    > |{ "nombre": "ivan"; "edad": 44 }                             |{ "nombre": "lucas"; "edad": 33}

¿en qué casos usamos esta funcionalidad? 
- Cuando está previsto hacer actualizaciones

¿qué problema tiene esto?
Perdemos mucho espacio

Si la base de datos se fragmenta: Necesitamos COMPACTADO !!!
    > |{ "nombre": "ivancete2",*b23444 }  |{ "nombre": "lucas"; "edad": 333333333 }|{ "edad": 44 }
    > |{ "nombre": "ivancete2","edad": 44 }    |{ "nombre": "lucas"; "edad": 333333333 }|

AMAZON ! < Cambiar el stock
            Cambiar los datos de contacto
            Cambiar el estado de un pedido... si es que lo guardo en Mongo
            Actualizar una cantidad del carrito de la compra
            
        Creaciones y borrado

WALLAPOP
    
    ANUNCIO ???
    ANUNCIO NUEVO
    ANUNCIO DE BAJA
    
    USUARIO
    
    BUSQUEDAS FAVORITAS
    
---

Por qué preferimos interfaces de linea de comandos en lugar de interfaces gráficas? AUTOMATIZAR !!!!!!
                                                                                    Potentes

Crear una BBDD para una app.
    Entrar en una interfaz gráfica y apretar botones | "Script" > Control de versión GIT, SVN, CVS
    >> mongosh: sqlplus de Oracle; mysql de MySQL
    mongo: deprecated