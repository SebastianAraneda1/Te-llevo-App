module.exports = function(){
    var data = {
        usuarios:[
            {
                id: 1,
                nombre: "Alan",
                contrasena: "1234a",
                email: "alan@user.com"
            },
            {
                id: 2,
                nombre: "Leno",
                contrasena: "abcd",
                email: "leno@user.com"
            }
        ],

        autos:[
            {
                id: 1,
                patente: "AA1234",
                destino: "Madreselvas, Macul",
                cantPasajeros: 2,
                precio: 1000
            },
            {
                id: 2,
                patente: "ABCD12",
                destino: "Retonda Grecia, Grecia",
                cantPasajeros: 4,
                precio:1500
            }
        ]
    }

    return data;
}