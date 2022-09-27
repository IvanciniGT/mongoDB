# Entornos de producción
- Alta disponibilidad
    Ofrecer un determinado tiempo de servicio (tolerancia a fallas) / O Intentarlo al menos
        99,9% -  8 horas al año

    Evitar la perdida de información / O Intentarlo al menos
- Escalabilidad


Maquina 1: POF !!!! Se le va la fuente de alimentación
    MongoDB
        Usuarios    POF !!!! HDD
            Cabina de almacenamiento externo
            RAID

# ReplicaSet   

Se establecen a nivel de Colección

Tener los datos replicados

    Mongo 1.  CATAPLOF !!!
        Usuarios     (PRIMARIO)         ---> leer (usuario 17)
                       25 |             <--- mete el (usuario 25)            SON MAS LENTAS
    Mongo 2               V  
        Usuarios     (REPLICA)          ---> leer en paralelo (usuario 23)   PUEDEN SER MAS RAPIDAS
                                        <--- mete en paralelo el (usuario 33) NO PUEDO HACERLO
                     
    Mongo 3 (QUORUM) ! BRAIN SPLITTING


La réplica sirve para 2 cosas:
1. Mongo la convertirá en PRIMARIA si el PRIMARIO no responde
2. Puedo solicitar a Mongo que permita hacer búsquedas en la REPLICA... 
    JAMAS DE LOS JAMASES HARÁ ACTUALIZACIONES... solo replicaciones

    Podría dejar la replicia para hacer BACKUPS

Los replicaset nos ofrecen ALTA DISPONIBILIDAD... y una escalabilidad REDUCIDA


-------
                                    
                                        |  IP_Mongo (VIPA)?
                                        |--IP1---Maquina1         nodos: maquina1 y maquina2. Primario por defecto: Maquina1
                                        |            Mongo1             ^                        pero requiere al menos de 1 voto para ejercer
    APP1------------>BC?--------------- |                Usuarios       |
      IP_Mongo                          |                               |
                                        |                               |
                                        |--IP2---Maquina2  *      nodos: maquina1 y maquina2. Primario por defecto: Maquina1
                                        |            Mongo2                                      pero requiere al menos de 1 voto para ejercer
                                        |                Usuarios       Timeout: 5 minutos
                                        |
                                        |
                                        |--IP3---Maquina3          nodos: maquina1 y maquina2. Primario por defecto: Maquina1
                                        |           Mongo3                                      Dales voto!
                                                        Usuarios?
                                                            SI: una máquinas más SECUENDARIA
                                                            NO: Arbiter (solo tiene derecho a voto) - Menos recursos
                                        
NIC - virtualización a nivel de hardware
Puede presentarse a una red con distintas MAC-ADRESS

MAQUINA 1
        Se presente a una red, como si fueran 2 tarjetas de red
            Interfaz de red 1 - NIC1 -IP1       192.168.1.101
            Interfaz de red 2 - NIC1 -IP2       192.168.1.100  
MAQUINA 2
        Se presente a una red, como si fueran 2 tarjetas de red
            Interfaz de red 1 - NIC1 -IP1       192.168.1.102
            Interfaz de red 2 - NIC1 -IP2       192.168.1.100  OFF
        Pongo a correr un demonio de tipo HEARBEAT:
            Hace cada X segundos una petición a mongo.prod.miempresa.es
            Si no responde en tanto tiempo
                Activa la interfaz de red 2
            
DNS: 
192.168.1.100       mongo.prod.miempresa.es
            
            
    
Servidor
    NIC 1 --- BOND -> NIC A. ---- Interfaz de RED SO 1
    NIC 2 --/                \--- Interfaz de RED SO 2
    
    
# FRAGMENTACION: Shards
También se establece a nivel de colección -> Equivalente a particionar una tabla en una BBDD Relacional
                                    
                                        |-IP1- Maquina 1                --- Minimo maquinas datos: 3.... Tropetantas
                Router Mongo 1----IPR1--|        Usuarios1 *
                                        |        Usuario2'
                                        |        Usuario3'
                                        |-IP2- Maquina 2
                Router Mongo 2----IPR2--|        Usuarios2 *
                                        |        Usuario1' 
                                        |        Usuario3' 
                                        |-IP3- Maquina 3
                                        |        Usuarios3 *
                                        |        Usuario1'
                                        |        Usuario2'
                                        |
    APP1--------------------------------|--- ConfigServers Mongo x 3                                    
      IPR1, IPR2                                Son los que deciden a que partición van los datos
                                                    HASH -> _id -> 0..... y 5.....      Usuarios1
                                                    HASH -> _id -> 5..... y a.....      Usuarios2
                                                    HASH -> _id -> b..... y f.....      Usuarios3
                                                    
                                                    HASH -> pais -> españa --> 10289371     Pais1
                                                    HASH -> pais -> italia --> 22222891     Pais2

Caso fallo catastrofico:
    1 router
    2 confiservers
    2 data

Router Mongo: mongos
      
Cuando trabajamos con shards, tenemos una CLAVE DE SHARDING o de enrutamiento
   AQUI USAMOS Los algorimos (indices de tipo HASH)

He mejorado la escalabilidad? Si, un huevo !!!!
Que pasa aquí con la HA? Aquí no hay. PERO LA HA es MUCHO MAS IMPORTANTE que la Escalabilidad


Si mi app no requiere escalado:
-> ReplicaSet: primario + N Secundarios

Si mi app crece con el tiempo en peticiones de forma contenida:
-> Escalado Vertical (MAS MAQUINA)
   ReplicaSet: primario + N Secundarios

Si mi app crece y decrece con el tiempo en peticiones de forma descontrolada:
-> Escalado Horizontal (MAS MAQUINAS)
   Sharding + ReplicaSet: FOLLON !!!!


En la realidad, la instalación de Mongo ----> Cluster de Kubernetes
    Quiero 2 routers
    Quiero 3 configservers
    Quiero de 3 a 17 Datas
    
    
2 opciones de backup
 1- Copiar los archivos de la BBDD /var/mongo --->  Backup FRIO
 2- mongodump                                 --->  Backup FRIO y en CALIENTE *** Sin shards
 
La opción recomendada, sobre todo para BBDD grandes es FRIO, por rapidez y consistencia de la información

Restore
 1- Restauro los archivos de la BBDD
 2- mongorestore
 
 
----
Aunque tenga alta disponibilidad y datos replicados necesito un BACKUPS !!!!!

3xReplicacion = Backup 1?

Algún chalao borra los documentos de una colección... que pasa con las replicas... en todas se borran

PRIMARIO
SECUNDARIOS
    1 secundario BI < Pegate ahí
    
dump -> restore
ETL
DATAWAREHOUSE


Maquina muy gorda: Maquinas virtuales
                        Mongo1
                        Mongo2