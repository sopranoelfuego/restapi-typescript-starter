import express from 'express';
import { addBook } from '../controllers';

const router = express.Router();

router.get('/ping', addBook);
export default router;
