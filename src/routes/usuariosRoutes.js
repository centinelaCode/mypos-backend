import { Router } from 'express'

import {
   getUsers,
   registrar,
   autenticar,
   confirmarCuenta,
   olvidePassword,
   comprobarToken,
   nuevoPassword,
} from '../controllers/usuarioController.js'

const router = Router()

//! === Autenticación | Registro | Confirmación ===
router.get('/', getUsers)

router.post('/registrar', registrar)
router.post('/login', autenticar)
router.get('/confirmar/:token', confirmarCuenta)

router.post('/olvide-password', olvidePassword)         // enviamos email
// router.get('/olvide-password/:token', comprobarToken)   // validar token
// router.post('/olvide-password/:token', nuevoPassword,)  // para nevo password
router.route('/olvide-password/:token')
   .get(comprobarToken)    // validar token
   .post(nuevoPassword)    // para nevo password








export default router
