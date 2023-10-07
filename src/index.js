import express from 'express';
import usuarioRoutes from './routes/usuariosRoutes.js'

const PORT = process.env.PORT || 4000;

const app = express()

//! ======= Routing =======
app.use('/api/usuarios', usuarioRoutes)



//! ======= Listen Server =======
app.listen(PORT, () => {
   console.log(`Server run on Port ${PORT}`)
})


