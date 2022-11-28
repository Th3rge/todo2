import express from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import createUser from './endpoints/createUser'
import getUserById from './endpoints/getUserById'

const app = express()

app.use(express.json())
app.use(cors())


app.put("/user", createUser)
app.get("/users/:id", getUserById)

const server = app.listen(process.env.PORT || 3003, () => {
    if(server){
        const address = server.address() as AddressInfo
        console.log(`Server listening on http://localhost:${address.port}`)
    } else {
        console.error("Failure upon starting server")
    }
})
