import db from '../config/db.js'


//! ====== OBTENER CATEGORIAS =========
const obtenerCategorias = async(req, res) => {

   res.json({msg: 'Get all Categories'})

}
//! ====== ------------------ =========



//! ====== OBTENER CATEGORIA  =========
const obtenerCategoria = async(req, res) => {

   res.json({msg: 'Get one Categorie'})

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

   res.json({msg: 'Update Categorie'})

}
//! ====== ----------------- =========


//! ====== ELIMINAR CATEGORIA =========
const eliminarCategoria = async(req, res) => {

   res.json({msg: 'Delete Categorie'})

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
