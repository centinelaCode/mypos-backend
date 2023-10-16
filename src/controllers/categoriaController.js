import db from '../config/db.js'
import checkIsStringNumber from '../helpers/checkIsStringNumber.js'


//! ====== OBTENER CATEGORIAS =========
const obtenerCategorias = async(req, res) => {

   //? obtenemos todas las categorias
   try {
      const categories = await db.categoria.findMany({
         where: {
            activo: true
         },
         select: {
            id: true,
            nombre: true,
            descripcion: true,
         }
      })
      await db.$disconnect()

      res.json(categories)
   } catch (error) {
      console.error(error)
      await db.$disconnect()
      process.exit(1)
   }
}
//! ====== ------------------ =========




//! ====== OBTENER CATEGORIA  =========
const obtenerCategoria = async(req, res) => {
   const { id } = req.params

   //? obtener categoria
   try {

      //? validamos que el id sea un string number valido
      if(!checkIsStringNumber(id)) {
         const error = new Error('Error inesperado')
         return res.status(400).json({ msg: error.message })
      }

      const category = await db.categoria.findFirst({
         where: {
            id: Number(id),
            activo: true
         },
         select: {
            id: true,
            nombre: true,
            descripcion: true,
         }
      })

      if(!category) {
         const error = new Error('La Categoria no esta registrada')
         return res.status(400).json({ msg: error.message })
      }

      await db.$disconnect()

      res.json(category)
   } catch (error) {
      console.error(error)
      await db.$disconnect()
      process.exit(1)
   }
}
//! ====== ------------------ =========




//! ====== AGREGAR CATEGORIA =========
const agregarCategoria = async(req, res) => {
   const { nombre, descripcion, usuarioId } = req.body

   //? Validando que no exista el email
   const existCategoria = await db.categoria.findFirst({
      where: {
         nombre
      }
   })

   //? verificamos que no exista la categoria
   if(existCategoria){
      const error = new Error('La Categoria que deseas crear ya existe')
      return res.status(400).json({ msg: error.message })
   }

   //? guardamos la nueva categoria
   try {
      const newCategory = await db.categoria.create({
         data: {
            nombre,
            descripcion,
            usuarioId
         }
      })
      await db.$disconnect()

      res.json(newCategory)
   } catch (error) {
      console.error(error)
      await db.$disconnect()
      process.exit(1)
   }
}
//! ====== ----------------- =========



//! ====== EDITAR CATEGORIA =========
const editarCategoria = async(req, res) => {
   const { id } = req.params
   const { nombre, descripcion } = req.body

   //? actualizar la categoria
   try {
      //? validamos que el id sea un string number valido
      if(!checkIsStringNumber(id)) {
         const error = new Error('Error inesperado')
         return res.status(400).json({ msg: error.message })
      }

      //? validamos que la categoria a actualizar exista en la db
      const category = await db.categoria.findFirst({
         where: {
            id: Number(id),
            activo: true
         },
         select: {
            id: true,
            nombre: true,
            descripcion: true,
         }
      })

      if(!category) {
         const error = new Error('La Categoria no esta registrada')
         return res.status(400).json({ msg: error.message })
      }

      const categoriaActualizada = await db.categoria.update({
         where: {
            id: Number(id)
         },
         data: {
            nombre,
            descripcion
         }
      })

      if(!categoriaActualizada) {
         const error = new Error('La Categoria no esta registrada')
         return res.status(400).json({ msg: error.message })
      }
      await db.$disconnect()

      res.json(categoriaActualizada)
   } catch (error) {
      console.error(error)
      await db.$disconnect()
      process.exit(1)
   }
}
//! ====== ----------------- =========


//! ====== ELIMINAR CATEGORIA =========
const eliminarCategoria = async(req, res) => {
   const { id } = req.params

   try {
      //? validamos que el id sea un string number valido
      if(!checkIsStringNumber(id)) {
         const error = new Error('Error inesperado')
         return res.status(400).json({ msg: error.message })
      }

      //? validamos que la categoria a eliminar exista en la db
      const category = await db.categoria.findFirst({
         where: {
            id: Number(id),
            activo: true
         },
         select: {
            id: true,
            nombre: true,
            descripcion: true,
         }
      })

      if(!category) {
         const error = new Error('La Categoria no esta registrada')
         return res.status(400).json({ msg: error.message })
      }

      await db.categoria.delete({
         where: {
            id: Number(id)
         }
      })
      await db.$disconnect()

      res.json({ msg: 'Categoria Eliminada Correctamente' })
   } catch (error) {
      console.error(error)
      await db.$disconnect()
      process.exit(1)
   }
}
//! ====== ----------------- =========



export {
   obtenerCategorias,
   obtenerCategoria,
   agregarCategoria,
   editarCategoria,
   eliminarCategoria,
}





//! ====== XXX =========
//! ====== ------------------ =========
