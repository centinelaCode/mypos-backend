import { Router } from 'express'

import {
   registrar,
   getUsers,
   autenticar,
} from '../controllers/usuarioController.js'

const router = Router()

//! === Autenticación | Registro | Confirmación ===
router.post('/registrar', registrar)
router.get('/', getUsers)

router.post('/login', autenticar)






export default router
