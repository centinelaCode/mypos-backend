import { Router } from 'express'

import {
   getUsers,
   registrar,
   autenticar,
   confirmarCuenta,
   olvidePassword,
   comprobarToken,
} from '../controllers/usuarioController.js'

const router = Router()

//! === Autenticación | Registro | Confirmación ===
router.get('/', getUsers)

router.post('/registrar', registrar)
router.post('/login', autenticar)
router.get('/confirmar/:token', confirmarCuenta)

router.post('/olvide-password', olvidePassword)         // enviamos email
router.get('/olvide-password/:token', comprobarToken)   // validar token








export default router
