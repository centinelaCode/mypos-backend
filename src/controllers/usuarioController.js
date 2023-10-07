import { PrismaClient } from '@prisma/client'

const db = new PrismaClient()


//! ====== REGISTRAR USER =========
const registrar = async (req, res) => {

   try {
      const dataUser = req.body
      const newUser = await db.usuario.create({
         data: dataUser
      })
      await db.$disconnect()

      res.json(newUser)
   } catch (error) {
      console.error(e)
      await db.$disconnect()
      process.exit(1)
   }
}
//! ====== -------------- =========



export {
   registrar
}
