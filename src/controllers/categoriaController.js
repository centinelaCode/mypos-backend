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

   res.json({msg: 'Add Categorie'})

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
