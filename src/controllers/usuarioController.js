import { PrismaClient } from '@prisma/client'

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
      const newUser = await db.usuario.create({
         data: req.body
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



export {
   registrar
}
