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
- Scripts
- Libreria                  
