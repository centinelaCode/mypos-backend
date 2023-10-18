import { Router } from 'express'

import {
   obtenerCategorias,
   obtenerCategoria,
   agregarCategoria,
   editarCategoria,
   eliminarCategoria,
   activarCategoria,
   desactivarCategoria,
} from '../controllers/categoriaController.js'
import checkAuth from '../middleware/checkAuth.js';

const router = Router()


router.route('/')
   .get(checkAuth, obtenerCategorias)
   .post(checkAuth, agregarCategoria)
router.route('/:id')
   .get(checkAuth, obtenerCategoria)
   .put(checkAuth, editarCategoria)
   .delete(checkAuth, eliminarCategoria)
router.put('/activar-categoria/:id', activarCategoria)
router.put('/desactivar-categoria/:id', desactivarCategoria)


export default router

