import { Router } from 'express'

import {
   usuarios,
   crearUsuario
} from '../controllers/usuarioController.js'

const router = Router()

router.get('/', usuarios)
router.post('/', crearUsuario)






export default router
