# Instalar nginx con Docker

Servidor web: 80 < http

# descargar la imagen del contenedor de nginx:latest

$ docker pull nginx:latest

# crear un contenedor con esa imagen

$ docker container create -p 8080:80 --name minginx nginx:latest
    NAT: Redirección de puertos

# arrancar el contenedor

$ docker start minginx

# Permite hacerlo todo de golpe

$ docker run  -p 8080:80 -d --name minginx nginx:latest

# Datos del contenedor

$ docker inspect minginx


curl http://www.google.es/


# Instalar mongodb

$ docker run -d --name mimongo mongo:latest     # Aquí no tengo control real de qué instalo
                                    :6.0.1      # Aquí tengo control total
                                    :6.0        # Aquí tengo la ultima 6.0 que haya : PRODUCCION: GUAY !
                                    :6          # Aquí se me actualizan hasta los minors
                                        6.0
                                        6.1
                                        6.9

6.0.1
6.1

$ docker run -d \
    -p 27017:27017 \
	-e MONGO_INITDB_ROOT_USERNAME=usuario \
	-e MONGO_INITDB_ROOT_PASSWORD=password \
    --name mimongo \
    mongo:latest

----
Tipos de software:
- Sistema Operativo
- Aplicación                Word, Excel , Visual Studio
- Driver                    
----
- Demonio                   Actualizador del Sistemaoperativo, Indexador de disco
- Servicio                  Servidor web, Servidor de BBDD
- Comando                   Compilador, Interprete: python, ls
- Scripts                   Programa chorra que ejecuta 4 tareas
- Libreria                  
---

YAML
    Docker-compose
    Archivo de configuración de Mongo
JSON
    Mongo
Contenedores
    Docker
        Docker-compose > Instalación de Mongo,  Mongo-Express (Cliente WEB)
    Kubernetes

Clientes de mongo:
- Mongo-Express (Cliente GUI WEB)
- Mongo-Compass (Cliente GUI de escritorio)
- mongosh (Cliente CLI)                         √√√√√√√√
    - script JS !

Odiamos las interfaces gráficas ... por qué?
    - No tienen capacidad de AUTOMATIZAR
    - Menos potencia

MongoDB NoSQL                     BBDD relacional . Están guay cuando mis datos los puedo encajar en una tabla!
- Bases de datos                    Bases de datos
    - Colecciones - Esquema             Tablas - Esquema de datos
        - Documentos                        Registros -> Filas
           - Campos                           Campos -> Columnas
        - Indices                           Indices


Tabla -> Disco (Archivo)

De cuantas formas se puede atacar a un archivo?
- Acceso secuencial *** Un cambio implica una reescritura del archivo. Cómodo... pero muy ineficiente
- Acceso aleatorio  *** Muy eficientes

En MongoDB no es necesario definir un esquema para cada colección. Mongo lo calcula dinámicamente... y de forma extraflexible!
2 documentos en Mongo, dentro de la misma colección pueden tener campos diferentes,
                       incluso el mismo campo con distintos tipos de datos


Bases de datos: Tabla
1, registro 1 - filas
2, registro 2 - filas
3, registro 3 - filas

Optimizado para modificaciones
Nuevas escrituras... Lo mete al final del fichero .... guay... super rápidito
Lecturas secuenciales... pues es lo que hay... Fichero de principio a fin... más vale que tenga un HDD guay !!!
Lecturas aleatorias: ID 17
    (búsquedas)      Nombre: Ivan
                     Edad: 44
Las queries en las tablas de las BBDD son extraordinariamente horribles y ruinosas !!!! TOTAL !!!!
Son malas de cojones !!!!!! Me tengop que leer el fichero de arriba a abajo!

Particiones < GUAY... me leo solo un trozo del fichero... 
                      siempre que busque por el campo que he usado para particionar... sino RUINA !!!!

Índice!!! Fichero independiente
Copia ordenada de los datos en otro sitio(fichero) con ubicaciones.

Cada vez que abris el libro de recetas cocina!

800 páginas de recetas
    En la página de la receta: Bacalao rebozao
1 o varios índices:
- Tipos de plato
    Entrante
        Bacalao rebozao                     Pag 174
    Primero
    Segundo
    Postre
- Ingrediente principal
    Pasta
    Cordero
    Atún
    Bacalao
        Bacalao al pilpil
        Bacalao rebozao                     Pag 174
                                            ^^^^^^^
                                            Ubicación

Que problema tengo al buscar en una tabla? La tengo que leer entera: FULL SCAN
Qué me vendría bien? Tener los datos Ordenados... por qué?  Diccionario !!!!! 10.000
    Jamón
        Búsqueda binaria! A la mitad: M ... pero me quito ya la mitad de los datos! 5.000
        A la mitad de nuevo:          F ... Me he pasao ... pero me quito otros 2500 datos.
        
Cómo optimizo una búsqueda binaria... Abro la mitad? No... tiro hacia donde la cabeza me indica que está la letra
        C -> Al principio parto                                         v
        Q -> Abro hacia el final                                        v
                                                                    ESTADISTICAS

Tabla no es un Libro        --- Qué diferencia a los índices y las Tables del resto? Admiten actualizaciones.
Ni un indice 4 páginas        /

Cómo sé la posición de una fila? ROWID, ID (publico)


INDICE
---------------
34      ROWID


39      98


56      3


57      19


58      4


62      20



65      18
---------------



---

Representación de datos en MongoDB

{
    "Nombre":   "Ivan"
    "Apellido1":
    "Apellido2":
    "Fecha de nacimiento":
    "Email":
    "Contraseña":
    "Telefono":
    "Hijos": [
         { 
              "Nombre":
              "Apellido 1":
              "Apellido 2":
              "Edad": 3
          },
         { 
              "Nombre":
              "Apellido 1":
              "Apellido 2":
              "Edad": 4
          }
    ]
}          