import { Router } from 'express'

import {
   obtenerArticulos,
   agregarArticulo,
   obtenerArticulo,
   editarArticulo,
   eliminarArticulo,
   activarArticulo,
   desactivarArticulo,
} from '../controllers/articuloController.js'
import checkAuth from '../middleware/checkAuth.js'

const router = Router()


router.route('/')
   .get(checkAuth, obtenerArticulos)
   .post(checkAuth, agregarArticulo)
router.route('/:id')
   .get(checkAuth, obtenerArticulo)
   .put(checkAuth, editarArticulo)
   .delete(checkAuth, eliminarArticulo)
router.put('/activar-articulo/:id', activarArticulo)
router.put('/desactivar-articulo/:id', desactivarArticulo)


export default router
