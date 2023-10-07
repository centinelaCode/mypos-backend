
//! ====== GET ALL USERS =========
const usuarios = (req, res) => {
   res.json({msg: "Obteniendo los usuarios..."})
}

//! ====== POST CREATE USER =========
const crearUsuario = (req, res) => {
   res.json({ msg: "Creando usuario..."})
}

export {
   usuarios,
   crearUsuario,
}
