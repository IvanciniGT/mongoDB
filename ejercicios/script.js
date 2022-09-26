use producccion;
                   
produccion.carrito.insertOne(
    {
        "_id":   18274628264, // ID del usuario
        "discounts": 
            [
                {
                    "tipo": "código promocional-Black friday",
                    "importe": "5%"
                },
                {
                    "tipo": "reembolso",
                    "importe": 15
                }
             ],
        "products":
            [
                {
                    "product_id": 98237982379,
                    "cantidad": 2,
                    "date": "10-abril"
                },
                {
                    "product_id": 981209289,
                    "cantidad": 200,
                    "date": "11-abril"
                }
            ]
    }
);

produccion.carrito.find({ "_id": 18274628264 });          // SELECT * FROM carrito

//----

{ 
    "_id": 123456, 
    "nombre": "Antonio", 
    "apellido1": "Antúnez", 
    "apellido2": "Román", 
    "telefono": "952111222", 
    "email": "aantunez@minsait.com", 
    "password": "123456", 
    "dni": "25444555G", 
    "fecha nacimiento": "20-Jun", 
    "direcciones": [ 
        { 
            "envio": true,  
            "facturacion": true,  
            "calle": "Arenisca", 
            "numero": 9, 
            "Portal": 1, 
            "piso": 3, 
            "puerta": 2, 
            "localidad": "Málaga", 
            "provincia": "Málaga", 
            "código postal": 29006 
        } ,
        { 
            "envio": true,  
            "facturacion": false,  
            "calle": "Arenisca", 
            "numero": 9, 
            "localidad": "Málaga", 
            "provincia": "Málaga", 
            "código postal": 29006 
        } 
    ], 
    "datos_pago":  [ 
            { 
                "tipo": 1,        // 1-Tarjeta. "Schema" de Validación
                "numero": "4879-7897-7897-7897", 
                "caducidad": "nov-2023", 
                "cvv": 1245 
            }, 
            { 
                "tipo": 1, 
                "numero": "4879-7897-7897-7898", 
                "caducidad": "nov-2025", 
                "cvv": 9876
            }, 
            { 
                "tipo": 2, 
                "email": "antonio@gmailcom" 
            }, 
            { 
                "tipo": 3, 
                "telefono": "666555444" 
            } 
        ] 
}
