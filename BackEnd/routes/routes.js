import express from 'express';
import { CreateOp, DeleteOp, UpdateOp, getAllOps, getOp } from '../controllers/BlogController.js';
const router = express.Router();

router.get('/',getAllOps);
router.get('/:id',getOp);
router.post('/',CreateOp);
router.put('/:id',UpdateOp);
router.delete('/:id',DeleteOp)

export default router
