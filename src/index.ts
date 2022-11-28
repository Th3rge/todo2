import express from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import createUser from './endpoints/createUser'

const app = express()

app.use(express.json())
app.use(cors())


app.put("/user", createUser)

const server = app.listen(process.env.PORT || 3003, () => {
    if(server){
        const address = server.address() as AddressInfo
        console.log(`Server listening on ${address.address}:${address.port}`)
    } else {
        console.error("Failure upon starting server")
    }
})
