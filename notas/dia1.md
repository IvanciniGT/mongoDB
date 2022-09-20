# Contenedores

Un entorno aislado dentro de un SO Linux donde ejecutar procesos.
Aislado?
- Su propia configuración de red
- Limitación de acceso a los recursos HW de la máquina
- Sus propias variables de entorno
- Su propio sistema de archivos

Este entorno aislado me resuelve muchos de los problemas que también me resolvían las máquinas virtuales.
---

# Modelo basado en Contenedores 

App1 | MongoDB
----------------
C1   | C2
----------------
Gestor de contenedores:
Docker, Podman, CRIO, ContainerD
----------------
   SO Linux
----------------
    HIERRO

---
Los contenedores se crean desde IMAGENES DE CONTENEDOR:

Un triste fichero comprimido (TAR) con un(o varios) programas YA INSTALADOS Y CONFIGURADOS por alguien que sabe un huevo de esos programas.
----
Las imágenes de contenedor se guardan y descargan de lo que llamamos un REGISTRY de REPOSITORIOS de IMAGENES DE CONTENEDOR: docker hub


Instalar mongo en mi ordena?
Preparar dependencias.
Descargo de la web de mongo: INSTALADOR
Instalar-> Instalación de mongoDB

mongoDB-> Carpeta en mi HDD. C:\Archivos de programa\Mongo -> ZIP
---
Entorno de producción:
- Alta disponibilidad: 
    Intentar garantizar un tiempo de servicio pactado contractualmente.
    Intentar garantizar la NO PERDIDA de información
    Alta disponibilidad: 90%. RUINA !!!! 36 dias/año con el sistema OFF     | €
                         99%  RUINA TAMBIEN! 3,6 dias / año... peluquería   | €€
                         99.9% BUENO !      8 horas / año                   | €€€€€€
                         99.99% Minutos al año                              V €€€€€€€€€€€€€€€


    REPLICACION
    - Datos
    - Procesos  ---- Cluster
    - Hardware  ---/

- Escalabilidad:
    Capacidad de ajustar las características del entorno a las necesidades de cada momento.

    APP3: INTERNET/minutos/horas
    Dia n       10
    Dia n+1     1000000       
    Dia n+2     100
    Dia n+3     2000000       

    Telepizza. Partido Madrid-Barça
    Entradas
    PCComponentes: Black Friday x 8 infra

    Clusters activo-activo / clouds < Alquilar máquinas bajo demanda, PAGO POR USO

    AUTOMATIZAR -> Hardware "Terraform"
                -> Despliegues: KUBERNETES (Openshift)

    Kubernetes < Quiero un Mongo -> Configuración
                 del que necesito entre 2 y 27 instancias, según uso. CPU, RAM
                 50% CPU Otra instancia
    Maquina 1
        CRIO, ContainerD (Eqv. Docker)
            Mongo1----> Almacenamiento externo1
            Mongo2----> Almacenamiento externo1
            Mongo3----> Almacenamiento externo1
            Mongo4----> Almacenamiento externo1
    
    ....
    Maquina N
        CRIO, ContainerD (Eqv. Docker)
            Mongo2----> Almacenamiento externo2

        Almacenamiento siempre es externo



Los datos en un entorno de producción tienden a almacenarse TRIPLICADOS ! al menos. MONGO !
MongoDB: Replica set
ESCALABILIDAD: Shards: Particiones

Mongo1  Coleccion1_P1 + Coleccion1_P2-R1 + Coleccion1_P3-R2
Mongo2  Coleccion1_P2 + Coleccion1_P1-R1 + Coleccion1_P3-R1
Mongo3  Coleccion1_P3 + Coleccion1_P1-R2 + Coleccion1_P2-R2

Routing: Algoritmo por el cual un documento(Registro-fila) -> Partición


Cluster:
Activo-Pasivo: 2 servidores iguales... si se cae el activo, activo el otro.
Activo-Activo: 2-n servidores dando servicio simultáneamente.

Serv. Web1  <<<<
Serv. Web2  <<<<  Balanceador de carga  <<<----  Clientes
Serv. Web3  <<<<


---

Kubernetes, Openshift


----
App1 -> 100% CPU -> MongoDB

---
entonces no puedo correr contenedores en Windows? Si, y en MacOS, con truco.
Docker desktop Windows y MacOS -> 
    Windows montar una maquina virtual en hyperV con un kernel de Linux
    Windows se usa en lugar de hyperV , WLS


Linux? Un kernel de SO, basado en la especificación de UNIX?

Qué es Unix? Una especificación de cómo montar un SO: SUS + POSIX

Qué era Unix? Un Sistema Operativo creado por los lab. Bell de AT&T

---
HP: HP-UX Unix®
IBM: AIX Unix®
Oracle: Solaris Unix®
Apple: MacOS Unix®
---
386BSD-> netBSD, freeBSD
GNU/Linux.... Linux
70% 30%
---
Android. Que rueda un kernel de Linux, con librerías de google, sin GNU
---
SO: kernel:         DOS-> MSDOS, Windows2, Windows3.11, Windows 95,
                           98,Millenium
                    NT -> NT, XP, Server, Windows 7, 8, 10, 11
SO: shells CLI      powershell, simbolo de sistema
SO: Shell GUI       fluent design
SO: Utilidades      bloc de notas, buscaminas, edge

Una especie de máquina virtual.

Usamos el mismo sistema operativo del host.

Como una máquina virtual pero para apps