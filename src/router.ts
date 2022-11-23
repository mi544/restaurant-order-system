import { Router } from 'express'
import { getMenuItems } from './controllers/menu'

const router = Router()

router.get('/menu', getMenuItems)

export default router
