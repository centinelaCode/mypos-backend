import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

import { hashPassword } from '../helpers/hashPassword.js'
import generarId from '../helpers/generarId.js'

const db = new PrismaClient()


//! ====== REGISTRAR USER =========
const registrar = async (req, res) => {
   const { email } = req.body

   //? Validando que no exista el email
   const existUser = await db.usuario.findFirst({
      where: {
         email
      }
   })

   if(existUser){
      const error = new Error('El email ya se encuentra registrado')
      return res.status(400).json({ msg: error.message })
   }

   //? procedemos a crear y guardar el nuevo usuario en la DB
   try {
      const { nombre, email, password } = req.body;

      //? hasheamos el password
      const passwordHasheado = await hashPassword(password)

      //? guardamos el nuevo usuario en la db
      const newUser = await db.usuario.create({
         data: {
            nombre,
            email,
            password: passwordHasheado,
            token: generarId()
         }
      })
      await db.$disconnect()

      res.json(newUser)
   } catch (error) {
      console.error(error)
      await db.$disconnect()
      process.exit(1)
   }
}
//! ====== -------------- =========



//! ====== GET ALL USERS =========
const getUsers = async (req, res) => {

   //? procedemos a obtener todos los usuarios activos
   try {

      //? obtenesmo todos los usuarios activos de la DB
      const users = await db.usuario.findMany({
         where: {
            activo: true
         },
         select: {
            id: true,
            nombre: true,
            email: true,
            telefono: true,
            cargo: true,
            confirmado: true,
            activo: true,
         }
      })
      await db.$disconnect()

      res.json(users)
   } catch (error) {
      console.error(error)
      await db.$disconnect()
      process.exit(1)
   }
}
//! ====== -------------- =========


//! ====== AUTHENTICAR USER =========
const autenticar = async (req, res) => {

}
//! ====== -------------- =========



export {
   registrar,
   getUsers,
   autenticar,
}
