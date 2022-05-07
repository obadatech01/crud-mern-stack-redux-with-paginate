import express from 'express';
import { createEmployee, getAllEmployee, updateEmployee, deleteEmployee } from '../controllers/employeeController.js';

const router = express.Router();

router.get('/', getAllEmployee);
router.post('/', createEmployee);
router.patch('/:id', updateEmployee);
router.delete('/:id', deleteEmployee);

export default router;