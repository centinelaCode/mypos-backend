import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
   res.json({msg: "DESDE /API/USUARIOS"})
})






export default router
