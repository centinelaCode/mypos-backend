import db from '../config/db.js'
import jwt from 'jsonwebtoken'

const checkAuth = async(req, res, next) => {
   let token;

   if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      try {
         token = req.headers.authorization.split(' ')[1]
         const decoded = jwt.verify(token, process.env.JWT_SECRET)

         //? creamos en el req la variable usuario y con payload(id) obtenemos el usuario
         req.usuario = await db.usuario.findFirst({
            where: {
               id: decoded.id
            },
            select: {
               id: true,
               nombre: true,
               email: true,
            }
         })
         await db.$disconnect()

         // console.log(req.usuario)

         return next()
      } catch (error) {
         await db.$disconnect()
         return res.status(404).json({ msg: 'Hubo un error'})
      }
   }

   //? cuando no se envia el token
   if(!token) {
      const error = new Error('Token no válido')
      res.status(401).json({ msg: error.message })
   }

   next()
}

export default checkAuth
