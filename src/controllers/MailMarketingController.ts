/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import htmlOutput from '../components/skeleton';

class MailMarkettingController {
  public async index(req: Request, res: Response): Promise<any> {
    try {
      console.log(htmlOutput);
      return res.send({ response: true });
    } catch (error) {
      console.log('server error', error);
      return false;
    }
  }
}

export default new MailMarkettingController();
