import { Router } from 'express';
import MailMarkettingController from './controllers/MailMarketingController';

const routes = Router();

routes.get('/mailMarketing', MailMarkettingController.index);

export default routes;
