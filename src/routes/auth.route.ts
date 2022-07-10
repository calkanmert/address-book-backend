import express, { Router, Response, Request } from 'express';
import authController from '../controllers/auth.controller';
import authValidation from '../validations/auth.validation';
import validate from '../middlewares/validate';
import authenticate from '../middlewares/authenticate';

const router: Router = express.Router();

router.post('/', authenticate.authenticateToken, authController.getAuthenticatedUser);
router.post('/login', validate(authValidation.generateToken), authController.generateToken);

export default router;
