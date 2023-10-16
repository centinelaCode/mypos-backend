import { Router } from 'express'

import {
   getUsers,
   registrar,
   autenticar,
   confirmarCuenta,
   olvidePassword,
   comprobarToken,
   nuevoPassword,
   perfil,
} from '../controllers/usuarioController.js'
import checkAuth from '../middleware/checkAuth.js';


const router = Router()

//* ================= Public =================
//! === Autenticación | Registro | Confirmación ===
router.get('/', getUsers)

router.post('/registrar', registrar)
router.post('/login', autenticar)
router.get('/confirmar/:token', confirmarCuenta)

router.post('/olvide-password', olvidePassword)          // enviamos email
router.route('/olvide-password/:token')
   .get(comprobarToken)                                  // validar token
   .post(nuevoPassword)                                  // para nevo password



//* ================= Private =================
//!
router.get('/perfil', checkAuth, perfil)







export default router
