import { Router } from 'express'

import {
   registrar,
   getUsers,
} from '../controllers/usuarioController.js'

const router = Router()

//! === Autenticación | Registro | Confirmación ===
router.post('/registrar', registrar)
router.get('/', getUsers)






export default router
