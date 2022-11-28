import {Request, Response} from 'express'
import insertUser from '../data/insertUser';

export default async function createUser(req: Request, res: Response){
    try{
        
        const {name, email, nickname} = req.body;
        
        if(!name || !nickname || !email){
            res
                .status(400)
                .send("Preencha os campos 'name', 'email' e 'nickname'")
        }

        const id = Date.now() + Math.random().toString()

        await insertUser(
            id,
            name,
            email,
            nickname
        )


        res
            .status(200)
            .send("Usuário criado com sucesso!")

    }catch(e: any){
        res.sendStatus(400).send({
            message: e.message || e.sqlMessage
        })
    }
}