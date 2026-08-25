import { Router } from "express";
const endpoints = Router();

endpoints.post('/cinema/:tipo/:quantidade', (req, resp) => {
    let tipo = req.params.tipo;
    let quantidade = Number(req.params.quantidade);

    let valor = 28.50;

    if (tipo.toLowerCase() === 'meia') {
        valor = valor / 2;
    }

    let total = valor * quantidade;

    resp.send(O total a pagar é R$ ${total});

    endpoints.post
});



export default endpoints;