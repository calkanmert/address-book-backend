import express, { Router } from 'express';
import userController from '../controllers/user.controller';
import userValidation from '../validations/user.validation';
import validate from '../middlewares/validate';
import result from '../utils/result';

const router: Router = express.Router();

router.post('/', validate(userValidation.createUser), userController.create);

export default router;
