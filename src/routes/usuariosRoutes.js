import { Router } from 'express'

import {
   getUsers,
   registrar,
   autenticar,
   confirmarCuenta,
} from '../controllers/usuarioController.js'

const router = Router()

//! === Autenticación | Registro | Confirmación ===
router.get('/', getUsers)

router.post('/registrar', registrar)
router.post('/login', autenticar)
router.get('/confirmar/:token', confirmarCuenta)






export default router
