import express from 'express';
import dotenv from 'dotenv'

import usuarioRoutes from './routes/usuariosRoutes.js'
import categoriaRoutes from './routes/categoriasRoutes.js'
import articulosRoutes from './routes/articulosRoutes.js'

const PORT = process.env.PORT || 4000;

const app = express()
dotenv.config();                           //? Enable dotenv
app.use(express.json());                   //? Enable parcer



//! ======= Routing =======
app.use('/api/usuarios', usuarioRoutes)
app.use('/api/categorias', categoriaRoutes)
app.use('/api/articulos', articulosRoutes)



//! ======= Listen Server =======
app.listen(PORT, () => {
   console.log(`Server run on Port ${PORT}`)
})


