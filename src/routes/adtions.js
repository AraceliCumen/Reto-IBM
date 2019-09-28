import { Router } from 'express'
const router = Router();

import { saveAdition } from '../controllers/adition.controller'

// Routes
router.post('/sumar/:numberOne/:numberTwo', saveAdition);

export default router;