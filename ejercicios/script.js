use producccion;

produccion.carrito.insertOne(
    {
        "_id":   18274628264,
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
