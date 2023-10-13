import { Router } from 'express'

import {
   getUsers,
   registrar,
   autenticar,
   confirmarCuenta,
   olvidePassword,
} from '../controllers/usuarioController.js'

const router = Router()

//! === Autenticación | Registro | Confirmación ===
router.get('/', getUsers)

router.post('/registrar', registrar)
router.post('/login', autenticar)
router.get('/confirmar/:token', confirmarCuenta)

router.post('/olvide-password', olvidePassword)    // enviamos email








export default router
