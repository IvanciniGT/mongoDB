// Seleccionar / Precrear la BBDD si no existe
use cursito;

// Buscar todos los documentos que hay en "cursito" dentro de la colección "usuarios"
db.usuarios.find();

// Hemos creado una colección implicitamente.... Al usarla... pero ésto no nos da opción de configurar.
db.usuarios.insertOne(
{
    "nombre": "Ivan",
    "apellidos": "Osuna Ayuste",
    "edad": 44,
    "fecha nacimiento": ISODate("1978-08-27")
                     // ISODate("1978-08-27T00:00:00.000Z")
}
);

// Crear una colección explicitamente
db.createCollection("personas",{
    validator: { /*Esquema de validación TRIGGER */
        $jsonSchema: {
            bsonType: "object", // Un documento
            required: [
                "nombre",
                "edad",
                "email",
                "edad hermano mayor"
            ],
            properties: {
                nombre: {
                    bsonType: "string",
                    description: "Campo requerido indicando el nombre del usuario",
                    // Validaciones
                    minLength: 2        // maxLength
                },
                edad: {
                    bsonType: "int", // 32 bits = 4 bytes: Algo más de 4 mil millones 2^32
                    minimum: 0,
                    maximum: 150,
                    description: "Campo requerido indicando la edad del usuario, entre 0 y 150, incluidos"
                },
                email: {
                    bsonType: "string",
                    pattern: "^[A-Za-z0-9._-]+@[A-Za-z0-9._-]+[.][A-Za-z0-9]{0,5}$",
                    description: "El email es obligatorio y debe ser válido"
                },
                apellidos: {
                    bsonType: "string"
                },
                "fecha nacimiento": {
                    bsonType: "date"
                },
                "edad hermano mayor": {
                    bsonType: "int",
                    minimum: 0,
                    maximum: 150,
                    description: "Campo requerido indicando la edad del hermano mayor del usuario, entre 0 y 150, incluidos"
                }
            }
        }
    }
})
// Hemos creado una colección implicitamente.... Al usarla... pero ésto no nos da opción de configurar.
db.personas.insertOne(
{
    "nombre": "Trini",
    "apellidos": "García",
    "edad": 34,
    "fecha nacimiento": ISODate("1978-08-27"),
    "email": "ivan@ivan.com",
    "edad hermano mayor": 23
}
);

// Edades: "32" x 2 bytes UTF-8
//          32  x 4 bytes

// Modificar la colección:
db.runCommand( 
{ 
    collMod: "personas" ,
    "validator": {
        // Tipo de validación que se asegura de que una Expresión SE CUMPLE !
        $and: [
                {
                    $expr:{
                        // https://www.mongodb.com/docs/manual/reference/operator/query/
                        $lt: ["edad", "edad hermano mayor"]
                        // $gt
                        // $gte
                        // $lte
                        // $in 
                        // $nin 
                        // $ne
                        // $eq
                        // $exists
                        // $type
                        //personas.edad < personas.edad_hermano_mayor
                    }
                
                },
                // tipo de validación que comprueba que el documento cumple con un esquema!
                {
                $jsonSchema: { 
                    bsonType: "object", // Un documento
                    required: [
                        "nombre",
                        "edad",
                        "email",
                        "edad hermano mayor"
                    ],
                    properties: {
                        nombre: {
                            bsonType: "string",
                            description: "Campo requerido indicando el nombre del usuario",
                            // Validaciones
                            minLength: 2        // maxLength
                        },
                        edad: {
                            bsonType: "int", // 32 bits = 4 bytes: Algo más de 4 mil millones 2^32
                            minimum: 0,
                            maximum: 150,
                            description: "Campo requerido indicando la edad del usuario, entre 0 y 150, incluidos"
                        },
                        email: {
                            bsonType: "string",
                            pattern: "^[A-Za-z0-9._-]+@[A-Za-z0-9._-]+[.][A-Za-z0-9]{0,5}$",
                            description: "El email es obligatorio y debe ser válido"
                        },
                        apellidos: {
                            bsonType: "string"
                        },
                        "fecha nacimiento": {
                            bsonType: "date"
                        },
                        "edad hermano mayor": {
                            bsonType: "int",
                            minimum: 0,
                            maximum: 150,
                            description: "Campo requerido indicando la edad del hermano mayor del usuario, entre 0 y 150, incluidos"
                        }
                    }
                }
            }
        ]
    }
})

// OJO !!!!:

// Que pasaría si modifico un esquema en una colección?
// Lo que no cumpla fallará... Lo nuevo seguro... y lo que ya esté? No se ele aplica el esquema

