import {Router} from "express";
const endpoints =Router();

endpoints.get('/Somar', (req,resp) => {
    let n1 = Number(req.query.n1)
    let n2 = Number(req.query.n2)

    let total = n1 + n2;

    resp.send({
        message: `O total é de ${total}`
    })
})


        


export default endpoints;