import {http} from "./http"
import "./websocket/client"
import "./websocket/admin"

http.listen(8000, () => console.log('Server is running on port 8000'))



/**
 * GET = Buscas
 * POST = Criação
 * PUT = Alteração
 * DELETE = Deletar
 * PATCH = Alterar uma informação especifica
 */

// app.get("/", (req, res) =>{
// return res.json({ 
//     message:"Olá NLW 85"
// })
// })

// app.post("/", (req,res) =>{
//     return res.json({
//         message: "Usuário cadastrado!"
//     })
// })

