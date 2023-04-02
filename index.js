//crear un objeto express (representa biblioteca)
const express = require('express');

// crear un objeto que represente la biblioteca
const app = express();
//para usar datos en json
app.use(express.json());
//definir cors para header
app.use(
        (req,resp, next)=>{
        resp.header("Access-Control-Allow-Origin", "*");
        resp.header("Access-Control-Allow-Methods", "GET,POST");
        resp.header("Access-Control-Allow-Headers", "Content-Type");
        next();
        }
    )

//definir los entry point(puntos de entrada/rutas/urls) de la api
app.get(
    '/',
    (req, resp)=>{
        //To do(por hacer): lo de aqui se ejecuta
        console.log("Alguien se conecto a esta ruta vacia")
        response.json("Bienvenido al sistema principal")
    }
);

app.post(
    '/suma',
    //se requieron dos objetos
    // uno representando la peticion o datos de la peticion y otro representando la respuesta
    (req, resp)=>{
        //To do(por hacer): lo de aqui se ejecuta
        console.log("Alguien se conecto a esta ruta"+" suma");
        console.log(req.body);
        const Num1 = parseFloat(req.body.Num1)
        const Num2 = parseFloat(req.body.Num2)
        const suma = Num1 + Num2
        resp.json(suma)
    }
);

app.post(
    '/suma/multiple',
    //se requieron dos objetos
    // uno representando la peticion o datos de la peticion y otro representando la respuesta
    (req, resp)=>{
        //To do(por hacer): lo de aqui se ejecuta
        console.log("Alguien se conecto a esta ruta"+" suma");
        console.log(req.body);
        const request = req.body
        let suma = 0;
        for(i in request){
            var a = request[i];
            console.log(a);
            suma = suma + a;
        }
         console.log(suma);

        resp.json(suma)
    }
);

app.post(
    '/resta',
    (req,resp)=>{
        const request = req.body
        const Num1= parseFloat(req.body.Num1);
        const Num2= parseFloat(req.body.Num2);
        console.log("Se contectaron a la ruta de resta el mensaje enviado fue: "+ req.body)
        let resta = Num1 - Num2

        resp.json(resta);

    }
)


app.post(
    '/multiplicacion',
    (req,resp)=>{
        const request = req.body;
        const Num1 = parseFloat(req.body.Num1)
        const Num2 = parseFloat(req.body.Num2)
        console.log("Se conectaron a la ruta de multiplicacion")
        let result = Num1 * Num2;

        resp.json(result)
    }
)


app.post(
    '/div',
    (req,resp)=>{
        const request = req.body
        const Num1 =parseFloat(req.body.Num1);
        const Num2 =parseFloat(req.body.Num2);
        console.log("Se conectaron a la ruta de division");
        let result = Num1 / Num2;

        resp.json(result)
    }
)
//crear un servicio para recibir peticiones y conocer activacion de servidor 
app.listen(
    3000,
    ()=>{
        console.log("servidor ejecutandose en el puerto 3000")
    }
)