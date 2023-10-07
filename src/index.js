import express from 'express';
import dotenv from 'dotenv'

import usuarioRoutes from './routes/usuariosRoutes.js'

const PORT = process.env.PORT || 4000;

const app = express()
dotenv.config();                           //! Enable dotenv
app.use(express.json());                   //! Enable parcer



//! ======= Routing =======
app.use('/api/usuarios', usuarioRoutes)



//! ======= Listen Server =======
app.listen(PORT, () => {
   console.log(`Server run on Port ${PORT}`)
})


