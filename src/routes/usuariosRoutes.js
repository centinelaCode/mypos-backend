import { Router } from 'express'

import {
   registrar
} from '../controllers/usuarioController.js'

const router = Router()

//! === Autenticación | Registro | Confirmación ===
router.post('/registrar', registrar)






export default router
