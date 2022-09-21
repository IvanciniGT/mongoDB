Cluster: MongoDB        BBDD Relacionales
    Colección           Tabla   < Esquema rígido desde el principio
        Docuemntos          Registros / Filas
            Campos              Campos / columnas
    Asociamos índices   Asociamos índices

Los Documentos JSON de una misma colección no tienen por qué ser iguales.
- Pueden tener campos distintos
- El mismo campo puede tener distintos tipos de valores

---

La arquitectura de moda hoy en día el el mundo del desarrollo de sistemas cliente - servidor:
MICROSERVICIOS

# Microservicio:
    Programa con una funcionalidad muy acotada y que es autónomo. API de comunicación IN/OUT HTTP-REST.
    
HTTP: Protocolo de comunicación basado en TCP/IP

HyperText Tarnsfer Protocol HTTP + HTML -> Tim Berners Lee (WEB) -> W3C (CSS, XML, XSL...)

Protocolo? Conjunto de reglas que posibilitan una comunicación.
HTTP-> Un contenido (un fichero HTML) lo mete en una caja... y le pone una pegatina por fuera!
Una pegatina con metadatos acerca del envío:
- Tamaño
- Lo que hay dentro (tipo) html, css, imagen
- Status Code:
    - 2??   OK
    - 3??   Redirecciones
    - 4??   Errores de cliente
    - 5??   Errores de servidor

----> Request ---> Servidor WEB ----> Response ---->
       Metodo:
        GET     < Consulta de cualquier WEB
        POST    < Envío de información con un formulario
        ------
        HEAD
        PUT
        DELETE
        
Aplicación PASO !!!!
Sistema: conjunto de muchas apps de front end y microservicios

Netflix:                                                        NETFLIX COMPANY !!!!
- Navegador             App1\                |      Programa de login
- Android               App2-                |         v
- Iphone iOS            App3-  INTERNET      |      Programa de pagos
- PS4                   App4-   red          |      Programa de descarga de pelis
- Tele                  App5-                |      Programa de favoritos

HTTP <> HTML?

Banco:                                                          BANCO COMPANY !!!!
- Navegador             App1\                |
- Android               App2-                |
- Iphone iOS            App3-  INTERNET      |
- Ordenadores empleados App4-   red          |
- Tele                  App5-                |
- Cajero automático
- TPV
- Telefono
 
---
sitio web que vende productos : AMAZON !!! Tienda d repuestos de barrio !!!

Productos: Ficha < Datos de la ficha son datos estructurados? Pueden... parte ....
Y tienen la misma estructura? NI DE COÑA !!!!!

Almacenamiento... es barato? CARO DE NARICES !!!!! 100 ordenadores en paralelo - 50 HDD
                                                                                 10 NVME
CEPH

HTML - marcas
<p>
<b>
<strong>
<ol>
<ul>
<li>
<img>
<style>  Letra arial de 15 puntos-... Naranja


SOA
SOAP <> xml

REST <> json


tomcat
wildfly
Jboss
Weblogic
Websphere
IIS



Springboot


Cliente
    Dirección 1
    Dirección 2
    z
    
    